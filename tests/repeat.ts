import * as R_repeat from '../ramda/dist/src/repeat';

declare const string: string;
declare const number: number;

// @dts-jest:pass
R_repeat(string);
// @dts-jest:pass
R_repeat(string)(number);
// @dts-jest:pass
R_repeat(string, number);
