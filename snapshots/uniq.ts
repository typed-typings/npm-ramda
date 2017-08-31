import R_uniq = require('../ramda/dist/src/uniq');

declare const number_array: number[];
declare const string_array: string[];

// @dts-jest:pass:snap -> number[]
R_uniq(number_array);
// @dts-jest:pass:snap -> string[]
R_uniq(string_array);
