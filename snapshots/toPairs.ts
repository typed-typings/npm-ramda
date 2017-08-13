import * as R_toPairs from '../ramda/dist/src/toPairs';

declare const a_1_b_2_c_3: {
  a: 1;
  b: 2;
  c: 3;
};
declare const string_number_record: Record<string, number>;

// @dts-jest:pass -> ["a" | "b" | "c", 1 | 2 | 3][]
R_toPairs(a_1_b_2_c_3);
// @dts-jest:pass -> [string, number][]
R_toPairs(string_number_record);
