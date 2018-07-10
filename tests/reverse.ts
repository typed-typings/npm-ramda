import * as R from '../ramda/dist/index';

declare const string: string;
declare const number_list: R.List<number>;

// @dts-jest:pass:snap
R.reverse(string);
// @dts-jest:pass:snap
R.reverse(number_list);
