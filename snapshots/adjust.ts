import { Morphism } from '../ramda/dist/src/$types';
import R_adjust = require('../ramda/dist/src/adjust');

declare const string_to_string: Morphism<string, string>;
declare const string_to_number: Morphism<string, number>;
declare const string_array: string[];
declare const number: number;

// @dts-jest:pass:snap -> (string | number)[]
R_adjust(string_to_number)(number, string_array);
// @dts-jest:pass:snap -> (string | number)[]
R_adjust(string_to_number, number)(string_array);
// @dts-jest:pass:snap -> (string | number)[]
R_adjust(string_to_number, number, string_array);
// @dts-jest:pass:snap -> string[]
R_adjust(string_to_string)(number, string_array);
// @dts-jest:pass:snap -> string[]
R_adjust(string_to_string, number)(string_array);
// @dts-jest:pass:snap -> string[]
R_adjust(string_to_string, number, string_array);
