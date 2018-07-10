import * as R from '../ramda/dist/index';

declare const string: string;
declare const number_array: string[];

// @dts-jest:pass:snap
R.join(string);
// @dts-jest:pass:snap
R.join(string)(number_array);
// @dts-jest:pass:snap
R.join(string, number_array);
