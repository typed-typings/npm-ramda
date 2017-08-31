import R_join = require('../ramda/dist/src/join');

declare const string: string;
declare const number_array: string[];

// @dts-jest:pass:snap -> (list: any[]) => string
R_join(string);
// @dts-jest:pass:snap -> string
R_join(string)(number_array);
// @dts-jest:pass:snap -> string
R_join(string, number_array);
