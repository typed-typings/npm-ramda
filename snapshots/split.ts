import R_split = require('../ramda/dist/src/split');

declare const regex: RegExp;
declare const string: string;

// @dts-jest:pass:snap -> (str: string) => string[]
R_split(regex);
// @dts-jest:pass:snap -> string[]
R_split(regex)(string);
// @dts-jest:pass:snap -> string[]
R_split(regex, string);
