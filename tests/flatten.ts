import * as R from '../ramda/dist/index';

declare const string_array: string[];
declare const nested_object_list: R.NestedList<object>;

// @dts-jest:pass:snap
R.flatten(string_array);
// @dts-jest:pass:snap
R.flatten(nested_object_list);
