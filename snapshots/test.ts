import * as R from '../ramda/dist/index';

declare const regex: RegExp;
declare const string: string;

// @dts-jest:pass:snap -> (str: string) => boolean
R.test(regex);
// @dts-jest:pass:snap -> boolean
R.test(regex, string);
