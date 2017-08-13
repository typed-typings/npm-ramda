import { Dictionary } from '../ramda/dist/src/$types';
import * as R_whereEq from '../ramda/dist/src/whereEq';

declare const number_dictionary: Dictionary<number>;
declare const a_1_b_2_c_3: {
  a: 1;
  b: 2;
  c: 3;
};

// @dts-jest:pass
R_whereEq(number_dictionary);
// @dts-jest:pass
R_whereEq(number_dictionary)(a_1_b_2_c_3);
// @dts-jest:pass
R_whereEq(number_dictionary, a_1_b_2_c_3);
