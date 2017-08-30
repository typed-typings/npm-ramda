import R_subtract = require('../ramda/dist/src/subtract');

declare const number: number;

// @dts-jest:pass:snap
R_subtract(number, number);
// @dts-jest:pass:snap
R_subtract(number)(number);
