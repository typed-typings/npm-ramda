import * as R_keys from '../ramda/dist/src/keys';

declare const a_1_b_2_c_3: {
  a: 1;
  b: 2;
  c: 3;
};
declare const string_number_record: Record<string, number>;

// @dts-jest:pass:snap
R_keys(a_1_b_2_c_3);
// @dts-jest:pass:snap
R_keys(string_number_record);
