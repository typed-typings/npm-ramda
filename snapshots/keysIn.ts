import * as R_keysIn from '../ramda/dist/src/keysIn';

declare const a_1_b_2_c_3: {
  a: 1;
  b: 2;
  c: 3;
};
declare const string_number_record: Record<string, number>;

// @dts-jest:pass -> ("a" | "b" | "c")[]
R_keysIn(a_1_b_2_c_3);
// @dts-jest:pass -> string[]
R_keysIn(string_number_record);
