import R_applyTo = require('../ramda/dist/src/applyTo');

declare const string: string;
declare const string_to_number: (x: string) => number;

// @dts-jest:pass:snap -> <R>(fn: (value: string) => R) => R
R_applyTo(string);
// @dts-jest:pass:snap -> number
R_applyTo(string)(string_to_number);
// @dts-jest:pass:snap -> number
R_applyTo(string, string_to_number);
