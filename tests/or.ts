import * as R_or from '../ramda/dist/src/or';

declare const string: string;
declare const number: number;

// @dts-jest:pass
R_or(string)(number);
// @dts-jest:pass
R_or(string, number);
