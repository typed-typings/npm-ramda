import R_toPairs = require('../ramda/dist/src/toPairs');

declare const a_1_b_2_c_3: {
  a: 1;
  b: 2;
  c: 3;
};
declare const string_number_record: Record<string, number>;

// @dts-jest:pass:snap
R_toPairs(a_1_b_2_c_3);
// @dts-jest:pass:snap
R_toPairs(string_number_record);
