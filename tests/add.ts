import R_add = require('../ramda/dist/src/add');

declare const number: number;

// @dts-jest:pass:snap
R_add(number, number);
// @dts-jest:pass:snap
R_add(number)(number);
