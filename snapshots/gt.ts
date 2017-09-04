import R_gt = require('../ramda/dist/src/gt');

declare const string: string;
declare const number: number;

// @dts-jest:pass:snap -> (b: string) => boolean
R_gt(string);
// @dts-jest:pass:snap -> boolean
R_gt(string, string);
// @dts-jest:pass:snap -> boolean
R_gt(number, number);
