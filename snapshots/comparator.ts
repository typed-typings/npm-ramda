import * as R from '../ramda/dist/index';

declare const string_string_to_boolean: (a: string, b: string) => boolean;

// @dts-jest:pass:snap -> (a: string, b: string) => number
R.comparator(string_string_to_boolean);
