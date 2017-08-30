import R_dropLast = require('../ramda/dist/src/dropLast');

declare const number: number;
declare const string: string;
declare const boolean_array: boolean[];

// @dts-jest:pass:snap
R_dropLast(number, string);
// @dts-jest:pass:snap
R_dropLast(number, boolean_array);
