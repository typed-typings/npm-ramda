import R_identical = require('../ramda/dist/src/identical');

declare const string: string;

// @dts-jest:pass:snap -> (b: string) => boolean
R_identical(string);
// @dts-jest:pass:snap -> boolean
R_identical(string)(string);
// @dts-jest:pass:snap -> boolean
R_identical(string, string);
