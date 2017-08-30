import * as R_or from '../ramda/dist/src/or';

declare const string: string;
declare const number: number;

// @dts-jest:pass:snap
R_or(string)(number);
// @dts-jest:pass:snap
R_or(string, number);
