import { Dictionary, Filterable, Predicate } from '../ramda/dist/src/$types';
import R_filter = require('../ramda/dist/src/filter');

declare const string_predicate: Predicate<string>;
declare const string_array: string[];
declare const string_dictionary: Dictionary<string>;
declare const string_filterable: Filterable<string>;

// @dts-jest:pass:snap
R_filter(string_predicate, string_array);
// @dts-jest:pass:snap
R_filter(string_predicate)(string_array);

// @dts-jest:pass:snap
R_filter(string_predicate, string_dictionary);
// @dts-jest:pass:snap
R_filter(string_predicate)(string_dictionary);

// @dts-jest:pass:snap
R_filter(string_predicate, string_filterable);
// @dts-jest:pass:snap
R_filter(string_predicate)(string_filterable);
