# amplify-cdk-test

## Amplify Gen2 テーブル数上限調査レポート

AWS Amplify Gen2 の `a.schema()` に定義できるテーブル（モデル）数の上限を、認証ルール別に検証した結果をまとめる。

### 検証環境

- Amplify Backend: `@aws-amplify/backend@^1.22.0`
- CDK: `aws-cdk-lib@^2.234.1`
- リージョン: ap-northeast-1
- デプロイ方法: `npx ampx sandbox --once`
- テーブル定義: 最小構成（`content: a.string()` のみ）

---

### 1. `allow.authenticated()` の場合

```typescript
TestN: a
  .model({ content: a.string() })
  .authorization((allow) => [allow.authenticated()]),
```

| テーブル数 | 結果 | エラー |
|-----------|------|--------|
| **246** | **成功** | - |
| **247** | **失敗** | CloudFormation テンプレートサイズ上限 (1MB) |

Amplify Gen2 では、各テーブル（モデル）に対して DynamoDB テーブル、AppSync リゾルバー（CRUD 各操作）、IAM ポリシーなどの CloudFormation リソースが自動生成される。これらのリソース定義はすべて data ネストスタックの CloudFormation テンプレートに集約されるため、テーブル数に比例してテンプレートサイズが増加する。247テーブルで CloudFormation のテンプレートサイズ上限 (1,000,000 bytes) に到達した。

なお、1テーブル内のフィールド数の影響は軽微であり、100フィールドまで追加してもテーブル数の閾値は変化しなかった。テンプレートサイズを支配するのはテーブル単位で生成されるリソース群であり、フィールド定義は GraphQL スキーマへの軽微な追加に留まるためである。

---

### 2. `allow.guest()` の場合

```typescript
TestN: a
  .model({ content: a.string() })
  .authorization((allow) => [allow.guest()]),
```

`allow.guest()` では2種類の制限に到達する。

#### 2-1. IAM PoliciesPerRole 上限（先に到達）

| テーブル数 | 結果 | エラー |
|-----------|------|--------|
| **56** | **成功** | - |
| **57** | **失敗** | IAM PoliciesPerRole: 10 超過 |

`allow.guest()` は未認証ユーザーにもアクセスを許可するため、各テーブルに対して Auth ロール（認証済みユーザー用）と Unauth ロール（ゲストユーザー用）の両方に CRUD 許可の IAM ポリシーステートメントを生成する。

IAM マネージドポリシーには1ポリシーあたりのサイズ上限 (6,144 bytes) があるため、テーブル数が増えてステートメントが増加すると、1つのポリシーに収まらなくなる。この場合 Amplify/CDK は自動的に複数のマネージドポリシーに分割する（`amplifyDataAuthRolePolicy0`, `amplifyDataAuthRolePolicy1`, ... のように連番で生成される）。

57テーブルの時点で1ロールあたり11個目のマネージドポリシーが必要となり、IAM のデフォルトクォータ「1ロールあたりマネージドポリシー最大10個 (PoliciesPerRole: 10)」を超過した。

`allow.authenticated()` では Unauth ロールへのポリシーが不要なため、同じテーブル数でもポリシー数が大幅に少なく、246テーブルでもこの制限には到達しなかった。

> IAM PoliciesPerRole はデフォルト10。AWS Service Quotas コンソールから引き上げ申請が可能。

#### 2-2. CloudFormation テンプレートサイズ上限

PoliciesPerRole を引き上げた場合に到達するもう1つの上限。CDK合成後のテンプレートサイズから算出した。

| テーブル数 | テンプレートサイズ | 結果 |
|-----------|-------------------|------|
| **82** | 996,412 bytes | **成功** |
| **83** | 1,007,884 bytes | **失敗** |

`allow.authenticated()` が246テーブルで1MBに到達するのに対し、`allow.guest()` は83テーブルで到達する。これは Auth/Unauth 両ロールの IAM ポリシー定義がテンプレートに含まれることでリソース量が大幅に増加するためである。1テーブルあたりのテンプレートサイズへの寄与は `allow.guest()` が `allow.authenticated()` の約3倍となる。

---

### 3. 比較まとめ

| 認証ルール | 実質上限 | 制限要因 |
|-----------|---------|---------|
| `allow.authenticated()` | **246 テーブル** | CloudFormation テンプレートサイズ (1MB) |
| `allow.guest()` | **56 テーブル** | IAM PoliciesPerRole (10) |
| `allow.guest()` (PoliciesPerRole引き上げ後) | **82 テーブル** | CloudFormation テンプレートサイズ (1MB) |

---

### 4. 制限の性質

| 制限 | 種類 | 引き上げ可否 |
|------|------|------------|
| CloudFormation テンプレートサイズ 1MB | AWS サービス仕様 | 不可 |
| IAM PoliciesPerRole: 10 | AWS アカウントクォータ | Service Quotas から申請可能 |
