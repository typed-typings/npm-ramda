import { List } from '../ramda/dist/src/$types';
import R_sort = require('../ramda/dist/src/sort');

declare const string: string;
declare const string_string_to_number: (x: string, y: string) => number;

declare const object_list: List<object>;
declare const object_object_to_number: (x: object, y: object) => number;

// @dts-jest:pass:snap -> (list: List<string>) => string[]
R_sort(string_string_to_number);
// @dts-jest:pass:snap -> string[]
R_sort(string_string_to_number)(string);
// @dts-jest:pass:snap -> string[]
R_sort(string_string_to_number, string);

// @dts-jest:pass:snap -> (list: List<object>) => object[]
R_sort(object_object_to_number);
// @dts-jest:pass:snap -> object[]
R_sort(object_object_to_number)(object_list);
// @dts-jest:pass:snap -> object[]
R_sort(object_object_to_number, object_list);
