import * as R from '../ramda/dist/index';

declare const number: number;
declare const string: string;

// @dts-jest:pass:snap -> (b: string) => string
R.min(string);
// @dts-jest:pass:snap -> (b: number) => number
R.min(number);
// @dts-jest:pass:snap -> number
R.min(number, number);
