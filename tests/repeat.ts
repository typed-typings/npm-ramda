import R_repeat = require('../ramda/dist/src/repeat');

declare const string: string;
declare const number: number;

// @dts-jest:pass:snap
R_repeat(string);
// @dts-jest:pass:snap
R_repeat(string)(number);
// @dts-jest:pass:snap
R_repeat(string, number);
