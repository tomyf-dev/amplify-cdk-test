import { Stack } from 'aws-cdk-lib';

export interface BackendWithStack {
  createStack: (name: string) => Stack;
}
