import * as R from '../ramda/dist/index';

declare const string_to_object_string_tuple_or_false: (
  x: string,
) => [object, string] | false;
declare const string: string;

// @dts-jest:pass:snap
R.unfold(string_to_object_string_tuple_or_false);
// @dts-jest:pass:snap
R.unfold(string_to_object_string_tuple_or_false)(string);
// @dts-jest:pass:snap
R.unfold(string_to_object_string_tuple_or_false, string);
