import * as R from '../ramda/dist/index';

declare const number: number;

// @dts-jest:pass:snap -> (to: number) => number[]
R.range(number);
// @dts-jest:pass:snap -> number[]
R.range(number)(number);
// @dts-jest:pass:snap -> number[]
R.range(number, number);
