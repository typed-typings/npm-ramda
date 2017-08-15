import { Predicate } from '../ramda/dist/src/$types';
import * as R_either from '../ramda/dist/src/either';

declare const string_predicate: Predicate<string>;

// @dts-jest:pass -> (fn2: (value: string) => boolean) => (value: string) => boolean
R_either(string_predicate);
// @dts-jest:pass -> (value: string) => boolean
R_either(string_predicate, string_predicate);
