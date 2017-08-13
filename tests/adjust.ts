import { Morphism } from '../ramda/dist/src/$types';
import * as R_adjust from '../ramda/dist/src/adjust';

declare const string_to_string: Morphism<string, string>;
declare const string_to_number: Morphism<string, number>;
declare const string_array: string[];
declare const number: number;

// @dts-jest:pass
R_adjust(string_to_number)(number, string_array);
// @dts-jest:pass
R_adjust(string_to_number, number)(string_array);
// @dts-jest:pass
R_adjust(string_to_number, number, string_array);
// @dts-jest:pass
R_adjust(string_to_string)(number, string_array);
// @dts-jest:pass
R_adjust(string_to_string, number)(string_array);
// @dts-jest:pass
R_adjust(string_to_string, number, string_array);
