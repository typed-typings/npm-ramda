import { Predicate } from '../ramda/dist/src/$types';
import R_anyPass = require('../ramda/dist/src/anyPass');

declare const string_predicate: Predicate<string>;
declare const string_number_preficate: (x: string, y: number) => boolean;

// @dts-jest:pass:snap
R_anyPass([string_predicate, string_predicate]);
// @dts-jest:pass:snap
R_anyPass([string_predicate, string_number_preficate]);
