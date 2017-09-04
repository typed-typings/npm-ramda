import R_difference = require('../ramda/dist/src/difference');

declare const number_array: number[];

// @dts-jest:pass:snap -> (b: number[] | ArrayLike<number>) => number[]
R_difference(number_array);
// @dts-jest:pass:snap -> number[]
R_difference(number_array, number_array);
