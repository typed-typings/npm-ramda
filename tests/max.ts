import * as R from '../ramda/dist/index';

declare const number: number;
declare const string: string;

// @dts-jest:pass:snap
R.max(string);
// @dts-jest:pass:snap
R.max(number);
// @dts-jest:pass:snap
R.max(number, number);
