import * as R_remove from '../ramda/dist/src/remove';

declare const boolean_array: boolean[];
declare const number: number;

// @dts-jest:pass -> <T>(list: T[]) => T[]
R_remove(number, number);
// @dts-jest:pass -> boolean[]
R_remove(number)(number)(boolean_array);
// @dts-jest:pass -> boolean[]
R_remove(number, number, boolean_array);
