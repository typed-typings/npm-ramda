import R_eqBy = require('../ramda/dist/src/eqBy');

declare const string_to_number: (x: string) => number;
declare const string: string;

// @dts-jest:pass:snap -> (b: string) => boolean
R_eqBy(string_to_number, string);
// @dts-jest:pass:snap -> boolean
R_eqBy(string_to_number)(string)(string);
// @dts-jest:pass:snap -> boolean
R_eqBy(string_to_number, string, string);
