import * as R from '../ramda/dist/index';

declare const string_string_to_boolean: (a: string, b: string) => boolean;

// @dts-jest:pass:snap
R.comparator(string_string_to_boolean);
