import { Predicate } from '../ramda/dist/src/$types';
import R_findLastIndex = require('../ramda/dist/src/findLastIndex');

declare const string_predicate: Predicate<string>;
declare const string_array: string[];

// @dts-jest:pass:snap -> (list: string[] | ArrayLike<string>) => number
R_findLastIndex(string_predicate);
// @dts-jest:pass:snap -> number
R_findLastIndex(string_predicate)(string_array);
// @dts-jest:pass:snap -> number
R_findLastIndex(string_predicate, string_array);
