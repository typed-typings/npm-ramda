import * as R from '../ramda/dist/index';

declare const string: string;
declare const string_string_to_number: (x: string, y: string) => number;

declare const object_list: R.List<object>;
declare const object_object_to_number: (x: object, y: object) => number;

// @dts-jest:pass:snap -> (list: string[] | ArrayLike<string>) => string[]
R.sort(string_string_to_number);
// @dts-jest:pass:snap -> string[]
R.sort(string_string_to_number)(string);
// @dts-jest:pass:snap -> string[]
R.sort(string_string_to_number, string);

// @dts-jest:pass:snap -> (list: object[] | ArrayLike<object>) => object[]
R.sort(object_object_to_number);
// @dts-jest:pass:snap -> object[]
R.sort(object_object_to_number)(object_list);
// @dts-jest:pass:snap -> object[]
R.sort(object_object_to_number, object_list);
