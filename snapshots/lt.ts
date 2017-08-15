import * as R_lt from '../ramda/dist/src/lt';

declare const string: string;
declare const number: number;

// @dts-jest:pass -> (b: string) => boolean
R_lt(string);
// @dts-jest:pass -> boolean
R_lt(string, string);
// @dts-jest:pass -> boolean
R_lt(number, number);
