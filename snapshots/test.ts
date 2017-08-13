import * as R_test from '../ramda/dist/src/test';

declare const regex: RegExp;
declare const string: string;

// @dts-jest:pass -> (str: string) => boolean
R_test(regex);
// @dts-jest:pass -> boolean
R_test(regex, string);
