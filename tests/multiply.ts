import R_multiply = require('../ramda/dist/src/multiply');

declare const number: number;

// @dts-jest:pass:snap
R_multiply(number, number);
// @dts-jest:pass:snap
R_multiply(number)(number);
