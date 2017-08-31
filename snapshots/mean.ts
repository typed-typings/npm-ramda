import R_mean = require('../ramda/dist/src/mean');

declare const number_array: number[];

// @dts-jest:pass:snap -> number
R_mean(number_array);
