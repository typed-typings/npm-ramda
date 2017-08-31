import R_prepend = require('../ramda/dist/src/prepend');

declare const string: string;
declare const number: number;
declare const number_array: number[];

// @dts-jest:pass:snap -> (string | number)[]
R_prepend(string)(number_array);
// @dts-jest:pass:snap -> (string | number)[]
R_prepend(string, number_array);
// @dts-jest:pass:snap -> number[]
R_prepend(number)(number_array);
// @dts-jest:pass:snap -> number[]
R_prepend(number, number_array);
