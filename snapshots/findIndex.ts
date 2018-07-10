import * as R from '../ramda/dist/index';

declare const string_predicate: R.Predicate<string>;
declare const string_array: string[];

// @dts-jest:pass:snap -> (list: string[] | ArrayLike<string>) => number
R.findIndex(string_predicate);
// @dts-jest:pass:snap -> number
R.findIndex(string_predicate)(string_array);
// @dts-jest:pass:snap -> number
R.findIndex(string_predicate, string_array);
