import R_sum = require('../ramda/dist/src/sum');

declare const number_array: number[];

// @dts-jest:pass:snap -> number
R_sum(number_array);
