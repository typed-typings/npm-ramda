import * as R from '../ramda/dist/index';

declare const string_property: string;
declare const object: object;
declare const a_1_b_2_c_3: {
  a: 1;
  b: 2;
  c: 3;
};

// @dts-jest:skip:pass:snap
R.dissoc(string_property, object); // Pick<object, any> (before TS v2.5), Pick<object, never> (after TS v2.5)
// @dts-jest:skip:pass:snap
R.dissoc(string_property)(object); // See https://github.com/types/npm-ramda/pull/224#issuecomment-326984014

// @dts-jest:pass:snap
R.dissoc('a', a_1_b_2_c_3);
// @dts-jest:pass:snap
R.dissoc('a')(a_1_b_2_c_3);
