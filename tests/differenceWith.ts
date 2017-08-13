import * as R_differenceWith from '../ramda/dist/src/differenceWith';

declare const number_number_to_boolean: (a: number, b: number) => boolean;
declare const number_array: number[];

// @dts-jest:pass
R_differenceWith(number_number_to_boolean, number_array);
// @dts-jest:pass
R_differenceWith(number_number_to_boolean, number_array, number_array);
