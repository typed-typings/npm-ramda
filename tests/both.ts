import { Predicate } from '../ramda/dist/src/$types';
import R_both = require('../ramda/dist/src/both');

declare const string_predicate: Predicate<string>;

// @dts-jest:pass:snap
R_both(string_predicate);
// @dts-jest:pass:snap
R_both(string_predicate, string_predicate);
