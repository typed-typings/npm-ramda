import { Predicate } from '../ramda/dist/src/$types';
import R_findLast = require('../ramda/dist/src/findLast');

declare const string_predicate: Predicate<string>;
declare const string_array: string[];

// @dts-jest:pass:snap
R_findLast(string_predicate);
// @dts-jest:pass:snap
R_findLast(string_predicate)(string_array);
// @dts-jest:pass:snap
R_findLast(string_predicate, string_array);
