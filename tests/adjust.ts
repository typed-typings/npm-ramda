import { Morphism } from '../ramda/dist/src/$types';
import R_adjust = require('../ramda/dist/src/adjust');

declare const string_to_string: Morphism<string, string>;
declare const string_to_number: Morphism<string, number>;
declare const string_array: string[];
declare const string_number_tuple: [string, number];
declare const number: number;

// @dts-jest:pass:snap
R_adjust(string_to_number)(number, string_array);
// @dts-jest:pass:snap
R_adjust(string_to_number, number)(string_array);
// @dts-jest:pass:snap
R_adjust(string_to_number, number, string_array);
// @dts-jest:pass:snap
R_adjust(string_to_string)(number, string_array);
// @dts-jest:pass:snap
R_adjust(string_to_string, number)(string_array);
// @dts-jest:pass:snap
R_adjust(string_to_string, number, string_array);

// @dts-jest:pass:snap
R_adjust<'111', 'tuple'>()(string_to_string, 0, string_number_tuple);
// @dts-jest:fail:snap
R_adjust<'111', 'tuple'>()(string_to_string, 1, string_number_tuple);
