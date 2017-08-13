import * as R_lte from '../ramda/dist/src/lte';

declare const string: string;
declare const number: number;

// @dts-jest:pass -> (b: string) => boolean
R_lte(string);
// @dts-jest:pass -> boolean
R_lte(string, string);
// @dts-jest:pass -> boolean
R_lte(number, number);
