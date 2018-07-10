import * as R from '../ramda/dist/index';

declare const number_array: number[];

// @dts-jest:pass:snap -> (b: number[] | ArrayLike<number>) => number[]
R.intersection(number_array);
// @dts-jest:pass:snap -> number[]
R.intersection(number_array, number_array);
