import * as R from '../ramda/dist/index';

declare const number_array: number[];
declare const number_array_array: number[][];

// @dts-jest:pass:snap -> number[]
R.unnest(number_array);
// @dts-jest:pass:snap -> number[]
R.unnest(number_array_array);
