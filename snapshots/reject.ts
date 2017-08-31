import { Dictionary, Filterable, Predicate } from '../ramda/dist/src/$types';
import R_reject = require('../ramda/dist/src/reject');

declare const string_predicate: Predicate<string>;
declare const string_array: string[];
declare const string_dictionary: Dictionary<string>;
declare const string_filterable: Filterable<string>;

// @dts-jest:pass:snap -> string[]
R_reject(string_predicate, string_array);
// @dts-jest:pass:snap -> string[]
R_reject(string_predicate)(string_array);

// @dts-jest:pass:snap -> Partial<Dictionary<string>>
R_reject(string_predicate, string_dictionary);
// @dts-jest:pass:snap -> Partial<Dictionary<string>>
R_reject(string_predicate)(string_dictionary);

// @dts-jest:pass:snap -> Filterable<string>
R_reject(string_predicate, string_filterable);
// @dts-jest:pass:snap -> Filterable<string>
R_reject(string_predicate)(string_filterable);
