import * as R from '../ramda/dist/index';

declare const regex: RegExp;
declare const string: string;

// @dts-jest:pass:snap -> (str: string) => string[]
R.split(regex);
// @dts-jest:pass:snap -> string[]
R.split(regex)(string);
// @dts-jest:pass:snap -> string[]
R.split(regex, string);
