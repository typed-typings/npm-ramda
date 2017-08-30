import { Predicate } from '../ramda/dist/src/$types';
import * as R_allPass from '../ramda/dist/src/allPass';

declare const string_predicate: Predicate<string>;
declare const string_number_preficate: (x: string, y: number) => boolean;

// @dts-jest:pass:snap
R_allPass([string_predicate, string_predicate]);
// @dts-jest:pass:snap
R_allPass([string_predicate, string_number_preficate]);
