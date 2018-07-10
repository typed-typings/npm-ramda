import * as R from '../ramda/dist/index';

declare const string: string;
declare const number: number;

// @dts-jest:pass:snap -> (b: string) => boolean
R.gt(string);
// @dts-jest:pass:snap -> boolean
R.gt(string, string);
// @dts-jest:pass:snap -> boolean
R.gt(number, number);
