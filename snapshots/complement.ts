import R_complement = require('../ramda/dist/src/complement');

declare const string: string;
declare const string_string_to_boolean: (a: string, b: string) => boolean;

// @dts-jest:pass:snap -> (...args: any[]) => boolean
R_complement(string_string_to_boolean);
// @dts-jest:pass:snap -> boolean
R_complement(string_string_to_boolean)(string, string);
