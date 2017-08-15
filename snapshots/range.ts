import * as R_range from '../ramda/dist/src/range';

declare const number: number;

// @dts-jest:pass -> (to: number) => number[]
R_range(number);
// @dts-jest:pass -> number[]
R_range(number)(number);
// @dts-jest:pass -> number[]
R_range(number, number);
