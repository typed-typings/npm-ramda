import R_intersection = require('../ramda/dist/src/intersection');

declare const number_array: number[];

// @dts-jest:pass:snap -> (b: number[] | ArrayLike<number>) => number[]
R_intersection(number_array);
// @dts-jest:pass:snap -> number[]
R_intersection(number_array, number_array);
