import * as R_is from '../ramda/dist/src/is';

declare const string: string;

// @dts-jest:pass -> (value: any) => value is String
R_is(String);
// @dts-jest:pass -> boolean
R_is(String)(string);
// @dts-jest:pass -> boolean
R_is(String, string);
