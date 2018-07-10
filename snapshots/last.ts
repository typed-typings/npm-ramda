import * as R from '../ramda/dist/index';

declare const string: string;
declare const string_array: string[];
declare const number_array: number[];

// @dts-jest:pass:snap -> string
R.last(string);
// @dts-jest:pass:snap -> string | undefined
R.last(string_array);
// @dts-jest:pass:snap -> number | undefined
R.last(number_array);
