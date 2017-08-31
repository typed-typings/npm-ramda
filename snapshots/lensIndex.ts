import R_lensIndex = require('../ramda/dist/src/lensIndex');

declare const number: number;

// @dts-jest:pass:snap -> PseudoLens<0>
R_lensIndex(0);
// @dts-jest:pass:snap -> PseudoLens<number>
R_lensIndex(number);
