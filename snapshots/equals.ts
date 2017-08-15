import * as R_equals from '../ramda/dist/src/equals';

declare const string: string;

// @dts-jest:pass -> (b: string) => boolean
R_equals(string);
// @dts-jest:pass -> boolean
R_equals(string)(string);
// @dts-jest:pass -> boolean
R_equals(string, string);
