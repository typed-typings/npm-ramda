import { Predicate } from '../ramda/dist/src/$types';
import * as R_both from '../ramda/dist/src/both';

declare const string_predicate: Predicate<string>;

// @dts-jest:pass -> (fn2: (value: string) => boolean) => (value: string) => boolean
R_both(string_predicate);
// @dts-jest:pass -> (value: string) => boolean
R_both(string_predicate, string_predicate);
