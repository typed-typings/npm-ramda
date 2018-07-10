import * as R from '../ramda/dist/index';

declare const number: number;
declare const string_list: R.List<string>;

// @dts-jest:pass:snap -> number
R.clone(number);
// @dts-jest:pass:snap -> string[] | ArrayLike<string>
R.clone(string_list);
