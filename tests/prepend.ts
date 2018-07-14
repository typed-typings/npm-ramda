import * as R from '../ramda/dist/index';

declare const string: string;
declare const number: number;
declare const number_array: number[];

// @dts-jest:pass:snap
R.prepend(string)(number_array);
// @dts-jest:pass:snap
R.prepend(string, number_array);
// @dts-jest:pass:snap
R.prepend(number)(number_array);
// @dts-jest:pass:snap
R.prepend(number, number_array);
