import * as R from '../ramda/dist/index';

declare const number_array_to_string: (nums: number[]) => string;
declare const number_array: number[];

// @dts-jest:pass:snap -> (...args: any[]) => string
R.unapply(number_array_to_string);
// @dts-jest:pass:snap -> string
R.unapply(number_array_to_string)(...number_array);
