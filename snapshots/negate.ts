import R_negate = require('../ramda/dist/src/negate');

declare const number: number;

// @dts-jest:pass:snap -> number
R_negate(number);
