import R_min = require('../ramda/dist/src/min');

declare const number: number;
declare const string: string;

// @dts-jest:pass:snap -> (b: string) => string
R_min(string);
// @dts-jest:pass:snap -> (b: number) => number
R_min(number);
// @dts-jest:pass:snap -> number
R_min(number, number);
