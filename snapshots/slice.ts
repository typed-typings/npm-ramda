import * as R from '../ramda/dist/index';

declare const number: number;
declare const string: string;
declare const object_list: R.List<object>;

// @dts-jest:pass:snap -> string
R.slice(number)(number)(string);
// @dts-jest:pass:snap -> string
R.slice(number, number, string);

// @dts-jest:pass:snap -> object[]
R.slice(number)(number)(object_list);
// @dts-jest:pass:snap -> object[]
R.slice(number, number, object_list);
