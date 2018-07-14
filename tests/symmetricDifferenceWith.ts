import * as R from '../ramda/dist/index';

declare const number_number_to_boolean: (a: number, b: number) => boolean;
declare const number_array: number[];

// @dts-jest:pass:snap
R.symmetricDifferenceWith(number_number_to_boolean, number_array);
// @dts-jest:pass:snap
R.symmetricDifferenceWith(number_number_to_boolean, number_array, number_array);
