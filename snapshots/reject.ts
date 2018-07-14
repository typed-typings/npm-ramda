import * as R from '../ramda/dist/index';

declare const string_predicate: R.Predicate<string>;
declare const string_array: string[];
declare const string_dictionary: R.Dictionary<string>;
declare const string_filterable: R.Filterable<string>;

// @dts-jest:pass:snap -> string[]
R.reject(string_predicate, string_array);
// @dts-jest:pass:snap -> string[]
R.reject(string_predicate)(string_array);

// @dts-jest:pass:snap -> Partial<R.Dictionary<string>>
R.reject(string_predicate, string_dictionary);
// @dts-jest:pass:snap -> Partial<R.Dictionary<string>>
R.reject(string_predicate)(string_dictionary);

// @dts-jest:pass:snap -> R.Filterable<string>
R.reject(string_predicate, string_filterable);
// @dts-jest:pass:snap -> R.Filterable<string>
R.reject(string_predicate)(string_filterable);
