import R_modulo = require('../ramda/dist/src/modulo');

declare const number: number;

// @dts-jest:pass:snap -> number
R_modulo(number, number);
// @dts-jest:pass:snap -> number
R_modulo(number)(number);
