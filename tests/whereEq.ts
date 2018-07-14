import * as R from '../ramda/dist/index';

declare const number_dictionary: R.Dictionary<number>;
declare const a_1_b_2_c_3: {
  a: 1;
  b: 2;
  c: 3;
};

// @dts-jest:pass:snap
R.whereEq(number_dictionary);
// @dts-jest:pass:snap
R.whereEq(number_dictionary)(a_1_b_2_c_3);
// @dts-jest:pass:snap
R.whereEq(number_dictionary, a_1_b_2_c_3);
