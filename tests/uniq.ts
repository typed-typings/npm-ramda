import * as R from '../ramda/dist/index';

declare const number_array: number[];
declare const string_array: string[];

// @dts-jest:pass:snap
R.uniq(number_array);
// @dts-jest:pass:snap
R.uniq(string_array);
