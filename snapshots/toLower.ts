import R_toLower = require('../ramda/dist/src/toLower');

declare const string: string;

// @dts-jest:pass:snap -> string
R_toLower(string);
