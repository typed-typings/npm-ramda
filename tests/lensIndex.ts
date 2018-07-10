import * as R from '../ramda/dist/index';

declare const number: number;

// @dts-jest:pass:snap
R.lensIndex(0);
// @dts-jest:pass:snap
R.lensIndex(number);
