import R_lensIndex = require('../ramda/dist/src/lensIndex');

declare const number: number;

// @dts-jest:pass:snap
R_lensIndex(0);
// @dts-jest:pass:snap
R_lensIndex(number);
