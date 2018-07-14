import * as R from '../ramda/dist/index';

declare const string: string;
declare const number: number;

// @dts-jest:pass:snap -> (b: string) => boolean
R.lte(string);
// @dts-jest:pass:snap -> boolean
R.lte(string, string);
// @dts-jest:pass:snap -> boolean
R.lte(number, number);
