import * as R_values from '../ramda/dist/src/values';

declare const object: object;
declare const a_1_b_2_c_3: {
  a: 1;
  b: 2;
  c: 3;
};

// @dts-jest:pass
R_values(object);
// @dts-jest:pass
R_values(a_1_b_2_c_3);
