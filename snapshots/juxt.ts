import R_juxt = require('../ramda/dist/src/juxt');

declare const string_string_to_number: (x: string, y: string) => number;
declare const string: string;

// @dts-jest:pass:snap -> (...args: string[]) => number[]
R_juxt([string_string_to_number]);
// @dts-jest:pass:snap -> number[]
R_juxt([string_string_to_number])(string, string);
