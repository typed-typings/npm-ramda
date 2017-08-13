import * as R_intersectionWith from '../ramda/dist/src/intersectionWith';

declare const number_number_to_boolean: (a: number, b: number) => boolean;
declare const number_array: number[];

// @dts-jest:pass -> (b: number[] | ArrayLike<number>) => number[]
R_intersectionWith(number_number_to_boolean, number_array);
// @dts-jest:pass -> number[]
R_intersectionWith(number_number_to_boolean, number_array, number_array);
