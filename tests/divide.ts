import * as R_divide from '../ramda/dist/src/divide';

declare const number: number;

// @dts-jest:pass:snap
R_divide(number, number);
// @dts-jest:pass:snap
R_divide(number)(number);
