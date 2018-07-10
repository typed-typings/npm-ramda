import * as R from '../ramda/dist/index';

declare const string: string;
declare const number: number;

// @dts-jest:pass:snap -> (count: number) => string[]
R.repeat(string);
// @dts-jest:pass:snap -> string[]
R.repeat(string)(number);
// @dts-jest:pass:snap -> string[]
R.repeat(string, number);
