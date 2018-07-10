import * as R from '../ramda/dist/index';

declare const string_predicate: R.Predicate<string>;
declare const string_number_preficate: (x: string, y: number) => boolean;

// @dts-jest:pass:snap -> (value: string) => boolean
R.allPass([string_predicate, string_predicate]);
// @dts-jest:pass:snap -> (x: string, y: number) => boolean
R.allPass([string_predicate, string_number_preficate]);
