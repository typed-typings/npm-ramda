import R_is = require('../ramda/dist/src/is');

declare const string: string;

// @dts-jest:pass:snap -> (value: any) => value is String
R_is(String);
// @dts-jest:pass:snap -> boolean
R_is(String)(string);
// @dts-jest:pass:snap -> boolean
R_is(String, string);
