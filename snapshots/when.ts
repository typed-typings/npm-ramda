import * as R from '../ramda/dist/index';

declare const number_to_boolean: (x: number) => boolean;
declare const number_to_string: (x: number) => string;
declare const number: number;

// @dts-jest:pass:snap -> (value: number) => string | number
R.when(number_to_boolean, number_to_string);
// @dts-jest:pass:snap -> string | number
R.when(number_to_boolean)(number_to_string)(number);
// @dts-jest:pass:snap -> string | number
R.when(number_to_boolean, number_to_string, number);
