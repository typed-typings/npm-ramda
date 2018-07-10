import * as R from '../ramda/dist/index';

declare const string: string;

// @dts-jest:pass:snap
R.identical(string);
// @dts-jest:pass:snap
R.identical(string)(string);
// @dts-jest:pass:snap
R.identical(string, string);
