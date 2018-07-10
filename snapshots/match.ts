import * as R from '../ramda/dist/index';

declare const regex: RegExp;
declare const string: string;

// @dts-jest:pass:snap -> (str: string) => string[]
R.match(regex);
// @dts-jest:pass:snap -> string[]
R.match(regex)(string);
// @dts-jest:pass:snap -> string[]
R.match(regex, string);
