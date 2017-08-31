import { Predicate } from '../ramda/dist/src/$types';
import R_findIndex = require('../ramda/dist/src/findIndex');

declare const string_predicate: Predicate<string>;
declare const string_array: string[];

// @dts-jest:pass:snap -> (list: string[] | ArrayLike<string>) => number
R_findIndex(string_predicate);
// @dts-jest:pass:snap -> number
R_findIndex(string_predicate)(string_array);
// @dts-jest:pass:snap -> number
R_findIndex(string_predicate, string_array);
