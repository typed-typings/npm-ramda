import * as R from '../ramda/dist/index';

declare const string: string;
declare const string_array: string[];

// @dts-jest:pass:snap -> (list: R.List<string>) => boolean
R.contains(string);
// @dts-jest:pass:snap -> boolean
R.contains(string, string);
// @dts-jest:pass:snap -> boolean
R.contains(string, string_array);
