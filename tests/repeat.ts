import * as R from '../ramda/dist/index';

declare const string: string;
declare const number: number;

// @dts-jest:pass:snap
R.repeat(string);
// @dts-jest:pass:snap
R.repeat(string)(number);
// @dts-jest:pass:snap
R.repeat(string, number);
