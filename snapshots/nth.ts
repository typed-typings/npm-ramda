import * as R from '../ramda/dist/index';

declare const number: number;
declare const string: string;
declare const object_array: object[];

// @dts-jest:pass:snap -> string
R.nth(number)(string);
// @dts-jest:pass:snap -> string
R.nth(number, string);

// @dts-jest:pass:snap -> object | undefined
R.nth(number)(object_array);
// @dts-jest:pass:snap -> object | undefined
R.nth(number, object_array);
