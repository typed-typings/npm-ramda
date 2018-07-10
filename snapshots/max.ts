import * as R from '../ramda/dist/index';

declare const number: number;
declare const string: string;

// @dts-jest:pass:snap -> (b: string) => string
R.max(string);
// @dts-jest:pass:snap -> (b: number) => number
R.max(number);
// @dts-jest:pass:snap -> number
R.max(number, number);
