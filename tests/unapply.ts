import * as R_unapply from '../ramda/dist/src/unapply';

declare const number_array_to_string: (nums: number[]) => string;
declare const number_array: number[];

// @dts-jest:pass:snap
R_unapply(number_array_to_string);
// @dts-jest:pass:snap
R_unapply(number_array_to_string)(...number_array);
