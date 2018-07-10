import * as R from '../ramda/dist/index';

declare const number: number;

// @dts-jest:pass:snap
R.range(number);
// @dts-jest:pass:snap
R.range(number)(number);
// @dts-jest:pass:snap
R.range(number, number);
