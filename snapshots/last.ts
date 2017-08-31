import R_last = require('../ramda/dist/src/last');

declare const string: string;
declare const string_array: string[];
declare const number_array: number[];

// @dts-jest:pass:snap -> string
R_last(string);
// @dts-jest:pass:snap -> string | undefined
R_last(string_array);
// @dts-jest:pass:snap -> number | undefined
R_last(number_array);
