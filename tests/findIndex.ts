import { Predicate } from '../ramda/dist/src/$types';
import * as R_findIndex from '../ramda/dist/src/findIndex';

declare const string_predicate: Predicate<string>;
declare const string_array: string[];

// @dts-jest:pass:snap
R_findIndex(string_predicate);
// @dts-jest:pass:snap
R_findIndex(string_predicate)(string_array);
// @dts-jest:pass:snap
R_findIndex(string_predicate, string_array);
