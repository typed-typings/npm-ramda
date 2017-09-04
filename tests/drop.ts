import R_drop = require('../ramda/dist/src/drop');

declare const number: number;
declare const string: string;
declare const boolean_array: boolean[];

// @dts-jest:pass:snap
R_drop(number, string);
// @dts-jest:pass:snap
R_drop(number, boolean_array);
