import { Predicate } from '../ramda/dist/src/$types';
import R_either = require('../ramda/dist/src/either');

declare const string_predicate: Predicate<string>;

// @dts-jest:pass:snap -> (fn2: (value: string) => boolean) => (value: string) => boolean
R_either(string_predicate);
// @dts-jest:pass:snap -> (value: string) => boolean
R_either(string_predicate, string_predicate);
