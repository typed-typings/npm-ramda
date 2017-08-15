import { Predicate } from '../ramda/dist/src/$types';
import * as R_findLast from '../ramda/dist/src/findLast';

declare const string_predicate: Predicate<string>;
declare const string_array: string[];

// @dts-jest:pass
R_findLast(string_predicate);
// @dts-jest:pass
R_findLast(string_predicate)(string_array);
// @dts-jest:pass
R_findLast(string_predicate, string_array);
