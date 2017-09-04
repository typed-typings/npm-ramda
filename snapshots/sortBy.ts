import { List } from '../ramda/dist/src/$types';
import R_sortBy = require('../ramda/dist/src/sortBy');

declare const string: string;
declare const string_to_number: (x: string) => number;

declare const object_list: List<object>;
declare const object_to_number: (x: object) => number;

// @dts-jest:pass:snap -> (list: List<string>) => string[]
R_sortBy(string_to_number);
// @dts-jest:pass:snap -> string[]
R_sortBy(string_to_number)(string);
// @dts-jest:pass:snap -> string[]
R_sortBy(string_to_number, string);

// @dts-jest:pass:snap -> (list: List<object>) => object[]
R_sortBy(object_to_number);
// @dts-jest:pass:snap -> object[]
R_sortBy(object_to_number)(object_list);
// @dts-jest:pass:snap -> object[]
R_sortBy(object_to_number, object_list);
