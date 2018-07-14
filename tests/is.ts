import * as R from '../ramda/dist/index';

declare const string: string;

// @dts-jest:pass:snap
R.is(String);
// @dts-jest:pass:snap
R.is(String)(string);
// @dts-jest:pass:snap
R.is(String, string);
