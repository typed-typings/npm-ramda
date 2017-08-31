import R_mergeAll = require('../ramda/dist/src/mergeAll');

declare const a_1: { a: 1 };
declare const b_2: { b: 2 };

// @dts-jest:pass:snap -> object
R_mergeAll([a_1, b_2]);
