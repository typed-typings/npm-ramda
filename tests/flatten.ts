import { NestedList } from '../ramda/dist/src/$types';
import R_flatten = require('../ramda/dist/src/flatten');

declare const string_array: string[];
declare const nested_object_list: NestedList<object>;

// @dts-jest:pass:snap
R_flatten(string_array);
// @dts-jest:pass:snap
R_flatten(nested_object_list);
