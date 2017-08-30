import R_takeLast = require('../ramda/dist/src/takeLast');

declare const number: number;
declare const string: string;
declare const boolean_array: boolean[];

// @dts-jest:pass:snap
R_takeLast(number, string);
// @dts-jest:pass:snap
R_takeLast(number, boolean_array);
