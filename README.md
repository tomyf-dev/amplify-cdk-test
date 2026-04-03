# amplify-cdk-test

## Amplify Gen2 Lambda リゾルバー数上限調査レポート

AWS Amplify Gen2 の `a.schema()` に定義できる Lambda リゾルバー（カスタムクエリ/ミューテーション）数の上限を検証した結果をまとめる。

### 検証環境

- Amplify Backend: `@aws-amplify/backend@^1.22.0`
- CDK: `aws-cdk-lib@^2.234.1`
- リージョン: ap-northeast-1
- デプロイ方法: `npx ampx sandbox --once`
- リゾルバー定義: 最小構成（引数なし、`a.string()` を返すのみ）

---

### 1. 検証結果

```typescript
const fnN = defineFunction({ name: 'resolverN', entry: '../functions/resolver/handler.ts' });

// schema 内
testN: a
  .query()
  .returns(a.string())
  .authorization((allow) => [allow.guest()])
  .handler(a.handler.function(fnN)),
```

| リゾルバー数 | 結果 | エラー |
|------------|------|--------|
| **83** | **成功** | - |
| **84** | **失敗** | CloudFormation リソース数上限 (500/スタック) 超過 |

この上限は認証ルール（`allow.guest()` / `allow.authenticated()`）に依存しない。両方で同じ結果となることを確認済み。

---

### 2. エラー内容と原因

```
Number of resources in stack 'FunctionDirectiveStack': 505 is greater than allowed maximum of 500
```

#### FunctionDirectiveStack とは

Amplify Gen2 は CloudFormation リソースを用途別のネストスタックに分離する。`FunctionDirectiveStack` は **AppSync と Lambda を接続するための仲介リソース**が集約されるスタックである。Lambda 関数本体（`AWS::Lambda::Function`）はここには含まれず、別の function スタックに配置される。

#### リソース生成のトリガー

リソースは `defineFunction` の呼び出しではなく、スキーマ内の **`.handler(a.handler.function(...))` の定義数**に応じて生成される。`a.query()` / `a.mutation()` / `a.model()` の種別に関わらず、`.handler()` で Lambda を紐づけた定義がすべて FunctionDirectiveStack に集約される。そのため `defineFunction` を共有しても、リゾルバー定義の数だけリソースが作られる（後述の Section 3 参照）。

#### 84リゾルバー時のリソース内訳

| リソースタイプ | 個数 | 説明 |
|--------------|------|------|
| AWS::IAM::Role | 84 | AppSync が Lambda を invoke するためのロール |
| AWS::IAM::Policy | 84 | 上記ロールの IAM ポリシー |
| AWS::AppSync::DataSource | 84 | AppSync から Lambda を呼び出すデータソース定義 |
| AWS::AppSync::FunctionConfiguration | 168 | AppSync パイプライン関数（リゾルバーあたり2つ） |
| AWS::AppSync::Resolver | 84 | GraphQL フィールドとパイプラインの紐づけ |
| AWS::CDK::Metadata | 1 | CDK メタデータ |
| **合計** | **505** | **500を超過** |

1つの Lambda リゾルバーにつき **6つの CloudFormation リソース**が生成される。CloudFormation のネストスタックあたりのリソース上限は500のため、`(500 - 1) / 6 = 83.1` → **最大83リゾルバー**となる。

`FunctionConfiguration` がリゾルバーあたり2つ生成されるのは、Amplify が AppSync のパイプラインリゾルバーとして実装しており、リクエスト処理とレスポンス処理の2つの関数に分かれるためである。

なお、テーブル（`a.model()`）のリソースは別のネストスタックに配置されるため、テーブル数は FunctionDirectiveStack のリソース数に影響しない。

---

### 3. defineFunction の共有は効果なし

1つの `defineFunction` を複数リゾルバーで共有しても、FunctionDirectiveStack のリソース数は変わらない。IAM::Role, IAM::Policy, AppSync::DataSource はリゾルバー定義ごとに個別に生成される。

```typescript
// この構成でもリソース数は変わらない
const sharedFn = defineFunction({ name: 'shared', entry: '../functions/resolver/handler.ts' });

test1: a.query().returns(a.string()).handler(a.handler.function(sharedFn)),
test2: a.query().returns(a.string()).handler(a.handler.function(sharedFn)),
```

---

### 4. DynamoDB アクセス権付与の影響

Lambda リゾルバーに DynamoDB テーブルへのアクセス権（`addToRolePolicy`）を付与しても、FunctionDirectiveStack のリソース数は増加しない。既存の `IAM::Policy` リソースにポリシーステートメントが追加されるだけで、新しいリソースは生成されないためである。

83リゾルバー + DynamoDB アクセス権付与の構成でもデプロイに成功することを確認済み。

なお、`defineFunction` で作成した Lambda は data スタックではなく function スタックに配置される。そのため `grantReadWriteData` のような CDK L2 メソッドを使うと data スタックと function スタック間で循環参照が発生する。実務では `addToRolePolicy` でワイルドカード ARN を使用するか、テーブル ARN を環境変数で渡す設計が必要となる。

---

### 5. 制限の性質

| 制限 | 種類 | 引き上げ可否 |
|------|------|------------|
| CloudFormation リソース数 500/スタック | AWS サービス仕様 | 不可 |
