import R_startsWith = require('../ramda/dist/src/startsWith');

declare const string: string;
declare const boolean_array: boolean[];

// @dts-jest:pass:snap
R_startsWith(string);
// @dts-jest:pass:snap
R_startsWith(string, string);
// @dts-jest:pass:snap
R_startsWith(boolean_array);
// @dts-jest:pass:snap
R_startsWith(boolean_array, boolean_array);
