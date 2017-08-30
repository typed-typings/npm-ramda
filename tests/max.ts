import * as R_max from '../ramda/dist/src/max';

declare const number: number;
declare const string: string;

// @dts-jest:pass:snap
R_max(string);
// @dts-jest:pass:snap
R_max(number);
// @dts-jest:pass:snap
R_max(number, number);
