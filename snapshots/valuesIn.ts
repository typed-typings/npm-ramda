import * as R from '../ramda/dist/index';

declare const object: object;
declare const a_1_b_2_c_3: {
  a: 1;
  b: 2;
  c: 3;
};

// @dts-jest:pass:snap -> any[]
R.valuesIn(object);
// @dts-jest:pass:snap -> (1 | 2 | 3)[]
R.valuesIn(a_1_b_2_c_3);
