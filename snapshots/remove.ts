import R_remove = require('../ramda/dist/src/remove');

declare const boolean_array: boolean[];
declare const number: number;

// @dts-jest:pass:snap -> <T>(list: T[]) => T[]
R_remove(number, number);
// @dts-jest:pass:snap -> boolean[]
R_remove(number)(number)(boolean_array);
// @dts-jest:pass:snap -> boolean[]
R_remove(number, number, boolean_array);
