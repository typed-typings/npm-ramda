import * as R from '../ramda/dist/index';

declare const string_to_boolean: (x: string) => boolean;
declare const string_array: string[];
declare const string: string;

// @dts-jest:pass:snap -> <U extends R.List<string>>(list: U) => U[]
R.groupWith(string_to_boolean);
// @dts-jest:pass:snap -> string[]
R.groupWith(string_to_boolean, string);
// @dts-jest:pass:snap -> string[][]
R.groupWith(string_to_boolean, string_array);
