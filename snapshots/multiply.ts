import * as R from '../ramda/dist/index';

declare const number: number;

// @dts-jest:pass:snap -> number
R.multiply(number, number);
// @dts-jest:pass:snap -> number
R.multiply(number)(number);
