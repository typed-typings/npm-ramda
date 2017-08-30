import { Predicate } from '../ramda/dist/src/$types';
import * as R_any from '../ramda/dist/src/any';

declare const string_predicate: Predicate<string>;
declare const string_array: string[];

// @dts-jest:pass:snap
R_any(string_predicate)(string_array);
// @dts-jest:pass:snap
R_any(string_predicate, string_array);
