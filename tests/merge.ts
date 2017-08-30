import * as R_merge from '../ramda/dist/src/merge';

declare const a_1: { a: 1 };
declare const b_2: { b: 2 };
declare const a_1_c_1: { a: 1; c: 1 };
declare const b_2_c_2: { b: 2; c: 2 };

// @dts-jest:pass:snap
R_merge(a_1)(b_2);
// @dts-jest:pass:snap
R_merge(a_1, b_2);
// @dts-jest:pass:snap
R_merge(a_1_c_1)(b_2_c_2);
// @dts-jest:pass:snap
R_merge(a_1_c_1, b_2_c_2);
