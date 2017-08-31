import R_append = require('../ramda/dist/src/append');

declare const string: string;
declare const number: number;
declare const number_array: number[];

// @dts-jest:pass:snap -> (string | number)[]
R_append(string)(number_array);
// @dts-jest:pass:snap -> (string | number)[]
R_append(string, number_array);
// @dts-jest:pass:snap -> number[]
R_append(number)(number_array);
// @dts-jest:pass:snap -> number[]
R_append(number, number_array);
