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

// @dts-jest:pass:snap -> R.CurriedFunction2<(v1: string, index: number, target: R.List<string>) => number, R.List<string>, number[]>
R.addIndex(string_to_number_list_mapper);
// @dts-jest:pass:snap -> R.CurriedFunction1<R.List<string>, number[]>
R.addIndex(string_to_number_list_mapper)(string_to_number);
// @dts-jest:pass:snap -> number[]
R.addIndex(string_to_number_list_mapper)(string_to_number, string_array);

// @dts-jest:pass:snap -> R.CurriedFunction2<(v1: string, index: number, target: Record<string, string>) => number, Record<string, string>, Record<string, number>>
R.addIndex(string_to_number_object_mapper);
// @dts-jest:pass:snap -> R.CurriedFunction1<Record<string, string>, Record<string, number>>
R.addIndex(string_to_number_object_mapper)(string_to_number);
// @dts-jest:pass:snap -> Record<string, number>
R.addIndex(string_to_number_object_mapper)(string_to_number, string_object);
