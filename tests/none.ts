import { Predicate } from '../ramda/dist/src/$types';
import R_none = require('../ramda/dist/src/none');

declare const string_predicate: Predicate<string>;
declare const string_array: string[];

// @dts-jest:pass:snap
R_none(string_predicate)(string_array);
// @dts-jest:pass:snap
R_none(string_predicate, string_array);
