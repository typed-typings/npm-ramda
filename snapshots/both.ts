import { Predicate } from '../ramda/dist/src/$types';
import R_both = require('../ramda/dist/src/both');

declare const string_predicate: Predicate<string>;

// @dts-jest:pass:snap -> (fn2: (value: string) => boolean) => (value: string) => boolean
R_both(string_predicate);
// @dts-jest:pass:snap -> (value: string) => boolean
R_both(string_predicate, string_predicate);
