import * as R from '../ramda/dist/index';

declare const number_array: number[];

// @dts-jest:pass:snap -> number
R.mean(number_array);
