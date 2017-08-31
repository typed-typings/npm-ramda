import R_values = require('../ramda/dist/src/values');

declare const object: object;
declare const a_1_b_2_c_3: {
  a: 1;
  b: 2;
  c: 3;
};

// @dts-jest:pass:snap -> any[]
R_values(object);
// @dts-jest:pass:snap -> (1 | 2 | 3)[]
R_values(a_1_b_2_c_3);
