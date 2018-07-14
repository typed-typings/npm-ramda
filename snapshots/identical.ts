import * as R from '../ramda/dist/index';

declare const string: string;

// @dts-jest:pass:snap -> (b: string) => boolean
R.identical(string);
// @dts-jest:pass:snap -> boolean
R.identical(string)(string);
// @dts-jest:pass:snap -> boolean
R.identical(string, string);
