import * as R from '../ramda/dist/index';

declare const number: number;
declare const string: string;

// @dts-jest:pass:snap
R.min(string);
// @dts-jest:pass:snap
R.min(number);
// @dts-jest:pass:snap
R.min(number, number);
