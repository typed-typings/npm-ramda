import { Predicate } from '../ramda/dist/src/$types';
import * as R_none from '../ramda/dist/src/none';

declare const string_predicate: Predicate<string>;
declare const string_array: string[];

// @dts-jest:pass -> boolean
R_none(string_predicate)(string_array);
// @dts-jest:pass -> boolean
R_none(string_predicate, string_array);
