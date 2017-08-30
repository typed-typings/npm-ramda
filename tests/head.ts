import * as R_head from '../ramda/dist/src/head';

declare const string: string;
declare const string_array: string[];
declare const number_array: number[];
declare const string_number_tuple: [string, number];
declare const number_boolean_object_tuple: [number, boolean, object];

// @dts-jest:pass:snap
R_head(string);
// @dts-jest:pass:snap
R_head(string_array);
// @dts-jest:pass:snap
R_head(number_array);
// @dts-jest:pass:snap
R_head(string_number_tuple);
// @dts-jest:pass:snap
R_head(number_boolean_object_tuple);
