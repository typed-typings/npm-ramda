import * as R_symmetricDifferenceWith from '../ramda/dist/src/symmetricDifferenceWith';

declare const number_number_to_boolean: (a: number, b: number) => boolean;
declare const number_array: number[];

// @dts-jest:pass -> (b: number[] | ArrayLike<number>) => number[]
R_symmetricDifferenceWith(number_number_to_boolean, number_array);
// @dts-jest:pass -> number[]
R_symmetricDifferenceWith(number_number_to_boolean, number_array, number_array);
