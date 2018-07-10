import * as R from '../ramda/dist/index';

declare const string: string;

// @dts-jest:pass:snap
R.equals(string);
// @dts-jest:pass:snap
R.equals(string)(string);
// @dts-jest:pass:snap
R.equals(string, string);

// @dts-jest:pass:snap
R.equals(undefined);
// @dts-jest:pass:snap
R.equals(null);
