import * as R from '../ramda/dist/index';

declare const number_array: number[];

// @dts-jest:pass:snap -> (b: number[] | ArrayLike<number>) => number[]
R.without(number_array);
// @dts-jest:pass:snap -> number[]
R.without(number_array, number_array);
