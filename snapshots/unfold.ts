import R_unfold = require('../ramda/dist/src/unfold');

declare const string_to_object_string_tuple_or_false: (
  x: string,
) => [object, string] | false;
declare const string: string;

// @dts-jest:pass:snap -> (initial: string) => object[]
R_unfold(string_to_object_string_tuple_or_false);
// @dts-jest:pass:snap -> object[]
R_unfold(string_to_object_string_tuple_or_false)(string);
// @dts-jest:pass:snap -> object[]
R_unfold(string_to_object_string_tuple_or_false, string);
