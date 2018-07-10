import * as R from '../ramda/dist/index';

declare const string: string;
declare const number: number;

// @dts-jest:pass:snap -> (b: string) => boolean
R.gte(string);
// @dts-jest:pass:snap -> boolean
R.gte(string, string);
// @dts-jest:pass:snap -> boolean
R.gte(number, number);
