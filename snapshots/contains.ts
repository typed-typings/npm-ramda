import * as R_contains from '../ramda/dist/src/contains';

declare const string: string;
declare const string_array: string[];

// @dts-jest:pass -> (list: string[] | ArrayLike<string>) => boolean
R_contains(string);
// @dts-jest:pass -> boolean
R_contains(string, string);
// @dts-jest:pass -> boolean
R_contains(string, string_array);
