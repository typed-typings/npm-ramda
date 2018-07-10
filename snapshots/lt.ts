import * as R from '../ramda/dist/index';

declare const string: string;
declare const number: number;

// @dts-jest:pass:snap -> (b: string) => boolean
R.lt(string);
// @dts-jest:pass:snap -> boolean
R.lt(string, string);
// @dts-jest:pass:snap -> boolean
R.lt(number, number);
