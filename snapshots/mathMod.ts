import * as R from '../ramda/dist/index';

declare const number: number;

// @dts-jest:pass:snap -> number
R.mathMod(number, number);
// @dts-jest:pass:snap -> number
R.mathMod(number)(number);
