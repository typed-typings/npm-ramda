import * as R from '../ramda/dist/index';

declare const string: string;
declare const string_array: string[];

// @dts-jest:pass:snap -> (list: R.List<string>) => number
R.lastIndexOf(string);
// @dts-jest:pass:snap -> number
R.lastIndexOf(string, string);
// @dts-jest:pass:snap -> number
R.lastIndexOf(string, string_array);
