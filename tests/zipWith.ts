import * as R_zipWith from '../ramda/dist/src/zipWith';

declare const number_string_to_object: (x: number, y: string) => object;
declare const number_array: number[];
declare const string_array: string[];

// @dts-jest:pass
R_zipWith(number_string_to_object, number_array);
// @dts-jest:pass
R_zipWith(number_string_to_object)(number_array)(string_array);
// @dts-jest:pass
R_zipWith(number_string_to_object, number_array, string_array);
