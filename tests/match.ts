import * as R from '../ramda/dist/index';

declare const regex: RegExp;
declare const string: string;

// @dts-jest:pass:snap
R.match(regex);
// @dts-jest:pass:snap
R.match(regex)(string);
// @dts-jest:pass:snap
R.match(regex, string);
