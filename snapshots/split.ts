import * as R_split from '../ramda/dist/src/split';

declare const regex: RegExp;
declare const string: string;

// @dts-jest:pass -> (str: string) => string[]
R_split(regex);
// @dts-jest:pass -> string[]
R_split(regex)(string);
// @dts-jest:pass -> string[]
R_split(regex, string);
