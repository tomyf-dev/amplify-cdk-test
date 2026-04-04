import * as appsync from 'aws-cdk-lib/aws-appsync';
import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as nodejs from 'aws-cdk-lib/aws-lambda-nodejs';
import { Duration } from 'aws-cdk-lib';
import { fileURLToPath } from 'url';
import type { BackendWithStack } from './types';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export interface SetupAppsyncOutput {
  endpoint: string;
  apiKey: string;
}

export function setupAppsync(backend: BackendWithStack): SetupAppsyncOutput {
  const stack = backend.createStack('CustomAppSyncStack');

  const api = new appsync.GraphqlApi(stack, 'CustomApi', {
    name: 'CustomApi',
    definition: appsync.Definition.fromFile(
      path.join(__dirname, 'schema.graphql')
    ),
    authorizationConfig: {
      defaultAuthorization: {
        authorizationType: appsync.AuthorizationType.API_KEY,
      },
    },
  });

  const fn = new nodejs.NodejsFunction(stack, 'ResolverFunction', {
    entry: path.join(__dirname, '../../functions/resolver/handler.ts'),
    handler: 'handler',
    runtime: lambda.Runtime.NODEJS_20_X,
    timeout: Duration.seconds(30),
  });

  const ds = api.addLambdaDataSource('LambdaDS', fn);

  ds.createResolver('Test1Resolver', {
    typeName: 'Query',
    fieldName: 'test1',
  });
  ds.createResolver('Test2Resolver', {
    typeName: 'Query',
    fieldName: 'test2',
  });
  ds.createResolver('Test3Resolver', {
    typeName: 'Query',
    fieldName: 'test3',
  });
  ds.createResolver('Test4Resolver', {
    typeName: 'Query',
    fieldName: 'test4',
  });
  ds.createResolver('Test5Resolver', {
    typeName: 'Query',
    fieldName: 'test5',
  });
  ds.createResolver('Test6Resolver', {
    typeName: 'Query',
    fieldName: 'test6',
  });
  ds.createResolver('Test7Resolver', {
    typeName: 'Query',
    fieldName: 'test7',
  });
  ds.createResolver('Test8Resolver', {
    typeName: 'Query',
    fieldName: 'test8',
  });
  ds.createResolver('Test9Resolver', {
    typeName: 'Query',
    fieldName: 'test9',
  });
  ds.createResolver('Test10Resolver', {
    typeName: 'Query',
    fieldName: 'test10',
  });
  ds.createResolver('Test11Resolver', {
    typeName: 'Query',
    fieldName: 'test11',
  });
  ds.createResolver('Test12Resolver', {
    typeName: 'Query',
    fieldName: 'test12',
  });
  ds.createResolver('Test13Resolver', {
    typeName: 'Query',
    fieldName: 'test13',
  });
  ds.createResolver('Test14Resolver', {
    typeName: 'Query',
    fieldName: 'test14',
  });
  ds.createResolver('Test15Resolver', {
    typeName: 'Query',
    fieldName: 'test15',
  });
  ds.createResolver('Test16Resolver', {
    typeName: 'Query',
    fieldName: 'test16',
  });
  ds.createResolver('Test17Resolver', {
    typeName: 'Query',
    fieldName: 'test17',
  });
  ds.createResolver('Test18Resolver', {
    typeName: 'Query',
    fieldName: 'test18',
  });
  ds.createResolver('Test19Resolver', {
    typeName: 'Query',
    fieldName: 'test19',
  });
  ds.createResolver('Test20Resolver', {
    typeName: 'Query',
    fieldName: 'test20',
  });
  ds.createResolver('Test21Resolver', {
    typeName: 'Query',
    fieldName: 'test21',
  });
  ds.createResolver('Test22Resolver', {
    typeName: 'Query',
    fieldName: 'test22',
  });
  ds.createResolver('Test23Resolver', {
    typeName: 'Query',
    fieldName: 'test23',
  });
  ds.createResolver('Test24Resolver', {
    typeName: 'Query',
    fieldName: 'test24',
  });
  ds.createResolver('Test25Resolver', {
    typeName: 'Query',
    fieldName: 'test25',
  });
  ds.createResolver('Test26Resolver', {
    typeName: 'Query',
    fieldName: 'test26',
  });
  ds.createResolver('Test27Resolver', {
    typeName: 'Query',
    fieldName: 'test27',
  });
  ds.createResolver('Test28Resolver', {
    typeName: 'Query',
    fieldName: 'test28',
  });
  ds.createResolver('Test29Resolver', {
    typeName: 'Query',
    fieldName: 'test29',
  });
  ds.createResolver('Test30Resolver', {
    typeName: 'Query',
    fieldName: 'test30',
  });
  ds.createResolver('Test31Resolver', {
    typeName: 'Query',
    fieldName: 'test31',
  });
  ds.createResolver('Test32Resolver', {
    typeName: 'Query',
    fieldName: 'test32',
  });
  ds.createResolver('Test33Resolver', {
    typeName: 'Query',
    fieldName: 'test33',
  });
  ds.createResolver('Test34Resolver', {
    typeName: 'Query',
    fieldName: 'test34',
  });
  ds.createResolver('Test35Resolver', {
    typeName: 'Query',
    fieldName: 'test35',
  });
  ds.createResolver('Test36Resolver', {
    typeName: 'Query',
    fieldName: 'test36',
  });
  ds.createResolver('Test37Resolver', {
    typeName: 'Query',
    fieldName: 'test37',
  });
  ds.createResolver('Test38Resolver', {
    typeName: 'Query',
    fieldName: 'test38',
  });
  ds.createResolver('Test39Resolver', {
    typeName: 'Query',
    fieldName: 'test39',
  });
  ds.createResolver('Test40Resolver', {
    typeName: 'Query',
    fieldName: 'test40',
  });
  ds.createResolver('Test41Resolver', {
    typeName: 'Query',
    fieldName: 'test41',
  });
  ds.createResolver('Test42Resolver', {
    typeName: 'Query',
    fieldName: 'test42',
  });
  ds.createResolver('Test43Resolver', {
    typeName: 'Query',
    fieldName: 'test43',
  });
  ds.createResolver('Test44Resolver', {
    typeName: 'Query',
    fieldName: 'test44',
  });
  ds.createResolver('Test45Resolver', {
    typeName: 'Query',
    fieldName: 'test45',
  });
  ds.createResolver('Test46Resolver', {
    typeName: 'Query',
    fieldName: 'test46',
  });
  ds.createResolver('Test47Resolver', {
    typeName: 'Query',
    fieldName: 'test47',
  });
  ds.createResolver('Test48Resolver', {
    typeName: 'Query',
    fieldName: 'test48',
  });
  ds.createResolver('Test49Resolver', {
    typeName: 'Query',
    fieldName: 'test49',
  });
  ds.createResolver('Test50Resolver', {
    typeName: 'Query',
    fieldName: 'test50',
  });
  ds.createResolver('Test51Resolver', {
    typeName: 'Query',
    fieldName: 'test51',
  });
  ds.createResolver('Test52Resolver', {
    typeName: 'Query',
    fieldName: 'test52',
  });
  ds.createResolver('Test53Resolver', {
    typeName: 'Query',
    fieldName: 'test53',
  });
  ds.createResolver('Test54Resolver', {
    typeName: 'Query',
    fieldName: 'test54',
  });
  ds.createResolver('Test55Resolver', {
    typeName: 'Query',
    fieldName: 'test55',
  });
  ds.createResolver('Test56Resolver', {
    typeName: 'Query',
    fieldName: 'test56',
  });
  ds.createResolver('Test57Resolver', {
    typeName: 'Query',
    fieldName: 'test57',
  });
  ds.createResolver('Test58Resolver', {
    typeName: 'Query',
    fieldName: 'test58',
  });
  ds.createResolver('Test59Resolver', {
    typeName: 'Query',
    fieldName: 'test59',
  });
  ds.createResolver('Test60Resolver', {
    typeName: 'Query',
    fieldName: 'test60',
  });
  ds.createResolver('Test61Resolver', {
    typeName: 'Query',
    fieldName: 'test61',
  });
  ds.createResolver('Test62Resolver', {
    typeName: 'Query',
    fieldName: 'test62',
  });
  ds.createResolver('Test63Resolver', {
    typeName: 'Query',
    fieldName: 'test63',
  });
  ds.createResolver('Test64Resolver', {
    typeName: 'Query',
    fieldName: 'test64',
  });
  ds.createResolver('Test65Resolver', {
    typeName: 'Query',
    fieldName: 'test65',
  });
  ds.createResolver('Test66Resolver', {
    typeName: 'Query',
    fieldName: 'test66',
  });
  ds.createResolver('Test67Resolver', {
    typeName: 'Query',
    fieldName: 'test67',
  });
  ds.createResolver('Test68Resolver', {
    typeName: 'Query',
    fieldName: 'test68',
  });
  ds.createResolver('Test69Resolver', {
    typeName: 'Query',
    fieldName: 'test69',
  });
  ds.createResolver('Test70Resolver', {
    typeName: 'Query',
    fieldName: 'test70',
  });
  ds.createResolver('Test71Resolver', {
    typeName: 'Query',
    fieldName: 'test71',
  });
  ds.createResolver('Test72Resolver', {
    typeName: 'Query',
    fieldName: 'test72',
  });
  ds.createResolver('Test73Resolver', {
    typeName: 'Query',
    fieldName: 'test73',
  });
  ds.createResolver('Test74Resolver', {
    typeName: 'Query',
    fieldName: 'test74',
  });
  ds.createResolver('Test75Resolver', {
    typeName: 'Query',
    fieldName: 'test75',
  });
  ds.createResolver('Test76Resolver', {
    typeName: 'Query',
    fieldName: 'test76',
  });
  ds.createResolver('Test77Resolver', {
    typeName: 'Query',
    fieldName: 'test77',
  });
  ds.createResolver('Test78Resolver', {
    typeName: 'Query',
    fieldName: 'test78',
  });
  ds.createResolver('Test79Resolver', {
    typeName: 'Query',
    fieldName: 'test79',
  });
  ds.createResolver('Test80Resolver', {
    typeName: 'Query',
    fieldName: 'test80',
  });
  ds.createResolver('Test81Resolver', {
    typeName: 'Query',
    fieldName: 'test81',
  });
  ds.createResolver('Test82Resolver', {
    typeName: 'Query',
    fieldName: 'test82',
  });
  ds.createResolver('Test83Resolver', {
    typeName: 'Query',
    fieldName: 'test83',
  });
  ds.createResolver('Test84Resolver', {
    typeName: 'Query',
    fieldName: 'test84',
  });
  ds.createResolver('Test85Resolver', {
    typeName: 'Query',
    fieldName: 'test85',
  });
  ds.createResolver('Test86Resolver', {
    typeName: 'Query',
    fieldName: 'test86',
  });
  ds.createResolver('Test87Resolver', {
    typeName: 'Query',
    fieldName: 'test87',
  });
  ds.createResolver('Test88Resolver', {
    typeName: 'Query',
    fieldName: 'test88',
  });
  ds.createResolver('Test89Resolver', {
    typeName: 'Query',
    fieldName: 'test89',
  });
  ds.createResolver('Test90Resolver', {
    typeName: 'Query',
    fieldName: 'test90',
  });
  ds.createResolver('Test91Resolver', {
    typeName: 'Query',
    fieldName: 'test91',
  });
  ds.createResolver('Test92Resolver', {
    typeName: 'Query',
    fieldName: 'test92',
  });
  ds.createResolver('Test93Resolver', {
    typeName: 'Query',
    fieldName: 'test93',
  });
  ds.createResolver('Test94Resolver', {
    typeName: 'Query',
    fieldName: 'test94',
  });
  ds.createResolver('Test95Resolver', {
    typeName: 'Query',
    fieldName: 'test95',
  });
  ds.createResolver('Test96Resolver', {
    typeName: 'Query',
    fieldName: 'test96',
  });
  ds.createResolver('Test97Resolver', {
    typeName: 'Query',
    fieldName: 'test97',
  });
  ds.createResolver('Test98Resolver', {
    typeName: 'Query',
    fieldName: 'test98',
  });
  ds.createResolver('Test99Resolver', {
    typeName: 'Query',
    fieldName: 'test99',
  });
  ds.createResolver('Test100Resolver', {
    typeName: 'Query',
    fieldName: 'test100',
  });
  ds.createResolver('Test101Resolver', {
    typeName: 'Query',
    fieldName: 'test101',
  });
  ds.createResolver('Test102Resolver', {
    typeName: 'Query',
    fieldName: 'test102',
  });
  ds.createResolver('Test103Resolver', {
    typeName: 'Query',
    fieldName: 'test103',
  });
  ds.createResolver('Test104Resolver', {
    typeName: 'Query',
    fieldName: 'test104',
  });
  ds.createResolver('Test105Resolver', {
    typeName: 'Query',
    fieldName: 'test105',
  });
  ds.createResolver('Test106Resolver', {
    typeName: 'Query',
    fieldName: 'test106',
  });
  ds.createResolver('Test107Resolver', {
    typeName: 'Query',
    fieldName: 'test107',
  });
  ds.createResolver('Test108Resolver', {
    typeName: 'Query',
    fieldName: 'test108',
  });
  ds.createResolver('Test109Resolver', {
    typeName: 'Query',
    fieldName: 'test109',
  });
  ds.createResolver('Test110Resolver', {
    typeName: 'Query',
    fieldName: 'test110',
  });
  ds.createResolver('Test111Resolver', {
    typeName: 'Query',
    fieldName: 'test111',
  });
  ds.createResolver('Test112Resolver', {
    typeName: 'Query',
    fieldName: 'test112',
  });
  ds.createResolver('Test113Resolver', {
    typeName: 'Query',
    fieldName: 'test113',
  });
  ds.createResolver('Test114Resolver', {
    typeName: 'Query',
    fieldName: 'test114',
  });
  ds.createResolver('Test115Resolver', {
    typeName: 'Query',
    fieldName: 'test115',
  });
  ds.createResolver('Test116Resolver', {
    typeName: 'Query',
    fieldName: 'test116',
  });
  ds.createResolver('Test117Resolver', {
    typeName: 'Query',
    fieldName: 'test117',
  });
  ds.createResolver('Test118Resolver', {
    typeName: 'Query',
    fieldName: 'test118',
  });
  ds.createResolver('Test119Resolver', {
    typeName: 'Query',
    fieldName: 'test119',
  });
  ds.createResolver('Test120Resolver', {
    typeName: 'Query',
    fieldName: 'test120',
  });
  ds.createResolver('Test121Resolver', {
    typeName: 'Query',
    fieldName: 'test121',
  });
  ds.createResolver('Test122Resolver', {
    typeName: 'Query',
    fieldName: 'test122',
  });
  ds.createResolver('Test123Resolver', {
    typeName: 'Query',
    fieldName: 'test123',
  });
  ds.createResolver('Test124Resolver', {
    typeName: 'Query',
    fieldName: 'test124',
  });
  ds.createResolver('Test125Resolver', {
    typeName: 'Query',
    fieldName: 'test125',
  });
  ds.createResolver('Test126Resolver', {
    typeName: 'Query',
    fieldName: 'test126',
  });
  ds.createResolver('Test127Resolver', {
    typeName: 'Query',
    fieldName: 'test127',
  });
  ds.createResolver('Test128Resolver', {
    typeName: 'Query',
    fieldName: 'test128',
  });
  ds.createResolver('Test129Resolver', {
    typeName: 'Query',
    fieldName: 'test129',
  });
  ds.createResolver('Test130Resolver', {
    typeName: 'Query',
    fieldName: 'test130',
  });
  ds.createResolver('Test131Resolver', {
    typeName: 'Query',
    fieldName: 'test131',
  });
  ds.createResolver('Test132Resolver', {
    typeName: 'Query',
    fieldName: 'test132',
  });
  ds.createResolver('Test133Resolver', {
    typeName: 'Query',
    fieldName: 'test133',
  });
  ds.createResolver('Test134Resolver', {
    typeName: 'Query',
    fieldName: 'test134',
  });
  ds.createResolver('Test135Resolver', {
    typeName: 'Query',
    fieldName: 'test135',
  });
  ds.createResolver('Test136Resolver', {
    typeName: 'Query',
    fieldName: 'test136',
  });
  ds.createResolver('Test137Resolver', {
    typeName: 'Query',
    fieldName: 'test137',
  });
  ds.createResolver('Test138Resolver', {
    typeName: 'Query',
    fieldName: 'test138',
  });
  ds.createResolver('Test139Resolver', {
    typeName: 'Query',
    fieldName: 'test139',
  });
  ds.createResolver('Test140Resolver', {
    typeName: 'Query',
    fieldName: 'test140',
  });
  ds.createResolver('Test141Resolver', {
    typeName: 'Query',
    fieldName: 'test141',
  });
  ds.createResolver('Test142Resolver', {
    typeName: 'Query',
    fieldName: 'test142',
  });
  ds.createResolver('Test143Resolver', {
    typeName: 'Query',
    fieldName: 'test143',
  });
  ds.createResolver('Test144Resolver', {
    typeName: 'Query',
    fieldName: 'test144',
  });
  ds.createResolver('Test145Resolver', {
    typeName: 'Query',
    fieldName: 'test145',
  });
  ds.createResolver('Test146Resolver', {
    typeName: 'Query',
    fieldName: 'test146',
  });
  ds.createResolver('Test147Resolver', {
    typeName: 'Query',
    fieldName: 'test147',
  });
  ds.createResolver('Test148Resolver', {
    typeName: 'Query',
    fieldName: 'test148',
  });
  ds.createResolver('Test149Resolver', {
    typeName: 'Query',
    fieldName: 'test149',
  });
  ds.createResolver('Test150Resolver', {
    typeName: 'Query',
    fieldName: 'test150',
  });
  ds.createResolver('Test151Resolver', {
    typeName: 'Query',
    fieldName: 'test151',
  });
  ds.createResolver('Test152Resolver', {
    typeName: 'Query',
    fieldName: 'test152',
  });
  ds.createResolver('Test153Resolver', {
    typeName: 'Query',
    fieldName: 'test153',
  });
  ds.createResolver('Test154Resolver', {
    typeName: 'Query',
    fieldName: 'test154',
  });
  ds.createResolver('Test155Resolver', {
    typeName: 'Query',
    fieldName: 'test155',
  });
  ds.createResolver('Test156Resolver', {
    typeName: 'Query',
    fieldName: 'test156',
  });
  ds.createResolver('Test157Resolver', {
    typeName: 'Query',
    fieldName: 'test157',
  });
  ds.createResolver('Test158Resolver', {
    typeName: 'Query',
    fieldName: 'test158',
  });
  ds.createResolver('Test159Resolver', {
    typeName: 'Query',
    fieldName: 'test159',
  });
  ds.createResolver('Test160Resolver', {
    typeName: 'Query',
    fieldName: 'test160',
  });
  ds.createResolver('Test161Resolver', {
    typeName: 'Query',
    fieldName: 'test161',
  });
  ds.createResolver('Test162Resolver', {
    typeName: 'Query',
    fieldName: 'test162',
  });
  ds.createResolver('Test163Resolver', {
    typeName: 'Query',
    fieldName: 'test163',
  });
  ds.createResolver('Test164Resolver', {
    typeName: 'Query',
    fieldName: 'test164',
  });
  ds.createResolver('Test165Resolver', {
    typeName: 'Query',
    fieldName: 'test165',
  });
  ds.createResolver('Test166Resolver', {
    typeName: 'Query',
    fieldName: 'test166',
  });
  ds.createResolver('Test167Resolver', {
    typeName: 'Query',
    fieldName: 'test167',
  });
  ds.createResolver('Test168Resolver', {
    typeName: 'Query',
    fieldName: 'test168',
  });
  ds.createResolver('Test169Resolver', {
    typeName: 'Query',
    fieldName: 'test169',
  });
  ds.createResolver('Test170Resolver', {
    typeName: 'Query',
    fieldName: 'test170',
  });
  ds.createResolver('Test171Resolver', {
    typeName: 'Query',
    fieldName: 'test171',
  });
  ds.createResolver('Test172Resolver', {
    typeName: 'Query',
    fieldName: 'test172',
  });
  ds.createResolver('Test173Resolver', {
    typeName: 'Query',
    fieldName: 'test173',
  });
  ds.createResolver('Test174Resolver', {
    typeName: 'Query',
    fieldName: 'test174',
  });
  ds.createResolver('Test175Resolver', {
    typeName: 'Query',
    fieldName: 'test175',
  });
  ds.createResolver('Test176Resolver', {
    typeName: 'Query',
    fieldName: 'test176',
  });
  ds.createResolver('Test177Resolver', {
    typeName: 'Query',
    fieldName: 'test177',
  });
  ds.createResolver('Test178Resolver', {
    typeName: 'Query',
    fieldName: 'test178',
  });
  ds.createResolver('Test179Resolver', {
    typeName: 'Query',
    fieldName: 'test179',
  });
  ds.createResolver('Test180Resolver', {
    typeName: 'Query',
    fieldName: 'test180',
  });
  ds.createResolver('Test181Resolver', {
    typeName: 'Query',
    fieldName: 'test181',
  });
  ds.createResolver('Test182Resolver', {
    typeName: 'Query',
    fieldName: 'test182',
  });
  ds.createResolver('Test183Resolver', {
    typeName: 'Query',
    fieldName: 'test183',
  });
  ds.createResolver('Test184Resolver', {
    typeName: 'Query',
    fieldName: 'test184',
  });
  ds.createResolver('Test185Resolver', {
    typeName: 'Query',
    fieldName: 'test185',
  });
  ds.createResolver('Test186Resolver', {
    typeName: 'Query',
    fieldName: 'test186',
  });
  ds.createResolver('Test187Resolver', {
    typeName: 'Query',
    fieldName: 'test187',
  });
  ds.createResolver('Test188Resolver', {
    typeName: 'Query',
    fieldName: 'test188',
  });
  ds.createResolver('Test189Resolver', {
    typeName: 'Query',
    fieldName: 'test189',
  });
  ds.createResolver('Test190Resolver', {
    typeName: 'Query',
    fieldName: 'test190',
  });
  ds.createResolver('Test191Resolver', {
    typeName: 'Query',
    fieldName: 'test191',
  });
  ds.createResolver('Test192Resolver', {
    typeName: 'Query',
    fieldName: 'test192',
  });
  ds.createResolver('Test193Resolver', {
    typeName: 'Query',
    fieldName: 'test193',
  });
  ds.createResolver('Test194Resolver', {
    typeName: 'Query',
    fieldName: 'test194',
  });
  ds.createResolver('Test195Resolver', {
    typeName: 'Query',
    fieldName: 'test195',
  });
  ds.createResolver('Test196Resolver', {
    typeName: 'Query',
    fieldName: 'test196',
  });
  ds.createResolver('Test197Resolver', {
    typeName: 'Query',
    fieldName: 'test197',
  });
  ds.createResolver('Test198Resolver', {
    typeName: 'Query',
    fieldName: 'test198',
  });
  ds.createResolver('Test199Resolver', {
    typeName: 'Query',
    fieldName: 'test199',
  });
  ds.createResolver('Test200Resolver', {
    typeName: 'Query',
    fieldName: 'test200',
  });
  ds.createResolver('Test201Resolver', {
    typeName: 'Query',
    fieldName: 'test201',
  });
  ds.createResolver('Test202Resolver', {
    typeName: 'Query',
    fieldName: 'test202',
  });
  ds.createResolver('Test203Resolver', {
    typeName: 'Query',
    fieldName: 'test203',
  });
  ds.createResolver('Test204Resolver', {
    typeName: 'Query',
    fieldName: 'test204',
  });
  ds.createResolver('Test205Resolver', {
    typeName: 'Query',
    fieldName: 'test205',
  });
  ds.createResolver('Test206Resolver', {
    typeName: 'Query',
    fieldName: 'test206',
  });
  ds.createResolver('Test207Resolver', {
    typeName: 'Query',
    fieldName: 'test207',
  });
  ds.createResolver('Test208Resolver', {
    typeName: 'Query',
    fieldName: 'test208',
  });
  ds.createResolver('Test209Resolver', {
    typeName: 'Query',
    fieldName: 'test209',
  });
  ds.createResolver('Test210Resolver', {
    typeName: 'Query',
    fieldName: 'test210',
  });
  ds.createResolver('Test211Resolver', {
    typeName: 'Query',
    fieldName: 'test211',
  });
  ds.createResolver('Test212Resolver', {
    typeName: 'Query',
    fieldName: 'test212',
  });
  ds.createResolver('Test213Resolver', {
    typeName: 'Query',
    fieldName: 'test213',
  });
  ds.createResolver('Test214Resolver', {
    typeName: 'Query',
    fieldName: 'test214',
  });
  ds.createResolver('Test215Resolver', {
    typeName: 'Query',
    fieldName: 'test215',
  });
  ds.createResolver('Test216Resolver', {
    typeName: 'Query',
    fieldName: 'test216',
  });
  ds.createResolver('Test217Resolver', {
    typeName: 'Query',
    fieldName: 'test217',
  });
  ds.createResolver('Test218Resolver', {
    typeName: 'Query',
    fieldName: 'test218',
  });
  ds.createResolver('Test219Resolver', {
    typeName: 'Query',
    fieldName: 'test219',
  });
  ds.createResolver('Test220Resolver', {
    typeName: 'Query',
    fieldName: 'test220',
  });
  ds.createResolver('Test221Resolver', {
    typeName: 'Query',
    fieldName: 'test221',
  });
  ds.createResolver('Test222Resolver', {
    typeName: 'Query',
    fieldName: 'test222',
  });
  ds.createResolver('Test223Resolver', {
    typeName: 'Query',
    fieldName: 'test223',
  });
  ds.createResolver('Test224Resolver', {
    typeName: 'Query',
    fieldName: 'test224',
  });
  ds.createResolver('Test225Resolver', {
    typeName: 'Query',
    fieldName: 'test225',
  });
  ds.createResolver('Test226Resolver', {
    typeName: 'Query',
    fieldName: 'test226',
  });
  ds.createResolver('Test227Resolver', {
    typeName: 'Query',
    fieldName: 'test227',
  });
  ds.createResolver('Test228Resolver', {
    typeName: 'Query',
    fieldName: 'test228',
  });
  ds.createResolver('Test229Resolver', {
    typeName: 'Query',
    fieldName: 'test229',
  });
  ds.createResolver('Test230Resolver', {
    typeName: 'Query',
    fieldName: 'test230',
  });
  ds.createResolver('Test231Resolver', {
    typeName: 'Query',
    fieldName: 'test231',
  });
  ds.createResolver('Test232Resolver', {
    typeName: 'Query',
    fieldName: 'test232',
  });
  ds.createResolver('Test233Resolver', {
    typeName: 'Query',
    fieldName: 'test233',
  });
  ds.createResolver('Test234Resolver', {
    typeName: 'Query',
    fieldName: 'test234',
  });
  ds.createResolver('Test235Resolver', {
    typeName: 'Query',
    fieldName: 'test235',
  });
  ds.createResolver('Test236Resolver', {
    typeName: 'Query',
    fieldName: 'test236',
  });
  ds.createResolver('Test237Resolver', {
    typeName: 'Query',
    fieldName: 'test237',
  });
  ds.createResolver('Test238Resolver', {
    typeName: 'Query',
    fieldName: 'test238',
  });
  ds.createResolver('Test239Resolver', {
    typeName: 'Query',
    fieldName: 'test239',
  });
  ds.createResolver('Test240Resolver', {
    typeName: 'Query',
    fieldName: 'test240',
  });
  ds.createResolver('Test241Resolver', {
    typeName: 'Query',
    fieldName: 'test241',
  });
  ds.createResolver('Test242Resolver', {
    typeName: 'Query',
    fieldName: 'test242',
  });
  ds.createResolver('Test243Resolver', {
    typeName: 'Query',
    fieldName: 'test243',
  });
  ds.createResolver('Test244Resolver', {
    typeName: 'Query',
    fieldName: 'test244',
  });
  ds.createResolver('Test245Resolver', {
    typeName: 'Query',
    fieldName: 'test245',
  });
  ds.createResolver('Test246Resolver', {
    typeName: 'Query',
    fieldName: 'test246',
  });
  ds.createResolver('Test247Resolver', {
    typeName: 'Query',
    fieldName: 'test247',
  });
  ds.createResolver('Test248Resolver', {
    typeName: 'Query',
    fieldName: 'test248',
  });
  ds.createResolver('Test249Resolver', {
    typeName: 'Query',
    fieldName: 'test249',
  });
  ds.createResolver('Test250Resolver', {
    typeName: 'Query',
    fieldName: 'test250',
  });
  ds.createResolver('Test251Resolver', {
    typeName: 'Query',
    fieldName: 'test251',
  });
  ds.createResolver('Test252Resolver', {
    typeName: 'Query',
    fieldName: 'test252',
  });
  ds.createResolver('Test253Resolver', {
    typeName: 'Query',
    fieldName: 'test253',
  });
  ds.createResolver('Test254Resolver', {
    typeName: 'Query',
    fieldName: 'test254',
  });
  ds.createResolver('Test255Resolver', {
    typeName: 'Query',
    fieldName: 'test255',
  });
  ds.createResolver('Test256Resolver', {
    typeName: 'Query',
    fieldName: 'test256',
  });
  ds.createResolver('Test257Resolver', {
    typeName: 'Query',
    fieldName: 'test257',
  });
  ds.createResolver('Test258Resolver', {
    typeName: 'Query',
    fieldName: 'test258',
  });
  ds.createResolver('Test259Resolver', {
    typeName: 'Query',
    fieldName: 'test259',
  });
  ds.createResolver('Test260Resolver', {
    typeName: 'Query',
    fieldName: 'test260',
  });
  ds.createResolver('Test261Resolver', {
    typeName: 'Query',
    fieldName: 'test261',
  });
  ds.createResolver('Test262Resolver', {
    typeName: 'Query',
    fieldName: 'test262',
  });
  ds.createResolver('Test263Resolver', {
    typeName: 'Query',
    fieldName: 'test263',
  });
  ds.createResolver('Test264Resolver', {
    typeName: 'Query',
    fieldName: 'test264',
  });
  ds.createResolver('Test265Resolver', {
    typeName: 'Query',
    fieldName: 'test265',
  });
  ds.createResolver('Test266Resolver', {
    typeName: 'Query',
    fieldName: 'test266',
  });
  ds.createResolver('Test267Resolver', {
    typeName: 'Query',
    fieldName: 'test267',
  });
  ds.createResolver('Test268Resolver', {
    typeName: 'Query',
    fieldName: 'test268',
  });
  ds.createResolver('Test269Resolver', {
    typeName: 'Query',
    fieldName: 'test269',
  });
  ds.createResolver('Test270Resolver', {
    typeName: 'Query',
    fieldName: 'test270',
  });
  ds.createResolver('Test271Resolver', {
    typeName: 'Query',
    fieldName: 'test271',
  });
  ds.createResolver('Test272Resolver', {
    typeName: 'Query',
    fieldName: 'test272',
  });
  ds.createResolver('Test273Resolver', {
    typeName: 'Query',
    fieldName: 'test273',
  });
  ds.createResolver('Test274Resolver', {
    typeName: 'Query',
    fieldName: 'test274',
  });
  ds.createResolver('Test275Resolver', {
    typeName: 'Query',
    fieldName: 'test275',
  });
  ds.createResolver('Test276Resolver', {
    typeName: 'Query',
    fieldName: 'test276',
  });
  ds.createResolver('Test277Resolver', {
    typeName: 'Query',
    fieldName: 'test277',
  });
  ds.createResolver('Test278Resolver', {
    typeName: 'Query',
    fieldName: 'test278',
  });
  ds.createResolver('Test279Resolver', {
    typeName: 'Query',
    fieldName: 'test279',
  });
  ds.createResolver('Test280Resolver', {
    typeName: 'Query',
    fieldName: 'test280',
  });
  ds.createResolver('Test281Resolver', {
    typeName: 'Query',
    fieldName: 'test281',
  });
  ds.createResolver('Test282Resolver', {
    typeName: 'Query',
    fieldName: 'test282',
  });
  ds.createResolver('Test283Resolver', {
    typeName: 'Query',
    fieldName: 'test283',
  });
  ds.createResolver('Test284Resolver', {
    typeName: 'Query',
    fieldName: 'test284',
  });
  ds.createResolver('Test285Resolver', {
    typeName: 'Query',
    fieldName: 'test285',
  });
  ds.createResolver('Test286Resolver', {
    typeName: 'Query',
    fieldName: 'test286',
  });
  ds.createResolver('Test287Resolver', {
    typeName: 'Query',
    fieldName: 'test287',
  });
  ds.createResolver('Test288Resolver', {
    typeName: 'Query',
    fieldName: 'test288',
  });
  ds.createResolver('Test289Resolver', {
    typeName: 'Query',
    fieldName: 'test289',
  });
  ds.createResolver('Test290Resolver', {
    typeName: 'Query',
    fieldName: 'test290',
  });
  ds.createResolver('Test291Resolver', {
    typeName: 'Query',
    fieldName: 'test291',
  });
  ds.createResolver('Test292Resolver', {
    typeName: 'Query',
    fieldName: 'test292',
  });
  ds.createResolver('Test293Resolver', {
    typeName: 'Query',
    fieldName: 'test293',
  });
  ds.createResolver('Test294Resolver', {
    typeName: 'Query',
    fieldName: 'test294',
  });
  ds.createResolver('Test295Resolver', {
    typeName: 'Query',
    fieldName: 'test295',
  });
  ds.createResolver('Test296Resolver', {
    typeName: 'Query',
    fieldName: 'test296',
  });
  ds.createResolver('Test297Resolver', {
    typeName: 'Query',
    fieldName: 'test297',
  });
  ds.createResolver('Test298Resolver', {
    typeName: 'Query',
    fieldName: 'test298',
  });
  ds.createResolver('Test299Resolver', {
    typeName: 'Query',
    fieldName: 'test299',
  });
  ds.createResolver('Test300Resolver', {
    typeName: 'Query',
    fieldName: 'test300',
  });
  ds.createResolver('Test301Resolver', {
    typeName: 'Query',
    fieldName: 'test301',
  });
  ds.createResolver('Test302Resolver', {
    typeName: 'Query',
    fieldName: 'test302',
  });
  ds.createResolver('Test303Resolver', {
    typeName: 'Query',
    fieldName: 'test303',
  });
  ds.createResolver('Test304Resolver', {
    typeName: 'Query',
    fieldName: 'test304',
  });
  ds.createResolver('Test305Resolver', {
    typeName: 'Query',
    fieldName: 'test305',
  });
  ds.createResolver('Test306Resolver', {
    typeName: 'Query',
    fieldName: 'test306',
  });
  ds.createResolver('Test307Resolver', {
    typeName: 'Query',
    fieldName: 'test307',
  });
  ds.createResolver('Test308Resolver', {
    typeName: 'Query',
    fieldName: 'test308',
  });
  ds.createResolver('Test309Resolver', {
    typeName: 'Query',
    fieldName: 'test309',
  });
  ds.createResolver('Test310Resolver', {
    typeName: 'Query',
    fieldName: 'test310',
  });
  ds.createResolver('Test311Resolver', {
    typeName: 'Query',
    fieldName: 'test311',
  });
  ds.createResolver('Test312Resolver', {
    typeName: 'Query',
    fieldName: 'test312',
  });
  ds.createResolver('Test313Resolver', {
    typeName: 'Query',
    fieldName: 'test313',
  });
  ds.createResolver('Test314Resolver', {
    typeName: 'Query',
    fieldName: 'test314',
  });
  ds.createResolver('Test315Resolver', {
    typeName: 'Query',
    fieldName: 'test315',
  });
  ds.createResolver('Test316Resolver', {
    typeName: 'Query',
    fieldName: 'test316',
  });
  ds.createResolver('Test317Resolver', {
    typeName: 'Query',
    fieldName: 'test317',
  });
  ds.createResolver('Test318Resolver', {
    typeName: 'Query',
    fieldName: 'test318',
  });
  ds.createResolver('Test319Resolver', {
    typeName: 'Query',
    fieldName: 'test319',
  });
  ds.createResolver('Test320Resolver', {
    typeName: 'Query',
    fieldName: 'test320',
  });
  ds.createResolver('Test321Resolver', {
    typeName: 'Query',
    fieldName: 'test321',
  });
  ds.createResolver('Test322Resolver', {
    typeName: 'Query',
    fieldName: 'test322',
  });
  ds.createResolver('Test323Resolver', {
    typeName: 'Query',
    fieldName: 'test323',
  });
  ds.createResolver('Test324Resolver', {
    typeName: 'Query',
    fieldName: 'test324',
  });
  ds.createResolver('Test325Resolver', {
    typeName: 'Query',
    fieldName: 'test325',
  });
  ds.createResolver('Test326Resolver', {
    typeName: 'Query',
    fieldName: 'test326',
  });
  ds.createResolver('Test327Resolver', {
    typeName: 'Query',
    fieldName: 'test327',
  });
  ds.createResolver('Test328Resolver', {
    typeName: 'Query',
    fieldName: 'test328',
  });
  ds.createResolver('Test329Resolver', {
    typeName: 'Query',
    fieldName: 'test329',
  });
  ds.createResolver('Test330Resolver', {
    typeName: 'Query',
    fieldName: 'test330',
  });
  ds.createResolver('Test331Resolver', {
    typeName: 'Query',
    fieldName: 'test331',
  });
  ds.createResolver('Test332Resolver', {
    typeName: 'Query',
    fieldName: 'test332',
  });
  ds.createResolver('Test333Resolver', {
    typeName: 'Query',
    fieldName: 'test333',
  });
  ds.createResolver('Test334Resolver', {
    typeName: 'Query',
    fieldName: 'test334',
  });
  ds.createResolver('Test335Resolver', {
    typeName: 'Query',
    fieldName: 'test335',
  });
  ds.createResolver('Test336Resolver', {
    typeName: 'Query',
    fieldName: 'test336',
  });
  ds.createResolver('Test337Resolver', {
    typeName: 'Query',
    fieldName: 'test337',
  });
  ds.createResolver('Test338Resolver', {
    typeName: 'Query',
    fieldName: 'test338',
  });
  ds.createResolver('Test339Resolver', {
    typeName: 'Query',
    fieldName: 'test339',
  });
  ds.createResolver('Test340Resolver', {
    typeName: 'Query',
    fieldName: 'test340',
  });
  ds.createResolver('Test341Resolver', {
    typeName: 'Query',
    fieldName: 'test341',
  });
  ds.createResolver('Test342Resolver', {
    typeName: 'Query',
    fieldName: 'test342',
  });
  ds.createResolver('Test343Resolver', {
    typeName: 'Query',
    fieldName: 'test343',
  });
  ds.createResolver('Test344Resolver', {
    typeName: 'Query',
    fieldName: 'test344',
  });
  ds.createResolver('Test345Resolver', {
    typeName: 'Query',
    fieldName: 'test345',
  });
  ds.createResolver('Test346Resolver', {
    typeName: 'Query',
    fieldName: 'test346',
  });
  ds.createResolver('Test347Resolver', {
    typeName: 'Query',
    fieldName: 'test347',
  });
  ds.createResolver('Test348Resolver', {
    typeName: 'Query',
    fieldName: 'test348',
  });
  ds.createResolver('Test349Resolver', {
    typeName: 'Query',
    fieldName: 'test349',
  });
  ds.createResolver('Test350Resolver', {
    typeName: 'Query',
    fieldName: 'test350',
  });
  ds.createResolver('Test351Resolver', {
    typeName: 'Query',
    fieldName: 'test351',
  });
  ds.createResolver('Test352Resolver', {
    typeName: 'Query',
    fieldName: 'test352',
  });
  ds.createResolver('Test353Resolver', {
    typeName: 'Query',
    fieldName: 'test353',
  });
  ds.createResolver('Test354Resolver', {
    typeName: 'Query',
    fieldName: 'test354',
  });
  ds.createResolver('Test355Resolver', {
    typeName: 'Query',
    fieldName: 'test355',
  });
  ds.createResolver('Test356Resolver', {
    typeName: 'Query',
    fieldName: 'test356',
  });
  ds.createResolver('Test357Resolver', {
    typeName: 'Query',
    fieldName: 'test357',
  });
  ds.createResolver('Test358Resolver', {
    typeName: 'Query',
    fieldName: 'test358',
  });
  ds.createResolver('Test359Resolver', {
    typeName: 'Query',
    fieldName: 'test359',
  });
  ds.createResolver('Test360Resolver', {
    typeName: 'Query',
    fieldName: 'test360',
  });
  ds.createResolver('Test361Resolver', {
    typeName: 'Query',
    fieldName: 'test361',
  });
  ds.createResolver('Test362Resolver', {
    typeName: 'Query',
    fieldName: 'test362',
  });
  ds.createResolver('Test363Resolver', {
    typeName: 'Query',
    fieldName: 'test363',
  });
  ds.createResolver('Test364Resolver', {
    typeName: 'Query',
    fieldName: 'test364',
  });
  ds.createResolver('Test365Resolver', {
    typeName: 'Query',
    fieldName: 'test365',
  });
  ds.createResolver('Test366Resolver', {
    typeName: 'Query',
    fieldName: 'test366',
  });
  ds.createResolver('Test367Resolver', {
    typeName: 'Query',
    fieldName: 'test367',
  });
  ds.createResolver('Test368Resolver', {
    typeName: 'Query',
    fieldName: 'test368',
  });
  ds.createResolver('Test369Resolver', {
    typeName: 'Query',
    fieldName: 'test369',
  });
  ds.createResolver('Test370Resolver', {
    typeName: 'Query',
    fieldName: 'test370',
  });
  ds.createResolver('Test371Resolver', {
    typeName: 'Query',
    fieldName: 'test371',
  });
  ds.createResolver('Test372Resolver', {
    typeName: 'Query',
    fieldName: 'test372',
  });
  ds.createResolver('Test373Resolver', {
    typeName: 'Query',
    fieldName: 'test373',
  });
  ds.createResolver('Test374Resolver', {
    typeName: 'Query',
    fieldName: 'test374',
  });
  ds.createResolver('Test375Resolver', {
    typeName: 'Query',
    fieldName: 'test375',
  });
  ds.createResolver('Test376Resolver', {
    typeName: 'Query',
    fieldName: 'test376',
  });
  ds.createResolver('Test377Resolver', {
    typeName: 'Query',
    fieldName: 'test377',
  });
  ds.createResolver('Test378Resolver', {
    typeName: 'Query',
    fieldName: 'test378',
  });
  ds.createResolver('Test379Resolver', {
    typeName: 'Query',
    fieldName: 'test379',
  });
  ds.createResolver('Test380Resolver', {
    typeName: 'Query',
    fieldName: 'test380',
  });
  ds.createResolver('Test381Resolver', {
    typeName: 'Query',
    fieldName: 'test381',
  });
  ds.createResolver('Test382Resolver', {
    typeName: 'Query',
    fieldName: 'test382',
  });
  ds.createResolver('Test383Resolver', {
    typeName: 'Query',
    fieldName: 'test383',
  });
  ds.createResolver('Test384Resolver', {
    typeName: 'Query',
    fieldName: 'test384',
  });
  ds.createResolver('Test385Resolver', {
    typeName: 'Query',
    fieldName: 'test385',
  });
  ds.createResolver('Test386Resolver', {
    typeName: 'Query',
    fieldName: 'test386',
  });
  ds.createResolver('Test387Resolver', {
    typeName: 'Query',
    fieldName: 'test387',
  });
  ds.createResolver('Test388Resolver', {
    typeName: 'Query',
    fieldName: 'test388',
  });
  ds.createResolver('Test389Resolver', {
    typeName: 'Query',
    fieldName: 'test389',
  });
  ds.createResolver('Test390Resolver', {
    typeName: 'Query',
    fieldName: 'test390',
  });
  ds.createResolver('Test391Resolver', {
    typeName: 'Query',
    fieldName: 'test391',
  });
  ds.createResolver('Test392Resolver', {
    typeName: 'Query',
    fieldName: 'test392',
  });
  ds.createResolver('Test393Resolver', {
    typeName: 'Query',
    fieldName: 'test393',
  });
  ds.createResolver('Test394Resolver', {
    typeName: 'Query',
    fieldName: 'test394',
  });
  ds.createResolver('Test395Resolver', {
    typeName: 'Query',
    fieldName: 'test395',
  });
  ds.createResolver('Test396Resolver', {
    typeName: 'Query',
    fieldName: 'test396',
  });
  ds.createResolver('Test397Resolver', {
    typeName: 'Query',
    fieldName: 'test397',
  });
  ds.createResolver('Test398Resolver', {
    typeName: 'Query',
    fieldName: 'test398',
  });
  ds.createResolver('Test399Resolver', {
    typeName: 'Query',
    fieldName: 'test399',
  });
  ds.createResolver('Test400Resolver', {
    typeName: 'Query',
    fieldName: 'test400',
  });
  ds.createResolver('Test401Resolver', {
    typeName: 'Query',
    fieldName: 'test401',
  });
  ds.createResolver('Test402Resolver', {
    typeName: 'Query',
    fieldName: 'test402',
  });
  ds.createResolver('Test403Resolver', {
    typeName: 'Query',
    fieldName: 'test403',
  });
  ds.createResolver('Test404Resolver', {
    typeName: 'Query',
    fieldName: 'test404',
  });
  ds.createResolver('Test405Resolver', {
    typeName: 'Query',
    fieldName: 'test405',
  });
  ds.createResolver('Test406Resolver', {
    typeName: 'Query',
    fieldName: 'test406',
  });
  ds.createResolver('Test407Resolver', {
    typeName: 'Query',
    fieldName: 'test407',
  });
  ds.createResolver('Test408Resolver', {
    typeName: 'Query',
    fieldName: 'test408',
  });
  ds.createResolver('Test409Resolver', {
    typeName: 'Query',
    fieldName: 'test409',
  });
  ds.createResolver('Test410Resolver', {
    typeName: 'Query',
    fieldName: 'test410',
  });
  ds.createResolver('Test411Resolver', {
    typeName: 'Query',
    fieldName: 'test411',
  });
  ds.createResolver('Test412Resolver', {
    typeName: 'Query',
    fieldName: 'test412',
  });
  ds.createResolver('Test413Resolver', {
    typeName: 'Query',
    fieldName: 'test413',
  });
  ds.createResolver('Test414Resolver', {
    typeName: 'Query',
    fieldName: 'test414',
  });
  ds.createResolver('Test415Resolver', {
    typeName: 'Query',
    fieldName: 'test415',
  });
  ds.createResolver('Test416Resolver', {
    typeName: 'Query',
    fieldName: 'test416',
  });
  ds.createResolver('Test417Resolver', {
    typeName: 'Query',
    fieldName: 'test417',
  });
  ds.createResolver('Test418Resolver', {
    typeName: 'Query',
    fieldName: 'test418',
  });
  ds.createResolver('Test419Resolver', {
    typeName: 'Query',
    fieldName: 'test419',
  });
  ds.createResolver('Test420Resolver', {
    typeName: 'Query',
    fieldName: 'test420',
  });
  ds.createResolver('Test421Resolver', {
    typeName: 'Query',
    fieldName: 'test421',
  });
  ds.createResolver('Test422Resolver', {
    typeName: 'Query',
    fieldName: 'test422',
  });
  ds.createResolver('Test423Resolver', {
    typeName: 'Query',
    fieldName: 'test423',
  });
  ds.createResolver('Test424Resolver', {
    typeName: 'Query',
    fieldName: 'test424',
  });
  ds.createResolver('Test425Resolver', {
    typeName: 'Query',
    fieldName: 'test425',
  });
  ds.createResolver('Test426Resolver', {
    typeName: 'Query',
    fieldName: 'test426',
  });
  ds.createResolver('Test427Resolver', {
    typeName: 'Query',
    fieldName: 'test427',
  });
  ds.createResolver('Test428Resolver', {
    typeName: 'Query',
    fieldName: 'test428',
  });
  ds.createResolver('Test429Resolver', {
    typeName: 'Query',
    fieldName: 'test429',
  });
  ds.createResolver('Test430Resolver', {
    typeName: 'Query',
    fieldName: 'test430',
  });
  ds.createResolver('Test431Resolver', {
    typeName: 'Query',
    fieldName: 'test431',
  });
  ds.createResolver('Test432Resolver', {
    typeName: 'Query',
    fieldName: 'test432',
  });
  ds.createResolver('Test433Resolver', {
    typeName: 'Query',
    fieldName: 'test433',
  });
  ds.createResolver('Test434Resolver', {
    typeName: 'Query',
    fieldName: 'test434',
  });
  ds.createResolver('Test435Resolver', {
    typeName: 'Query',
    fieldName: 'test435',
  });
  ds.createResolver('Test436Resolver', {
    typeName: 'Query',
    fieldName: 'test436',
  });
  ds.createResolver('Test437Resolver', {
    typeName: 'Query',
    fieldName: 'test437',
  });
  ds.createResolver('Test438Resolver', {
    typeName: 'Query',
    fieldName: 'test438',
  });
  ds.createResolver('Test439Resolver', {
    typeName: 'Query',
    fieldName: 'test439',
  });
  ds.createResolver('Test440Resolver', {
    typeName: 'Query',
    fieldName: 'test440',
  });
  ds.createResolver('Test441Resolver', {
    typeName: 'Query',
    fieldName: 'test441',
  });
  ds.createResolver('Test442Resolver', {
    typeName: 'Query',
    fieldName: 'test442',
  });
  ds.createResolver('Test443Resolver', {
    typeName: 'Query',
    fieldName: 'test443',
  });
  ds.createResolver('Test444Resolver', {
    typeName: 'Query',
    fieldName: 'test444',
  });
  ds.createResolver('Test445Resolver', {
    typeName: 'Query',
    fieldName: 'test445',
  });
  ds.createResolver('Test446Resolver', {
    typeName: 'Query',
    fieldName: 'test446',
  });
  ds.createResolver('Test447Resolver', {
    typeName: 'Query',
    fieldName: 'test447',
  });
  ds.createResolver('Test448Resolver', {
    typeName: 'Query',
    fieldName: 'test448',
  });
  ds.createResolver('Test449Resolver', {
    typeName: 'Query',
    fieldName: 'test449',
  });
  ds.createResolver('Test450Resolver', {
    typeName: 'Query',
    fieldName: 'test450',
  });
  ds.createResolver('Test451Resolver', {
    typeName: 'Query',
    fieldName: 'test451',
  });
  ds.createResolver('Test452Resolver', {
    typeName: 'Query',
    fieldName: 'test452',
  });
  ds.createResolver('Test453Resolver', {
    typeName: 'Query',
    fieldName: 'test453',
  });
  ds.createResolver('Test454Resolver', {
    typeName: 'Query',
    fieldName: 'test454',
  });
  ds.createResolver('Test455Resolver', {
    typeName: 'Query',
    fieldName: 'test455',
  });
  ds.createResolver('Test456Resolver', {
    typeName: 'Query',
    fieldName: 'test456',
  });
  ds.createResolver('Test457Resolver', {
    typeName: 'Query',
    fieldName: 'test457',
  });
  ds.createResolver('Test458Resolver', {
    typeName: 'Query',
    fieldName: 'test458',
  });
  ds.createResolver('Test459Resolver', {
    typeName: 'Query',
    fieldName: 'test459',
  });
  ds.createResolver('Test460Resolver', {
    typeName: 'Query',
    fieldName: 'test460',
  });
  ds.createResolver('Test461Resolver', {
    typeName: 'Query',
    fieldName: 'test461',
  });
  ds.createResolver('Test462Resolver', {
    typeName: 'Query',
    fieldName: 'test462',
  });
  ds.createResolver('Test463Resolver', {
    typeName: 'Query',
    fieldName: 'test463',
  });
  ds.createResolver('Test464Resolver', {
    typeName: 'Query',
    fieldName: 'test464',
  });
  ds.createResolver('Test465Resolver', {
    typeName: 'Query',
    fieldName: 'test465',
  });
  ds.createResolver('Test466Resolver', {
    typeName: 'Query',
    fieldName: 'test466',
  });
  ds.createResolver('Test467Resolver', {
    typeName: 'Query',
    fieldName: 'test467',
  });
  ds.createResolver('Test468Resolver', {
    typeName: 'Query',
    fieldName: 'test468',
  });
  ds.createResolver('Test469Resolver', {
    typeName: 'Query',
    fieldName: 'test469',
  });
  ds.createResolver('Test470Resolver', {
    typeName: 'Query',
    fieldName: 'test470',
  });
  ds.createResolver('Test471Resolver', {
    typeName: 'Query',
    fieldName: 'test471',
  });
  ds.createResolver('Test472Resolver', {
    typeName: 'Query',
    fieldName: 'test472',
  });
  ds.createResolver('Test473Resolver', {
    typeName: 'Query',
    fieldName: 'test473',
  });
  ds.createResolver('Test474Resolver', {
    typeName: 'Query',
    fieldName: 'test474',
  });
  ds.createResolver('Test475Resolver', {
    typeName: 'Query',
    fieldName: 'test475',
  });
  ds.createResolver('Test476Resolver', {
    typeName: 'Query',
    fieldName: 'test476',
  });
  ds.createResolver('Test477Resolver', {
    typeName: 'Query',
    fieldName: 'test477',
  });
  ds.createResolver('Test478Resolver', {
    typeName: 'Query',
    fieldName: 'test478',
  });
  ds.createResolver('Test479Resolver', {
    typeName: 'Query',
    fieldName: 'test479',
  });
  ds.createResolver('Test480Resolver', {
    typeName: 'Query',
    fieldName: 'test480',
  });
  ds.createResolver('Test481Resolver', {
    typeName: 'Query',
    fieldName: 'test481',
  });
  ds.createResolver('Test482Resolver', {
    typeName: 'Query',
    fieldName: 'test482',
  });
  ds.createResolver('Test483Resolver', {
    typeName: 'Query',
    fieldName: 'test483',
  });
  ds.createResolver('Test484Resolver', {
    typeName: 'Query',
    fieldName: 'test484',
  });
  ds.createResolver('Test485Resolver', {
    typeName: 'Query',
    fieldName: 'test485',
  });
  ds.createResolver('Test486Resolver', {
    typeName: 'Query',
    fieldName: 'test486',
  });
  ds.createResolver('Test487Resolver', {
    typeName: 'Query',
    fieldName: 'test487',
  });
  ds.createResolver('Test488Resolver', {
    typeName: 'Query',
    fieldName: 'test488',
  });
  ds.createResolver('Test489Resolver', {
    typeName: 'Query',
    fieldName: 'test489',
  });
  ds.createResolver('Test490Resolver', {
    typeName: 'Query',
    fieldName: 'test490',
  });
  ds.createResolver('Test491Resolver', {
    typeName: 'Query',
    fieldName: 'test491',
  });

  return {
    endpoint: api.graphqlUrl,
    apiKey: api.apiKey!,
  };
}
