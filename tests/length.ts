import * as R_length from '../ramda/dist/src/length';

declare const string: string;
declare const string_array: string[];

// @dts-jest:pass
R_length(string);
// @dts-jest:pass
R_length(string_array);
