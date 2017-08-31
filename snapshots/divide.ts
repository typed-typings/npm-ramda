import R_divide = require('../ramda/dist/src/divide');

declare const number: number;

// @dts-jest:pass:snap -> number
R_divide(number, number);
// @dts-jest:pass:snap -> number
R_divide(number)(number);
