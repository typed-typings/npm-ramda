import * as R_head from '../ramda/dist/src/head';

declare const string: string;
declare const string_array: string[];
declare const number_array: number[];
declare const string_number_tuple: [string, number];
declare const number_boolean_object_tuple: [number, boolean, object];

// @dts-jest:pass -> string
R_head(string);
// @dts-jest:pass -> string | undefined
R_head(string_array);
// @dts-jest:pass -> number | undefined
R_head(number_array);
// @dts-jest:pass -> string
R_head(string_number_tuple);
// @dts-jest:pass -> number
R_head(number_boolean_object_tuple);
