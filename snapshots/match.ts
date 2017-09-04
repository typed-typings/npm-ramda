import R_match = require('../ramda/dist/src/match');

declare const regex: RegExp;
declare const string: string;

// @dts-jest:pass:snap -> (str: string) => string[]
R_match(regex);
// @dts-jest:pass:snap -> string[]
R_match(regex)(string);
// @dts-jest:pass:snap -> string[]
R_match(regex, string);
