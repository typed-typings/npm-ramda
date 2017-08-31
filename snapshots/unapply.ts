import R_unapply = require('../ramda/dist/src/unapply');

declare const number_array_to_string: (nums: number[]) => string;
declare const number_array: number[];

// @dts-jest:pass:snap -> (...args: any[]) => string
R_unapply(number_array_to_string);
// @dts-jest:pass:snap -> string
R_unapply(number_array_to_string)(...number_array);
