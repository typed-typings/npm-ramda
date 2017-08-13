import * as R_clamp from '../ramda/dist/src/clamp';

declare const number: number;

// @dts-jest:pass -> (value: number) => number
R_clamp(number, number);
// @dts-jest:pass -> (value: number) => number
R_clamp(number)(number);
// @dts-jest:pass -> number
R_clamp(number, number, number);
