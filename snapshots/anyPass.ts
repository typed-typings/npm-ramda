import { Predicate } from '../ramda/dist/src/$types';
import * as R_anyPass from '../ramda/dist/src/anyPass';

declare const string_predicate: Predicate<string>;
declare const string_number_preficate: (x: string, y: number) => boolean;

// @dts-jest:pass -> (value: string) => boolean
R_anyPass([string_predicate, string_predicate]);
// @dts-jest:pass -> (x: string, y: number) => boolean
R_anyPass([string_predicate, string_number_preficate]);
