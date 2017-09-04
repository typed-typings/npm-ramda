import R_mathMod = require('../ramda/dist/src/mathMod');

declare const number: number;

// @dts-jest:pass:snap -> number
R_mathMod(number, number);
// @dts-jest:pass:snap -> number
R_mathMod(number)(number);
