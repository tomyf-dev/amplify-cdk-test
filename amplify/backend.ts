import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

const backend = defineBackend({
  auth,
  data,
});

const testTable = backend.data.resources.tables['TestTable'];

// function スタック内の resolver Lambda に DynamoDB アクセス権を付与
const rootStack = backend.data.node.root;
rootStack.node.findAll().forEach((child) => {
  if (child instanceof lambda.Function && child.node.path.includes('function/resolver')) {
    child.addToRolePolicy(new iam.PolicyStatement({
      actions: [
        'dynamodb:GetItem',
        'dynamodb:PutItem',
        'dynamodb:UpdateItem',
        'dynamodb:DeleteItem',
        'dynamodb:Scan',
        'dynamodb:Query',
      ],
      resources: ['*'],
    }));
  }
});
