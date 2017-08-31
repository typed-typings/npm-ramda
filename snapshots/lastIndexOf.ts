import R_lastIndexOf = require('../ramda/dist/src/lastIndexOf');

declare const string: string;
declare const string_array: string[];

// @dts-jest:pass:snap -> (list: string[] | ArrayLike<string>) => number
R_lastIndexOf(string);
// @dts-jest:pass:snap -> number
R_lastIndexOf(string, string);
// @dts-jest:pass:snap -> number
R_lastIndexOf(string, string_array);
