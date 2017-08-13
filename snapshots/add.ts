import * as R_add from '../ramda/dist/src/add';

declare const number: number;

// @dts-jest:pass -> number
R_add(number, number);
// @dts-jest:pass -> number
R_add(number)(number);
