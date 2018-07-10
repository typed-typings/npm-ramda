import * as R from '../ramda/dist/index';

declare const string: string;
declare const number: number;

// @dts-jest:pass:snap
R.gte(string);
// @dts-jest:pass:snap
R.gte(string, string);
// @dts-jest:pass:snap
R.gte(number, number);
