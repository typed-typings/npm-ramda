import * as R from '../ramda/dist/index';

declare const number_array: number[];

// @dts-jest:pass:snap -> (b: R.List<number>) => number[]
R.difference(number_array);
// @dts-jest:pass:snap -> number[]
R.difference(number_array, number_array);
