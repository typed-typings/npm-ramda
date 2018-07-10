import * as R from '../ramda/dist/index';

declare const object: object;
declare const object_array: object[];
declare const string: string;
declare const number: number;

// @dts-jest:pass:snap -> <U>(list: R.List<U>) => (string | U)[]
R.insert(number, string);
// @dts-jest:pass:snap -> (string | object)[]
R.insert(number, string, object_array);
// @dts-jest:pass:snap -> (string | object)[]
R.insert(number)(string)(object_array);

// @dts-jest:pass:snap -> <U>(list: R.List<U>) => (object | U)[]
R.insert(number, object);
// @dts-jest:pass:snap -> object[]
R.insert(number, object, object_array);
// @dts-jest:pass:snap -> object[]
R.insert(number)(object)(object_array);
