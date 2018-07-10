import * as R from '../ramda/dist/index';

declare const number_number_to_boolean: (x: number, y: number) => boolean;
declare const number_array: number[];
declare const string_string_to_boolean: (x: string, y: string) => boolean;
declare const string_array: string[];

// @dts-jest:pass:snap -> (list: number[] | ArrayLike<number>) => number[]
R.uniqWith(number_number_to_boolean);
// @dts-jest:pass:snap -> number[]
R.uniqWith(number_number_to_boolean)(number_array);
// @dts-jest:pass:snap -> number[]
R.uniqWith(number_number_to_boolean, number_array);

// @dts-jest:pass:snap -> (list: string[] | ArrayLike<string>) => string[]
R.uniqWith(string_string_to_boolean);
// @dts-jest:pass:snap -> string[]
R.uniqWith(string_string_to_boolean)(string_array);
// @dts-jest:pass:snap -> string[]
R.uniqWith(string_string_to_boolean, string_array);
