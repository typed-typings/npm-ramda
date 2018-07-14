import * as R from '../ramda/dist/index';

declare const string: string;
declare const string_array: string[];

// @dts-jest:pass:snap
R.init(string);
// @dts-jest:pass:snap
R.init(string_array);
