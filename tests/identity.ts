import * as R from '../ramda/dist/index';

declare const string: string;
declare const number: number;

// @dts-jest:pass:snap
R.identity(string);
// @dts-jest:pass:snap
R.identity(number);
