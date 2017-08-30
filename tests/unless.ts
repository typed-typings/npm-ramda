import R_unless = require('../ramda/dist/src/unless');

declare const number_is_1: (x: number) => x is 1;
declare const number_to_boolean: (x: number) => boolean;
declare const number_to_string: (x: number) => string;
declare const number: number;

// @dts-jest:pass:snap
R_unless(number_to_boolean, number_to_string);
// @dts-jest:pass:snap
R_unless(number_to_boolean)(number_to_string)(number);
// @dts-jest:pass:snap
R_unless(number_to_boolean, number_to_string, number);

// @dts-jest:pass:snap
R_unless(number_is_1, number_to_string);
// @dts-jest:pass:snap
R_unless(number_is_1)(number_to_string)(number);
// @dts-jest:pass:snap
R_unless(number_is_1, number_to_string, number);
