import R_gt = require('../ramda/dist/src/gt');

declare const string: string;
declare const number: number;

// @dts-jest:pass:snap
R_gt(string);
// @dts-jest:pass:snap
R_gt(string, string);
// @dts-jest:pass:snap
R_gt(number, number);
