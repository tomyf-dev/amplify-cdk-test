import { type ClientSchema, a, defineData, defineFunction } from '@aws-amplify/backend';

const fn1 = defineFunction({ name: 'resolver1', entry: '../functions/resolver/handler.ts' });
const fn2 = defineFunction({ name: 'resolver2', entry: '../functions/resolver/handler.ts' });
const fn3 = defineFunction({ name: 'resolver3', entry: '../functions/resolver/handler.ts' });
const fn4 = defineFunction({ name: 'resolver4', entry: '../functions/resolver/handler.ts' });
const fn5 = defineFunction({ name: 'resolver5', entry: '../functions/resolver/handler.ts' });
const fn6 = defineFunction({ name: 'resolver6', entry: '../functions/resolver/handler.ts' });
const fn7 = defineFunction({ name: 'resolver7', entry: '../functions/resolver/handler.ts' });
const fn8 = defineFunction({ name: 'resolver8', entry: '../functions/resolver/handler.ts' });
const fn9 = defineFunction({ name: 'resolver9', entry: '../functions/resolver/handler.ts' });
const fn10 = defineFunction({ name: 'resolver10', entry: '../functions/resolver/handler.ts' });
const fn11 = defineFunction({ name: 'resolver11', entry: '../functions/resolver/handler.ts' });
const fn12 = defineFunction({ name: 'resolver12', entry: '../functions/resolver/handler.ts' });
const fn13 = defineFunction({ name: 'resolver13', entry: '../functions/resolver/handler.ts' });
const fn14 = defineFunction({ name: 'resolver14', entry: '../functions/resolver/handler.ts' });
const fn15 = defineFunction({ name: 'resolver15', entry: '../functions/resolver/handler.ts' });
const fn16 = defineFunction({ name: 'resolver16', entry: '../functions/resolver/handler.ts' });
const fn17 = defineFunction({ name: 'resolver17', entry: '../functions/resolver/handler.ts' });
const fn18 = defineFunction({ name: 'resolver18', entry: '../functions/resolver/handler.ts' });
const fn19 = defineFunction({ name: 'resolver19', entry: '../functions/resolver/handler.ts' });
const fn20 = defineFunction({ name: 'resolver20', entry: '../functions/resolver/handler.ts' });
const fn21 = defineFunction({ name: 'resolver21', entry: '../functions/resolver/handler.ts' });
const fn22 = defineFunction({ name: 'resolver22', entry: '../functions/resolver/handler.ts' });
const fn23 = defineFunction({ name: 'resolver23', entry: '../functions/resolver/handler.ts' });
const fn24 = defineFunction({ name: 'resolver24', entry: '../functions/resolver/handler.ts' });
const fn25 = defineFunction({ name: 'resolver25', entry: '../functions/resolver/handler.ts' });
const fn26 = defineFunction({ name: 'resolver26', entry: '../functions/resolver/handler.ts' });
const fn27 = defineFunction({ name: 'resolver27', entry: '../functions/resolver/handler.ts' });
const fn28 = defineFunction({ name: 'resolver28', entry: '../functions/resolver/handler.ts' });
const fn29 = defineFunction({ name: 'resolver29', entry: '../functions/resolver/handler.ts' });
const fn30 = defineFunction({ name: 'resolver30', entry: '../functions/resolver/handler.ts' });
const fn31 = defineFunction({ name: 'resolver31', entry: '../functions/resolver/handler.ts' });
const fn32 = defineFunction({ name: 'resolver32', entry: '../functions/resolver/handler.ts' });
const fn33 = defineFunction({ name: 'resolver33', entry: '../functions/resolver/handler.ts' });
const fn34 = defineFunction({ name: 'resolver34', entry: '../functions/resolver/handler.ts' });
const fn35 = defineFunction({ name: 'resolver35', entry: '../functions/resolver/handler.ts' });
const fn36 = defineFunction({ name: 'resolver36', entry: '../functions/resolver/handler.ts' });
const fn37 = defineFunction({ name: 'resolver37', entry: '../functions/resolver/handler.ts' });
const fn38 = defineFunction({ name: 'resolver38', entry: '../functions/resolver/handler.ts' });
const fn39 = defineFunction({ name: 'resolver39', entry: '../functions/resolver/handler.ts' });
const fn40 = defineFunction({ name: 'resolver40', entry: '../functions/resolver/handler.ts' });
const fn41 = defineFunction({ name: 'resolver41', entry: '../functions/resolver/handler.ts' });
const fn42 = defineFunction({ name: 'resolver42', entry: '../functions/resolver/handler.ts' });
const fn43 = defineFunction({ name: 'resolver43', entry: '../functions/resolver/handler.ts' });
const fn44 = defineFunction({ name: 'resolver44', entry: '../functions/resolver/handler.ts' });
const fn45 = defineFunction({ name: 'resolver45', entry: '../functions/resolver/handler.ts' });
const fn46 = defineFunction({ name: 'resolver46', entry: '../functions/resolver/handler.ts' });
const fn47 = defineFunction({ name: 'resolver47', entry: '../functions/resolver/handler.ts' });
const fn48 = defineFunction({ name: 'resolver48', entry: '../functions/resolver/handler.ts' });
const fn49 = defineFunction({ name: 'resolver49', entry: '../functions/resolver/handler.ts' });
const fn50 = defineFunction({ name: 'resolver50', entry: '../functions/resolver/handler.ts' });
const fn51 = defineFunction({ name: 'resolver51', entry: '../functions/resolver/handler.ts' });
const fn52 = defineFunction({ name: 'resolver52', entry: '../functions/resolver/handler.ts' });
const fn53 = defineFunction({ name: 'resolver53', entry: '../functions/resolver/handler.ts' });
const fn54 = defineFunction({ name: 'resolver54', entry: '../functions/resolver/handler.ts' });
const fn55 = defineFunction({ name: 'resolver55', entry: '../functions/resolver/handler.ts' });
const fn56 = defineFunction({ name: 'resolver56', entry: '../functions/resolver/handler.ts' });
const fn57 = defineFunction({ name: 'resolver57', entry: '../functions/resolver/handler.ts' });
const fn58 = defineFunction({ name: 'resolver58', entry: '../functions/resolver/handler.ts' });
const fn59 = defineFunction({ name: 'resolver59', entry: '../functions/resolver/handler.ts' });
const fn60 = defineFunction({ name: 'resolver60', entry: '../functions/resolver/handler.ts' });
const fn61 = defineFunction({ name: 'resolver61', entry: '../functions/resolver/handler.ts' });
const fn62 = defineFunction({ name: 'resolver62', entry: '../functions/resolver/handler.ts' });
const fn63 = defineFunction({ name: 'resolver63', entry: '../functions/resolver/handler.ts' });
const fn64 = defineFunction({ name: 'resolver64', entry: '../functions/resolver/handler.ts' });
const fn65 = defineFunction({ name: 'resolver65', entry: '../functions/resolver/handler.ts' });
const fn66 = defineFunction({ name: 'resolver66', entry: '../functions/resolver/handler.ts' });
const fn67 = defineFunction({ name: 'resolver67', entry: '../functions/resolver/handler.ts' });
const fn68 = defineFunction({ name: 'resolver68', entry: '../functions/resolver/handler.ts' });
const fn69 = defineFunction({ name: 'resolver69', entry: '../functions/resolver/handler.ts' });
const fn70 = defineFunction({ name: 'resolver70', entry: '../functions/resolver/handler.ts' });
const fn71 = defineFunction({ name: 'resolver71', entry: '../functions/resolver/handler.ts' });
const fn72 = defineFunction({ name: 'resolver72', entry: '../functions/resolver/handler.ts' });
const fn73 = defineFunction({ name: 'resolver73', entry: '../functions/resolver/handler.ts' });
const fn74 = defineFunction({ name: 'resolver74', entry: '../functions/resolver/handler.ts' });
const fn75 = defineFunction({ name: 'resolver75', entry: '../functions/resolver/handler.ts' });
const fn76 = defineFunction({ name: 'resolver76', entry: '../functions/resolver/handler.ts' });
const fn77 = defineFunction({ name: 'resolver77', entry: '../functions/resolver/handler.ts' });
const fn78 = defineFunction({ name: 'resolver78', entry: '../functions/resolver/handler.ts' });
const fn79 = defineFunction({ name: 'resolver79', entry: '../functions/resolver/handler.ts' });
const fn80 = defineFunction({ name: 'resolver80', entry: '../functions/resolver/handler.ts' });
const fn81 = defineFunction({ name: 'resolver81', entry: '../functions/resolver/handler.ts' });
const fn82 = defineFunction({ name: 'resolver82', entry: '../functions/resolver/handler.ts' });
const fn83 = defineFunction({ name: 'resolver83', entry: '../functions/resolver/handler.ts' });

const schema = a.schema({
  TestTable: a
    .model({
      content: a.string(),
    })
    .authorization((allow) => [allow.guest()]),
  test1: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn1)),
  test2: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn2)),
  test3: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn3)),
  test4: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn4)),
  test5: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn5)),
  test6: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn6)),
  test7: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn7)),
  test8: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn8)),
  test9: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn9)),
  test10: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn10)),
  test11: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn11)),
  test12: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn12)),
  test13: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn13)),
  test14: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn14)),
  test15: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn15)),
  test16: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn16)),
  test17: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn17)),
  test18: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn18)),
  test19: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn19)),
  test20: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn20)),
  test21: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn21)),
  test22: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn22)),
  test23: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn23)),
  test24: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn24)),
  test25: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn25)),
  test26: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn26)),
  test27: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn27)),
  test28: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn28)),
  test29: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn29)),
  test30: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn30)),
  test31: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn31)),
  test32: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn32)),
  test33: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn33)),
  test34: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn34)),
  test35: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn35)),
  test36: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn36)),
  test37: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn37)),
  test38: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn38)),
  test39: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn39)),
  test40: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn40)),
  test41: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn41)),
  test42: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn42)),
  test43: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn43)),
  test44: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn44)),
  test45: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn45)),
  test46: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn46)),
  test47: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn47)),
  test48: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn48)),
  test49: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn49)),
  test50: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn50)),
  test51: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn51)),
  test52: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn52)),
  test53: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn53)),
  test54: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn54)),
  test55: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn55)),
  test56: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn56)),
  test57: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn57)),
  test58: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn58)),
  test59: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn59)),
  test60: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn60)),
  test61: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn61)),
  test62: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn62)),
  test63: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn63)),
  test64: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn64)),
  test65: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn65)),
  test66: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn66)),
  test67: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn67)),
  test68: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn68)),
  test69: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn69)),
  test70: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn70)),
  test71: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn71)),
  test72: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn72)),
  test73: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn73)),
  test74: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn74)),
  test75: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn75)),
  test76: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn76)),
  test77: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn77)),
  test78: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn78)),
  test79: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn79)),
  test80: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn80)),
  test81: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn81)),
  test82: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn82)),
  test83: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.guest()])
    .handler(a.handler.function(fn83)),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'identityPool',
  },
});

