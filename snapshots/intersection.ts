import * as R_intersection from '../ramda/dist/src/intersection';

declare const number_array: number[];

// @dts-jest:pass -> (b: number[] | ArrayLike<number>) => number[]
R_intersection(number_array);
// @dts-jest:pass -> number[]
R_intersection(number_array, number_array);
