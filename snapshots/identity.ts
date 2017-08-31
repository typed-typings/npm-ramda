import R_identity = require('../ramda/dist/src/identity');

declare const string: string;
declare const number: number;

// @dts-jest:pass:snap -> string
R_identity(string);
// @dts-jest:pass:snap -> number
R_identity(number);
