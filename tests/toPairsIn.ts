import R_toPairsIn = require('../ramda/dist/src/toPairsIn');

declare const a_1_b_2_c_3: {
  a: 1;
  b: 2;
  c: 3;
};
declare const string_number_record: Record<string, number>;

// @dts-jest:pass:snap
R_toPairsIn(a_1_b_2_c_3);
// @dts-jest:pass:snap
R_toPairsIn(string_number_record);
