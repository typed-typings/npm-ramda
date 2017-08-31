import R_range = require('../ramda/dist/src/range');

declare const number: number;

// @dts-jest:pass:snap
R_range(number);
// @dts-jest:pass:snap
R_range(number)(number);
// @dts-jest:pass:snap
R_range(number, number);
