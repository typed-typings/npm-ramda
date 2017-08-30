import * as R_identical from '../ramda/dist/src/identical';

declare const string: string;

// @dts-jest:pass:snap
R_identical(string);
// @dts-jest:pass:snap
R_identical(string)(string);
// @dts-jest:pass:snap
R_identical(string, string);
