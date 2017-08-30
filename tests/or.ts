import R_or = require('../ramda/dist/src/or');

declare const string: string;
declare const number: number;

// @dts-jest:pass:snap
R_or(string)(number);
// @dts-jest:pass:snap
R_or(string, number);
