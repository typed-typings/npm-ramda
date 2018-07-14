import * as R from '../ramda/dist/index';

declare const string_to_number: R.Morphism<string, number>;
declare const string_array: string[];
declare const string_object: Record<string, string>;
declare const string_functor: R.Functor<string>;

// @dts-jest:pass:snap
R.map(string_to_number, string_array);
// @dts-jest:pass:snap
R.map(string_to_number)(string_array);

// @dts-jest:pass:snap
R.map(string_to_number, string_object);
// @dts-jest:pass:snap
R.map(string_to_number)(string_object);

// @dts-jest:pass:snap
R.map(string_to_number, string_functor);
// @dts-jest:pass:snap
R.map(string_to_number)(string_functor);
