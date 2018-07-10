import * as R from '../ramda/dist/index';

declare const string: string;

// @dts-jest:pass:snap -> (b: string) => boolean
R.equals(string);
// @dts-jest:pass:snap -> boolean
R.equals(string)(string);
// @dts-jest:pass:snap -> boolean
R.equals(string, string);

// @dts-jest:pass:snap -> <T>(b: T | undefined) => boolean
R.equals(undefined);
// @dts-jest:pass:snap -> <T>(b: T | null) => boolean
R.equals(null);
