import * as R from '../ramda/dist/index';

declare const regex: RegExp;
declare const string: string;

// @dts-jest:pass:snap
R.replace(regex, string);
// @dts-jest:pass:snap
R.replace(regex)(string)(string);
// @dts-jest:pass:snap
R.replace(regex, string, string);
