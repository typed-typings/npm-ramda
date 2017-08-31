import R_without = require('../ramda/dist/src/without');

declare const number_array: number[];

// @dts-jest:pass:snap -> (b: number[] | ArrayLike<number>) => number[]
R_without(number_array);
// @dts-jest:pass:snap -> number[]
R_without(number_array, number_array);
