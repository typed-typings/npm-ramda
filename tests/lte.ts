import * as R from '../ramda/dist/index';

declare const string: string;
declare const number: number;

// @dts-jest:pass:snap
R.lte(string);
// @dts-jest:pass:snap
R.lte(string, string);
// @dts-jest:pass:snap
R.lte(number, number);
