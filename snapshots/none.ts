import * as R from '../ramda/dist/index';

declare const string_predicate: R.Predicate<string>;
declare const string_array: string[];

// @dts-jest:pass:snap -> boolean
R.none(string_predicate)(string_array);
// @dts-jest:pass:snap -> boolean
R.none(string_predicate, string_array);
