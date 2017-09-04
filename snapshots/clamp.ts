import R_clamp = require('../ramda/dist/src/clamp');

declare const number: number;

// @dts-jest:pass:snap -> (value: number) => number
R_clamp(number, number);
// @dts-jest:pass:snap -> (value: number) => number
R_clamp(number)(number);
// @dts-jest:pass:snap -> number
R_clamp(number, number, number);
