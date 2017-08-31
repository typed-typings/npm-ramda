import R_isNil = require('../ramda/dist/src/isNil');

declare const string: string;

// @dts-jest:pass:snap
R_isNil;

// @dts-jest:pass:snap
R_isNil(string);
