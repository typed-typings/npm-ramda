import { Predicate } from '../ramda/dist/src/$types';
import R_all = require('../ramda/dist/src/all');

declare const string_predicate: Predicate<string>;
declare const string_array: string[];

// @dts-jest:pass:snap
R_all(string_predicate)(string_array);
// @dts-jest:pass:snap
R_all(string_predicate, string_array);
