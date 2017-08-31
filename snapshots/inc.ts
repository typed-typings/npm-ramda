import R_inc = require('../ramda/dist/src/inc');

declare const number: number;

// @dts-jest:pass:snap -> number
R_inc(number);
