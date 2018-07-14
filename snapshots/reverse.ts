import * as R from '../ramda/dist/index';

declare const string: string;
declare const number_list: R.List<number>;

// @dts-jest:pass:snap -> string
R.reverse(string);
// @dts-jest:pass:snap -> number[]
R.reverse(number_list);
