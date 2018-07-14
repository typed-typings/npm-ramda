import * as R from '../ramda/dist/index';

declare const string_predicate: R.Predicate<string>;

// @dts-jest:pass:snap
R.either(string_predicate);
// @dts-jest:pass:snap
R.either(string_predicate, string_predicate);
