import { Predicate } from '../ramda/dist/src/$types';
import R_find = require('../ramda/dist/src/find');

declare const string_predicate: Predicate<string>;
declare const string_array: string[];

// @dts-jest:pass:snap
R_find(string_predicate);
// @dts-jest:pass:snap
R_find(string_predicate)(string_array);
// @dts-jest:pass:snap
R_find(string_predicate, string_array);
