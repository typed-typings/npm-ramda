import * as R_contains from '../ramda/dist/src/contains';

declare const string: string;
declare const string_array: string[];

// @dts-jest:pass
R_contains(string);
// @dts-jest:pass
R_contains(string, string);
// @dts-jest:pass
R_contains(string, string_array);
