import * as R from '../ramda/dist/index';

declare const number: number;
declare const number_string_to_number_string_tuple: (
  x: number,
  y: string,
) => [number, string];
declare const string_array: string[];

// @dts-jest:pass:snap -> (list: R.List<string>) => [number, string[]]
R.mapAccum(number_string_to_number_string_tuple, number);
// @dts-jest:pass:snap -> [number, string[]]
R.mapAccum(number_string_to_number_string_tuple)(number)(string_array);
// @dts-jest:pass:snap -> [number, string[]]
R.mapAccum(number_string_to_number_string_tuple, number, string_array);
