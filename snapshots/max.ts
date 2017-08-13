import * as R_max from '../ramda/dist/src/max';

declare const number: number;
declare const string: string;

// @dts-jest:pass -> (b: string) => string
R_max(string);
// @dts-jest:pass -> (b: number) => number
R_max(number);
// @dts-jest:pass -> number
R_max(number, number);
