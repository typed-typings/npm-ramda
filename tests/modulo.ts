import R_modulo = require('../ramda/dist/src/modulo');

declare const number: number;

// @dts-jest:pass:snap
R_modulo(number, number);
// @dts-jest:pass:snap
R_modulo(number)(number);
