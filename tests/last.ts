import * as R_last from '../ramda/dist/src/last';

declare const string: string;
declare const string_array: string[];
declare const number_array: number[];

// @dts-jest:pass
R_last(string);
// @dts-jest:pass
R_last(string_array);
// @dts-jest:pass
R_last(number_array);
