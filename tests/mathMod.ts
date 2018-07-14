import * as R from '../ramda/dist/index';

declare const number: number;

// @dts-jest:pass:snap
R.mathMod(number, number);
// @dts-jest:pass:snap
R.mathMod(number)(number);
