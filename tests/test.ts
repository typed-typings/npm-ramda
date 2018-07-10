import * as R from '../ramda/dist/index';

declare const regex: RegExp;
declare const string: string;

// @dts-jest:pass:snap
R.test(regex);
// @dts-jest:pass:snap
R.test(regex, string);
