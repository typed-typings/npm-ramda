import R_nth = require('../ramda/dist/src/nth');

declare const number: number;
declare const string: string;
declare const object_array: object[];

// @dts-jest:pass:snap -> string
R_nth(number)(string);
// @dts-jest:pass:snap -> string
R_nth(number, string);

// @dts-jest:pass:snap -> object | undefined
R_nth(number)(object_array);
// @dts-jest:pass:snap -> object | undefined
R_nth(number, object_array);
