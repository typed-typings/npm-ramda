import * as R from '../ramda/dist/index';

declare const number_array: number[];

// @dts-jest:pass:snap -> (b: R.List<number>) => number[]
R.union(number_array);
// @dts-jest:pass:snap -> number[]
R.union(number_array, number_array);
