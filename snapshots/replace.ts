import R_replace = require('../ramda/dist/src/replace');

declare const regex: RegExp;
declare const string: string;

// @dts-jest:pass:snap -> (str: string) => string
R_replace(regex, string);
// @dts-jest:pass:snap -> string
R_replace(regex)(string)(string);
// @dts-jest:pass:snap -> string
R_replace(regex, string, string);
