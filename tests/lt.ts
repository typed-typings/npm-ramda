import * as R from '../ramda/dist/index';

declare const string: string;
declare const number: number;

// @dts-jest:pass:snap
R.lt(string);
// @dts-jest:pass:snap
R.lt(string, string);
// @dts-jest:pass:snap
R.lt(number, number);
