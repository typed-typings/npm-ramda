import * as R_remove from '../ramda/dist/src/remove';

declare const boolean_array: boolean[];
declare const number: number;

// @dts-jest:pass
R_remove(number, number);
// @dts-jest:pass
R_remove(number)(number)(boolean_array);
// @dts-jest:pass
R_remove(number, number, boolean_array);
