import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { setupAppsync } from './cdk/appsync';

const backend = defineBackend({
  auth,
  data,
});

const appsync = setupAppsync(backend);

backend.addOutput({
  custom: {
    appsync: {
      endpoint: appsync.endpoint,
      apiKey: appsync.apiKey,
    },
  },
});
