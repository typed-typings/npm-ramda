import { Predicate } from '../ramda/dist/src/$types';
import * as R_both from '../ramda/dist/src/both';

declare const string_predicate: Predicate<string>;

// @dts-jest:pass
R_both(string_predicate);
// @dts-jest:pass
R_both(string_predicate, string_predicate);
