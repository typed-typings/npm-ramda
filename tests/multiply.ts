import * as R_multiply from '../ramda/dist/src/multiply';

declare const number: number;

// @dts-jest:pass
R_multiply(number, number);
// @dts-jest:pass
R_multiply(number)(number);
