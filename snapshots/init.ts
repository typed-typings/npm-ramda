import * as R_init from '../ramda/dist/src/init';

declare const string: string;
declare const string_array: string[];

// @dts-jest:pass -> string
R_init(string);
// @dts-jest:pass -> string[]
R_init(string_array);
