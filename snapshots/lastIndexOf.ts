import * as R_lastIndexOf from '../ramda/dist/src/lastIndexOf';

declare const string: string;
declare const string_array: string[];

// @dts-jest:pass -> (list: string[] | ArrayLike<string>) => number
R_lastIndexOf(string);
// @dts-jest:pass -> number
R_lastIndexOf(string, string);
// @dts-jest:pass -> number
R_lastIndexOf(string, string_array);
