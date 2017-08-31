import R_gte = require('../ramda/dist/src/gte');

declare const string: string;
declare const number: number;

// @dts-jest:pass:snap -> (b: string) => boolean
R_gte(string);
// @dts-jest:pass:snap -> boolean
R_gte(string, string);
// @dts-jest:pass:snap -> boolean
R_gte(number, number);
