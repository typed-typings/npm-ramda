import * as R_mergeWith from '../ramda/dist/src/mergeWith';

declare const number_number_to_string: (a: number, b: number) => string;
declare const a_1_c_1: { a: 1; c: 1 };
declare const b_2_c_2: { b: 2; c: 2 };

// @dts-jest:pass
R_mergeWith(number_number_to_string)(a_1_c_1)(b_2_c_2);
// @dts-jest:pass
R_mergeWith(number_number_to_string, a_1_c_1, b_2_c_2);
