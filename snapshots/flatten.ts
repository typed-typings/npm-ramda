import { NestedList } from '../ramda/dist/src/$types';
import * as R_flatten from '../ramda/dist/src/flatten';

declare const string_array: string[];
declare const nested_object_list: NestedList<object>;

// @dts-jest:pass -> string[]
R_flatten(string_array);
// @dts-jest:pass -> object[]
R_flatten(nested_object_list);
