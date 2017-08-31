import R_test = require('../ramda/dist/src/test');

declare const regex: RegExp;
declare const string: string;

// @dts-jest:pass:snap -> (str: string) => boolean
R_test(regex);
// @dts-jest:pass:snap -> boolean
R_test(regex, string);
