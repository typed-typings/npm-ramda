import * as R from '../ramda/dist/index';

declare const number: number;
declare const string_number_to_string_number_tuple: (
  x: string,
  y: number,
) => [string, number];
declare const string_array: string[];

// @dts-jest:pass:snap -> (list: string[] | ArrayLike<string>) => [string[], number]
R.mapAccumRight(string_number_to_string_number_tuple, number);
// @dts-jest:pass:snap -> [string[], number]
R.mapAccumRight(string_number_to_string_number_tuple)(number)(string_array);
// @dts-jest:pass:snap -> [string[], number]
R.mapAccumRight(string_number_to_string_number_tuple, number, string_array);
