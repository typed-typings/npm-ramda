import * as R_match from '../ramda/dist/src/match';

declare const regex: RegExp;
declare const string: string;

// @dts-jest:pass
R_match(regex);
// @dts-jest:pass
R_match(regex)(string);
// @dts-jest:pass
R_match(regex, string);
