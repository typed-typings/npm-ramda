import * as R from '../ramda/dist/index';

declare const number_to_boolean: (x: number) => boolean;
declare const number_to_number: (x: number) => number;
declare const number: number;

// @dts-jest:pass:snap
R.until(number_to_boolean, number_to_number);
// @dts-jest:pass:snap
R.until(number_to_boolean)(number_to_number)(number);
// @dts-jest:pass:snap
R.until(number_to_boolean, number_to_number, number);
