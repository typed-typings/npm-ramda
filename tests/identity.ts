import R_identity = require('../ramda/dist/src/identity');

declare const string: string;
declare const number: number;

// @dts-jest:pass:snap
R_identity(string);
// @dts-jest:pass:snap
R_identity(number);
