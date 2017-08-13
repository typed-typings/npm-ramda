import { List } from '../ramda/dist/src/$types';
import * as R_sort from '../ramda/dist/src/sort';

declare const string: string;
declare const string_string_to_number: (x: string, y: string) => number;

declare const object_list: List<object>;
declare const object_object_to_number: (x: object, y: object) => number;

// @dts-jest:pass -> (list: List<string>) => string[]
R_sort(string_string_to_number);
// @dts-jest:pass -> string[]
R_sort(string_string_to_number)(string);
// @dts-jest:pass -> string[]
R_sort(string_string_to_number, string);

// @dts-jest:pass -> (list: List<object>) => object[]
R_sort(object_object_to_number);
// @dts-jest:pass -> object[]
R_sort(object_object_to_number)(object_list);
// @dts-jest:pass -> object[]
R_sort(object_object_to_number, object_list);
