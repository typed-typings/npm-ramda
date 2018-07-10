import * as R from '../ramda/dist/index';

declare const string_to_boolean: (x: string) => boolean;
declare const string_array: string[];

// @dts-jest:pass:snap
R.dropWhile(string_to_boolean);
// @dts-jest:pass:snap
R.dropWhile(string_to_boolean, string_array);
