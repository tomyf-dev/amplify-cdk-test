# amplify-cdk-test

## カスタム AppSync による Lambda リゾルバー上限調査レポート

Amplify Gen2 のスキーマ定義（`a.handler.function()`）では、1リゾルバーあたり6つの CloudFormation リソースが生成されるため、CloudFormation の 500 リソース/スタック上限により Lambda リゾルバーは最大 83 個に制限される（詳細は `investigate-lambda-resolver-limit` ブランチ参照）。

本調査では、CDK で直接 AppSync API を構築する方法（カスタム AppSync）でこの制限をどこまで緩和できるかを検証した。

### 検証環境

- Amplify Backend: `@aws-amplify/backend@^1.22.0`
- CDK: `aws-cdk-lib@^2.234.1`
- リージョン: ap-northeast-1
- デプロイ方法: `npx ampx sandbox --once`

---

### 1. 検証結果: Lambda 共有パターン

1つの Lambda 関数を全リゾルバーで共有し、Lambda 内でリクエストの `fieldName` に応じて処理を分岐するパターン（コントローラーパターン）で検証した。

```typescript
// 1つの Lambda を全リゾルバーで共有
const fn = new nodejs.NodejsFunction(stack, 'ResolverFunction', { ... });
const ds = api.addLambdaDataSource('LambdaDS', fn);

// リゾルバーごとに AppSync::Resolver リソースのみ生成される
ds.createResolver('Test1Resolver', { typeName: 'Query', fieldName: 'test1' });
ds.createResolver('Test2Resolver', { typeName: 'Query', fieldName: 'test2' });
```

| リゾルバー数 | 結果 | エラー |
|------------|------|--------|
| **491** | **成功** | - |
| **492** | **失敗** | CloudFormation リソース数上限 (500/スタック) 超過 |

---

### 2. なぜ 83 → 491 に改善されるのか

Amplify の `a.handler.function()` では、1リゾルバーあたり **6つ**の CloudFormation リソースが生成される:

```
IAM::Role (1) + IAM::Policy (1) + AppSync::DataSource (1)
+ AppSync::FunctionConfiguration (2) + AppSync::Resolver (1) = 6リソース
```

カスタム AppSync で Lambda を共有すると、DataSource, IAM Role, Lambda 等はリゾルバー間で使い回されるため、リゾルバーごとに生成されるリソースは `AppSync::Resolver` の **1つだけ**になる。

スタック全体の固定リソースは 9 個:

| リソースタイプ | 個数 | 説明 |
|--------------|------|------|
| AWS::AppSync::GraphQLApi | 1 | AppSync API 本体 |
| AWS::AppSync::GraphQLSchema | 1 | GraphQL スキーマ |
| AWS::AppSync::ApiKey | 1 | API キー |
| AWS::IAM::Role | 2 | Lambda 実行ロール + AppSync サービスロール |
| AWS::IAM::Policy | 1 | Lambda 実行ポリシー |
| AWS::AppSync::DataSource | 1 | Lambda データソース |
| AWS::Lambda::Function | 1 | Lambda 関数本体 |
| AWS::CDK::Metadata | 1 | CDK メタデータ |

`(500 - 9) / 1 = 491` → **最大 491 リゾルバー**

---

### 3. 検証結果: 個別 Lambda パターン

リゾルバーごとに個別の Lambda 関数を割り当てた場合（1リゾルバー = 1 Lambda）:

| リゾルバー数 | 結果 | エラー |
|------------|------|--------|
| **82** | **成功** | - |
| **83** | **失敗** | CloudFormation リソース数上限 (500/スタック) 超過 |

個別 Lambda では1リゾルバーあたり **6つ**のリソースが生成される:

| リソースタイプ | 個数 | 説明 |
|--------------|------|------|
| AWS::Lambda::Function | 1 | Lambda 関数本体 |
| AWS::IAM::Role | 2 | Lambda 実行ロール + AppSync サービスロール |
| AWS::IAM::Policy | 1 | Lambda 実行ポリシー |
| AWS::AppSync::DataSource | 1 | Lambda データソース |
| AWS::AppSync::Resolver | 1 | GraphQL リゾルバー |

固定リソース 4個（GraphQLApi, GraphQLSchema, ApiKey, CDK::Metadata）を除くと `(500 - 4) / 6 = 82.6` → **最大 82 リゾルバー**。Amplify スキーマの 83 とほぼ同じ結果であり、カスタム AppSync に移行しても改善されない。

---

### 4. 比較まとめ

| 方式 | 上限 | 1リゾルバーあたりのリソース数 |
|------|------|---------------------------|
| Amplify `a.handler.function()` | **83** | 6 |
| カスタム AppSync + 個別 Lambda | **82** | 6 |
| カスタム AppSync + Lambda 共有 | **491** | 1 |

カスタム AppSync への移行で 500 リソース上限を回避できるのは、**コントローラーパターン（1つの Lambda に複数のリゾルバーを統合し、リクエストの `fieldName` 等で処理を分岐する設計）を採用した場合のみ**である。個別 Lambda では Amplify スキーマと同等のリソース数が生成されるため改善効果はない。

つまり、83 リゾルバーの壁を突破するには **カスタム AppSync + コントローラーパターン**の両方が必要となる。

---

### 5. カスタム AppSync の構成

```
amplify/
├── backend.ts                          ← createStack でカスタムスタックを作成
├── cdk/appsync/
│   ├── index.ts                        ← CDK で AppSync API + リゾルバーを構築
│   ├── schema.graphql                  ← GraphQL スキーマ定義
│   └── types.ts                        ← 型定義
├── functions/resolver/
│   └── handler.ts                      ← 共有 Lambda ハンドラー
└── data/resource.ts                    ← Amplify データ定義（Todo のみ）
```

`backend.createStack()` で独立したネストスタックを作成し、その中に CDK の `appsync.GraphqlApi` を直接構築する。Amplify の data スタックとは完全に独立したスタックとなるため、Amplify 側の制限（FunctionDirectiveStack の 500 リソース上限）の影響を受けない。

---

### 6. スタック分割による追加拡張は不可

AppSync のリゾルバーは API が存在するスタックに紐づくため、`createStack` を複数作成してもリゾルバーを分散できない。1つの AppSync API あたり 491 リゾルバーが上限となる。

491 以上が必要な場合は、複数の AppSync API を別スタックに作成する必要がある。

---

### 7. 制限の性質

| 制限 | 種類 | 引き上げ可否 |
|------|------|------------|
| CloudFormation リソース数 500/スタック | AWS サービス仕様 | 不可 |
