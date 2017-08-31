import R_indexOf = require('../ramda/dist/src/indexOf');

declare const string: string;
declare const string_array: string[];

// @dts-jest:pass:snap -> (list: string[] | ArrayLike<string>) => number
R_indexOf(string);
// @dts-jest:pass:snap -> number
R_indexOf(string, string);
// @dts-jest:pass:snap -> number
R_indexOf(string, string_array);
