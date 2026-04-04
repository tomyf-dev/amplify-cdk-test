# amplify-cdk-test

AWS Amplify Gen2 のデプロイ上限を検証するリポジトリ。

各検証は独立したブランチで実施しており、ブランチごとに詳細なレポート（README.md）を含む。

## 検証一覧

### 1. テーブル数の上限 — `investigate-table-limit`

`a.model()` で定義できるテーブル（DynamoDB）の最大数を検証。認証ルールによって到達する制限が異なる。

| 認証ルール | 最大テーブル数 | 制限要因 |
|-----------|-------------|---------|
| `allow.authenticated()` | **246** | CloudFormation テンプレートサイズ (1MB) |
| `allow.guest()` | **56** | IAM PoliciesPerRole (10) |

### 2. Lambda リゾルバー数の上限 — `investigate-lambda-resolver-limit`

`a.handler.function()` で定義できる Lambda リゾルバー（カスタムクエリ/ミューテーション）の最大数を検証。Amplify が AppSync-Lambda 接続リソースを FunctionDirectiveStack に集約するため、1リゾルバーあたり6つの CloudFormation リソースが生成され、500 リソース/スタック上限に到達する。

| 最大リゾルバー数 | 制限要因 |
|----------------|---------|
| **83** | CloudFormation リソース数 (500/スタック) |

### 3. カスタム AppSync による回避策 — `investigate-custom-appsync-resolver-limit`

上記の 83 リゾルバー制限を回避するため、CDK で直接 AppSync API を構築する方法（カスタム AppSync）を検証。Lambda を共有するコントローラーパターンを採用することで、1リゾルバーあたりのリソース数を 6 → 1 に削減できる。

| 方式 | 最大リゾルバー数 | 制限要因 |
|------|----------------|---------|
| Lambda 共有（コントローラーパターン） | **491** | CloudFormation リソース数 (500/スタック) |
| 個別 Lambda（1:1） | **82** | 同上（改善効果なし） |

## 検証で判明した AWS 制限

| 制限 | 値 | 引き上げ可否 |
|------|---|------------|
| CloudFormation テンプレートサイズ | 1MB/スタック | 不可 |
| CloudFormation リソース数 | 500/スタック | 不可 |
| IAM PoliciesPerRole | 10/ロール | Service Quotas から申請可能 |

## 検証環境

- Amplify Backend: `@aws-amplify/backend@^1.22.0`
- CDK: `aws-cdk-lib@^2.234.1`
- リージョン: ap-northeast-1
