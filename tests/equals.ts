import * as R_equals from '../ramda/dist/src/equals';

declare const string: string;

// @dts-jest:pass
R_equals(string);
// @dts-jest:pass
R_equals(string)(string);
// @dts-jest:pass
R_equals(string, string);
