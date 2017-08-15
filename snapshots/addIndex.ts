import { ListMapper, Morphism, ObjectMapper } from '../ramda/dist/src/$types';
import * as R_addIndex from '../ramda/dist/src/addIndex';

declare const string_to_number_list_mapper: ListMapper<string, number>;
declare const string_to_number_object_mapper: ObjectMapper<
  string,
  number,
  string
>;

declare const string_to_number: Morphism<string, number>;
declare const string_array: string[];
declare const string_object: Record<string, string>;

// @dts-jest:pass -> CurriedFunction2<(v1: string, index: number, target: string[] | ArrayLike<string>) => number, string[] | ArrayLike<string>, number[]>
R_addIndex(string_to_number_list_mapper);
// @dts-jest:pass -> CurriedFunction1<string[] | ArrayLike<string>, number[]>
R_addIndex(string_to_number_list_mapper)(string_to_number);
// @dts-jest:pass -> number[]
R_addIndex(string_to_number_list_mapper)(string_to_number, string_array);

// @dts-jest:pass -> CurriedFunction2<(v1: string, index: number, target: Record<string, string>) => number, Record<string, string>, Record<string, number>>
R_addIndex(string_to_number_object_mapper);
// @dts-jest:pass -> CurriedFunction1<Record<string, string>, Record<string, number>>
R_addIndex(string_to_number_object_mapper)(string_to_number);
// @dts-jest:pass -> Record<string, number>
R_addIndex(string_to_number_object_mapper)(string_to_number, string_object);
