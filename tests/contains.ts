import R_contains = require('../ramda/dist/src/contains');

declare const string: string;
declare const string_array: string[];

// @dts-jest:pass:snap
R_contains(string);
// @dts-jest:pass:snap
R_contains(string, string);
// @dts-jest:pass:snap
R_contains(string, string_array);
