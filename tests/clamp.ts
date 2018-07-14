import * as R from '../ramda/dist/index';

declare const number: number;

// @dts-jest:pass:snap
R.clamp(number, number);
// @dts-jest:pass:snap
R.clamp(number)(number);
// @dts-jest:pass:snap
R.clamp(number, number, number);
