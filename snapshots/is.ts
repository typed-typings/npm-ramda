import * as R from '../ramda/dist/index';

declare const string: string;

// @dts-jest:pass:snap -> (value: any) => value is String
R.is(String);
// @dts-jest:pass:snap -> boolean
R.is(String)(string);
// @dts-jest:pass:snap -> boolean
R.is(String, string);
