import * as R from '../ramda/dist/index';

declare const number: number;
declare const string_list: R.List<string>;

// @dts-jest:pass:snap
R.clone(number);
// @dts-jest:pass:snap
R.clone(string_list);
