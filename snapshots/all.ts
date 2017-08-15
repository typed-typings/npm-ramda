import { Predicate } from '../ramda/dist/src/$types';
import * as R_all from '../ramda/dist/src/all';

declare const string_predicate: Predicate<string>;
declare const string_array: string[];

// @dts-jest:pass -> boolean
R_all(string_predicate)(string_array);
// @dts-jest:pass -> boolean
R_all(string_predicate, string_array);
