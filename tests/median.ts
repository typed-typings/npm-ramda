import R_median = require('../ramda/dist/src/median');

declare const number_array: number[];

// @dts-jest:pass:snap
R_median(number_array);
