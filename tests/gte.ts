import * as R_gte from '../ramda/dist/src/gte';

declare const string: string;
declare const number: number;

// @dts-jest:pass
R_gte(string);
// @dts-jest:pass
R_gte(string, string);
// @dts-jest:pass
R_gte(number, number);
