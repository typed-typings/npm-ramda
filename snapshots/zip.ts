import R_zip = require('../ramda/dist/src/zip');

declare const number_array: number[];
declare const string_array: string[];

// @dts-jest:pass:snap -> <U>(b: U[] | ArrayLike<U>) => [number, U][]
R_zip(number_array);
// @dts-jest:pass:snap -> [number, string][]
R_zip(number_array)(string_array);
// @dts-jest:pass:snap -> [number, string][]
R_zip(number_array, string_array);
