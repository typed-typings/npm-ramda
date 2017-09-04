import R_head = require('../ramda/dist/src/head');

declare const string: string;
declare const string_array: string[];
declare const number_array: number[];
declare const string_number_tuple: [string, number];
declare const number_boolean_object_tuple: [number, boolean, object];

// @dts-jest:pass:snap -> string
R_head(string);
// @dts-jest:pass:snap -> string | undefined
R_head(string_array);
// @dts-jest:pass:snap -> number | undefined
R_head(number_array);
// @dts-jest:pass:snap -> string
R_head(string_number_tuple);
// @dts-jest:pass:snap -> number
R_head(number_boolean_object_tuple);
