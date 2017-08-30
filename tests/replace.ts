import * as R_replace from '../ramda/dist/src/replace';

declare const regex: RegExp;
declare const string: string;

// @dts-jest:pass:snap
R_replace(regex, string);
// @dts-jest:pass:snap
R_replace(regex)(string)(string);
// @dts-jest:pass:snap
R_replace(regex, string, string);
