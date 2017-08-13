import * as R_mergeDeepRight from '../ramda/dist/src/mergeDeepRight';

declare const a_1: { a: 1 };
declare const b_2: { b: 2 };

// @dts-jest:pass -> (right: object) => object
R_mergeDeepRight(a_1);

// @dts-jest:pass -> object
R_mergeDeepRight(a_1)(b_2);
// @dts-jest:pass -> object
R_mergeDeepRight(a_1, b_2);
