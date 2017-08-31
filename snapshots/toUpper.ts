import R_toUpper = require('../ramda/dist/src/toUpper');

declare const string: string;

// @dts-jest:pass:snap -> string
R_toUpper(string);
