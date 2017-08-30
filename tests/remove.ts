import R_remove = require('../ramda/dist/src/remove');

declare const boolean_array: boolean[];
declare const number: number;

// @dts-jest:pass:snap
R_remove(number, number);
// @dts-jest:pass:snap
R_remove(number)(number)(boolean_array);
// @dts-jest:pass:snap
R_remove(number, number, boolean_array);
