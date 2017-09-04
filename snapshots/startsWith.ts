import R_startsWith = require('../ramda/dist/src/startsWith');

declare const string: string;
declare const boolean_array: boolean[];

// @dts-jest:pass:snap -> (list: string) => boolean
R_startsWith(string);
// @dts-jest:pass:snap -> boolean
R_startsWith(string, string);
// @dts-jest:pass:snap -> (list: boolean[]) => boolean
R_startsWith(boolean_array);
// @dts-jest:pass:snap -> boolean
R_startsWith(boolean_array, boolean_array);
