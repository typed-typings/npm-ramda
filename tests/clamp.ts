import R_clamp = require('../ramda/dist/src/clamp');

declare const number: number;

// @dts-jest:pass:snap
R_clamp(number, number);
// @dts-jest:pass:snap
R_clamp(number)(number);
// @dts-jest:pass:snap
R_clamp(number, number, number);
