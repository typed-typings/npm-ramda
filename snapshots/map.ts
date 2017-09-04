import { Functor, Morphism } from '../ramda/dist/src/$types';
import R_map = require('../ramda/dist/src/map');

declare const string_to_number: Morphism<string, number>;
declare const string_array: string[];
declare const string_object: Record<string, string>;
declare const string_functor: Functor<string>;

// @dts-jest:pass:snap -> number[]
R_map(string_to_number, string_array);
// @dts-jest:pass:snap -> number[]
R_map(string_to_number)(string_array);

// @dts-jest:pass:snap -> Record<string, number>
R_map(string_to_number, string_object);
// @dts-jest:pass:snap -> Record<string, number>
R_map(string_to_number)(string_object);

// @dts-jest:pass:snap -> Functor<number>
R_map(string_to_number, string_functor);
// @dts-jest:pass:snap -> Functor<number>
R_map(string_to_number)(string_functor);
