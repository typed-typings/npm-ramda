import * as R from '../ramda/dist/index';

declare const string: string;
declare const number: number;

// @dts-jest:pass:snap
R.gt(string);
// @dts-jest:pass:snap
R.gt(string, string);
// @dts-jest:pass:snap
R.gt(number, number);
