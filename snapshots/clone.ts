import * as R from '../ramda/dist/index';

declare const number: number;
declare const string_list: R.List<string>;

// @dts-jest:pass:snap -> number
R.clone(number);
// @dts-jest:pass:snap -> R.List<string>
R.clone(string_list);
