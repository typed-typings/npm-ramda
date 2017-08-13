import * as R_gt from '../ramda/dist/src/gt';

declare const string: string;
declare const number: number;

// @dts-jest:pass -> (b: string) => boolean
R_gt(string);
// @dts-jest:pass -> boolean
R_gt(string, string);
// @dts-jest:pass -> boolean
R_gt(number, number);
