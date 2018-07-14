import * as R from '../ramda/dist/index';

declare const string_to_boolean: (x: string) => boolean;
declare const string_to_number: (x: string) => number;
declare const string_to_object: (x: string) => object;

// @dts-jest:pass:snap
R.ifElse(string_to_boolean, string_to_number);
// @dts-jest:pass:snap
R.ifElse(string_to_boolean, string_to_number, string_to_object);
// @dts-jest:pass:snap
R.ifElse(string_to_boolean)(string_to_number)(string_to_object);
