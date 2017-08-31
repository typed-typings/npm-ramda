import R_empty = require('../ramda/dist/src/empty');

declare const object: object;
declare const string: string;
declare const string_array: string[];

// @dts-jest:pass:snap -> {}
R_empty(object);
// @dts-jest:pass:snap -> string
R_empty(string);
// @dts-jest:pass:snap -> string[]
R_empty(string_array);
