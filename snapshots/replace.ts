import * as R_replace from '../ramda/dist/src/replace';

declare const regex: RegExp;
declare const string: string;

// @dts-jest:pass -> (str: string) => string
R_replace(regex, string);
// @dts-jest:pass -> string
R_replace(regex)(string)(string);
// @dts-jest:pass -> string
R_replace(regex, string, string);
