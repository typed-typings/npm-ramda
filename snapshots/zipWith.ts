import * as R from '../ramda/dist/index';

declare const number_string_to_object: (x: number, y: string) => object;
declare const number_array: number[];
declare const string_array: string[];

// @dts-jest:pass:snap -> (b: R.List<string>) => object[]
R.zipWith(number_string_to_object, number_array);
// @dts-jest:pass:snap -> object[]
R.zipWith(number_string_to_object)(number_array)(string_array);
// @dts-jest:pass:snap -> object[]
R.zipWith(number_string_to_object, number_array, string_array);
