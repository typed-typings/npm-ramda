import * as R_test from '../ramda/dist/src/test';

declare const regex: RegExp;
declare const string: string;

// @dts-jest:pass:snap
R_test(regex);
// @dts-jest:pass:snap
R_test(regex, string);
