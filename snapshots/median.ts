import * as R from '../ramda/dist/index';

declare const number_array: number[];

// @dts-jest:pass:snap -> number
R.median(number_array);
