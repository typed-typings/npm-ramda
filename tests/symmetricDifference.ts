import R_symmetricDifference = require('../ramda/dist/src/symmetricDifference');

declare const number_array: number[];

// @dts-jest:pass:snap
R_symmetricDifference(number_array);
// @dts-jest:pass:snap
R_symmetricDifference(number_array, number_array);
