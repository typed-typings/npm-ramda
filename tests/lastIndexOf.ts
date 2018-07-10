import * as R from '../ramda/dist/index';

declare const string: string;
declare const string_array: string[];

// @dts-jest:pass:snap
R.lastIndexOf(string);
// @dts-jest:pass:snap
R.lastIndexOf(string, string);
// @dts-jest:pass:snap
R.lastIndexOf(string, string_array);
