import * as R_is from '../ramda/dist/src/is';

declare const string: string;

// @dts-jest:pass
R_is(String);
// @dts-jest:pass
R_is(String)(string);
// @dts-jest:pass
R_is(String, string);
