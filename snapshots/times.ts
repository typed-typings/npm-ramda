import R_times = require('../ramda/dist/src/times');

declare const number_to_object: (x: number) => object;
declare const number: number;

// @dts-jest:pass:snap -> (n: number) => object[]
R_times(number_to_object);
// @dts-jest:pass:snap -> object[]
R_times(number_to_object, number);
