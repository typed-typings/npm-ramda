import * as R_and from '../ramda/dist/src/and';

declare const string: string;
declare const number: number;

// @dts-jest:pass -> string | number
R_and(string)(number);
// @dts-jest:pass -> string | number
R_and(string, number);
