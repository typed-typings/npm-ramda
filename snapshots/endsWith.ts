import R_endsWith = require('../ramda/dist/src/endsWith');

declare const string: string;
declare const boolean_array: boolean[];

// @dts-jest:pass:snap -> (list: string) => boolean
R_endsWith(string);
// @dts-jest:pass:snap -> boolean
R_endsWith(string, string);
// @dts-jest:pass:snap -> (list: boolean[]) => boolean
R_endsWith(boolean_array);
// @dts-jest:pass:snap -> boolean
R_endsWith(boolean_array, boolean_array);
