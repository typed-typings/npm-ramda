import * as R from '../ramda/dist/index';

declare const string_to_number_list_mapper: R.ListMapper<string, number>;
declare const string_to_number_object_mapper: R.ObjectMapper<
  string,
  number,
  string
>;

declare const string_to_number: R.Morphism<string, number>;
declare const string_array: string[];
declare const string_object: Record<string, string>;

// @dts-jest:pass:snap
R.addIndex(string_to_number_list_mapper);
// @dts-jest:pass:snap
R.addIndex(string_to_number_list_mapper)(string_to_number);
// @dts-jest:pass:snap
R.addIndex(string_to_number_list_mapper)(string_to_number, string_array);

// @dts-jest:pass:snap
R.addIndex(string_to_number_object_mapper);
// @dts-jest:pass:snap
R.addIndex(string_to_number_object_mapper)(string_to_number);
// @dts-jest:pass:snap
R.addIndex(string_to_number_object_mapper)(string_to_number, string_object);
