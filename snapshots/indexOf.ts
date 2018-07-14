import * as R from '../ramda/dist/index';

declare const string: string;
declare const string_array: string[];

// @dts-jest:pass:snap -> (list: R.List<string>) => number
R.indexOf(string);
// @dts-jest:pass:snap -> number
R.indexOf(string, string);
// @dts-jest:pass:snap -> number
R.indexOf(string, string_array);
