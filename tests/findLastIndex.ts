import { Predicate } from '../ramda/dist/src/$types';
import * as R_findLastIndex from '../ramda/dist/src/findLastIndex';

declare const string_predicate: Predicate<string>;
declare const string_array: string[];

// @dts-jest:pass
R_findLastIndex(string_predicate);
// @dts-jest:pass
R_findLastIndex(string_predicate)(string_array);
// @dts-jest:pass
R_findLastIndex(string_predicate, string_array);
