import { Functor, Morphism } from '../ramda/dist/src/$types';
import * as R_map from '../ramda/dist/src/map';

declare const string_to_number: Morphism<string, number>;
declare const string_array: string[];
declare const string_object: Record<string, string>;
declare const string_functor: Functor<string>;

// @dts-jest:pass:snap
R_map(string_to_number, string_array);
// @dts-jest:pass:snap
R_map(string_to_number)(string_array);

// @dts-jest:pass:snap
R_map(string_to_number, string_object);
// @dts-jest:pass:snap
R_map(string_to_number)(string_object);

// @dts-jest:pass:snap
R_map(string_to_number, string_functor);
// @dts-jest:pass:snap
R_map(string_to_number)(string_functor);
