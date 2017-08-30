import R_equals = require('../ramda/dist/src/equals');

declare const string: string;

// @dts-jest:pass:snap
R_equals(string);
// @dts-jest:pass:snap
R_equals(string)(string);
// @dts-jest:pass:snap
R_equals(string, string);
