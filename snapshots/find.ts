import { Predicate } from '../ramda/dist/src/$types';
import R_find = require('../ramda/dist/src/find');

declare const string_predicate: Predicate<string>;
declare const string_array: string[];

// @dts-jest:pass:snap -> (list: string[] | ArrayLike<string>) => string | undefined
R_find(string_predicate);
// @dts-jest:pass:snap -> string | undefined
R_find(string_predicate)(string_array);
// @dts-jest:pass:snap -> string | undefined
R_find(string_predicate, string_array);
