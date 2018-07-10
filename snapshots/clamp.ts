import * as R from '../ramda/dist/index';

declare const number: number;

// @dts-jest:pass:snap -> (value: number) => number
R.clamp(number, number);
// @dts-jest:pass:snap -> (value: number) => number
R.clamp(number)(number);
// @dts-jest:pass:snap -> number
R.clamp(number, number, number);
