import R_lt = require('../ramda/dist/src/lt');

declare const string: string;
declare const number: number;

// @dts-jest:pass:snap -> (b: string) => boolean
R_lt(string);
// @dts-jest:pass:snap -> boolean
R_lt(string, string);
// @dts-jest:pass:snap -> boolean
R_lt(number, number);
