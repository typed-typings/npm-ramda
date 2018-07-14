import * as R from '../ramda/dist/index';

declare const string: string;
declare const string_to_number: (x: string) => number;

declare const object_list: R.List<object>;
declare const object_to_number: (x: object) => number;

// @dts-jest:pass:snap
R.sortBy(string_to_number);
// @dts-jest:pass:snap
R.sortBy(string_to_number)(string);
// @dts-jest:pass:snap
R.sortBy(string_to_number, string);

// @dts-jest:pass:snap
R.sortBy(object_to_number);
// @dts-jest:pass:snap
R.sortBy(object_to_number)(object_list);
// @dts-jest:pass:snap
R.sortBy(object_to_number, object_list);
