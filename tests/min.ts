import * as R_min from '../ramda/dist/src/min';

declare const number: number;
declare const string: string;

// @dts-jest:pass
R_min(string);
// @dts-jest:pass
R_min(number);
// @dts-jest:pass
R_min(number, number);
