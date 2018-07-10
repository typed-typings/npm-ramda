import * as R from '../ramda/dist/index';

declare const object_array: object[];
declare const string_array: string[];
declare const number: number;

// @dts-jest:pass:snap -> <U>(list: R.List<U>) => (string | U)[]
R.insertAll(number, string_array);
// @dts-jest:pass:snap -> (string | object)[]
R.insertAll(number, string_array, object_array);
// @dts-jest:pass:snap -> (string | object)[]
R.insertAll(number)(string_array)(object_array);
// @dts-jest:pass:snap -> string[]
R.insertAll(number, string_array, string_array);
// @dts-jest:pass:snap -> string[]
R.insertAll(number)(string_array)(string_array);
