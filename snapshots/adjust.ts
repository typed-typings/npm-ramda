import * as R from '../ramda/dist/index';

declare const string_to_string: R.Morphism<string, string>;
declare const string_to_number: R.Morphism<string, number>;
declare const string_array: string[];
declare const string_number_tuple: [string, number];
declare const number: number;

// @dts-jest:pass:snap -> (string | number)[]
R.adjust(string_to_number)(number, string_array);
// @dts-jest:pass:snap -> (string | number)[]
R.adjust(string_to_number, number)(string_array);
// @dts-jest:pass:snap -> (string | number)[]
R.adjust(string_to_number, number, string_array);
// @dts-jest:pass:snap -> string[]
R.adjust(string_to_string)(number, string_array);
// @dts-jest:pass:snap -> string[]
R.adjust(string_to_string, number)(string_array);
// @dts-jest:pass:snap -> string[]
R.adjust(string_to_string, number, string_array);

// @dts-jest:pass:snap -> [string, number]
R.adjust<'111', 'tuple'>()(string_to_string, 0, string_number_tuple);
// @dts-jest:fail:snap -> Argument of type 'Morphism<string, string>' is not assignable to parameter of type 'Morphism<number, number>'.
R.adjust<'111', 'tuple'>()(string_to_string, 1, string_number_tuple);
