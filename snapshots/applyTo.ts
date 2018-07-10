import * as R from '../ramda/dist/index';

declare const string: string;
declare const string_to_number: (x: string) => number;

// @dts-jest:pass:snap -> <R>(fn: (value: string) => R) => R
R.applyTo(string);
// @dts-jest:pass:snap -> number
R.applyTo(string)(string_to_number);
// @dts-jest:pass:snap -> number
R.applyTo(string, string_to_number);
