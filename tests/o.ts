import * as R from '../ramda/dist/index';

declare const number_to_string: (x: number) => string;
declare const boolean_to_number: (x: boolean) => number;
declare const boolean: boolean;

// @dts-jest:pass:snap
R.o(number_to_string, boolean_to_number);
// @dts-jest:pass:snap
R.o(number_to_string)(boolean_to_number)(boolean);
// @dts-jest:pass:snap
R.o(number_to_string, boolean_to_number, boolean);
