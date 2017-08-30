import R_max = require('../ramda/dist/src/max');

declare const number: number;
declare const string: string;

// @dts-jest:pass:snap
R_max(string);
// @dts-jest:pass:snap
R_max(number);
// @dts-jest:pass:snap
R_max(number, number);
