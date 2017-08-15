import * as R_min from '../ramda/dist/src/min';

declare const number: number;
declare const string: string;

// @dts-jest:pass -> (b: string) => string
R_min(string);
// @dts-jest:pass -> (b: number) => number
R_min(number);
// @dts-jest:pass -> number
R_min(number, number);
