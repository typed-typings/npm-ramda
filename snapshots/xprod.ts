import R_xprod = require('../ramda/dist/src/xprod');

declare const number_array: number[];
declare const string_array: string[];

// @dts-jest:pass:snap -> <U>(b: U[] | ArrayLike<U>) => [number, U][]
R_xprod(number_array);
// @dts-jest:pass:snap -> [number, string][]
R_xprod(number_array)(string_array);
// @dts-jest:pass:snap -> [number, string][]
R_xprod(number_array, string_array);
