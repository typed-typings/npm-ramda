import * as R from '../ramda/dist/index';

declare const string: string;
declare const number: number;

// @dts-jest:pass:snap -> string
R.identity(string);
// @dts-jest:pass:snap -> number
R.identity(number);
