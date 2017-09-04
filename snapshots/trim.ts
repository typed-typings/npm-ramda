import R_trim = require('../ramda/dist/src/trim');

declare const string: string;

// @dts-jest:pass:snap -> string
R_trim(string);
