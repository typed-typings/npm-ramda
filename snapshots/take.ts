import R_take = require('../ramda/dist/src/take');

declare const number: number;
declare const string: string;
declare const boolean_array: boolean[];

// @dts-jest:pass:snap -> string
R_take(number, string);
// @dts-jest:pass:snap -> boolean[]
R_take(number, boolean_array);
