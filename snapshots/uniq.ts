import * as R_uniq from '../ramda/dist/src/uniq';

declare const number_array: number[];
declare const string_array: string[];

// @dts-jest:pass -> number[]
R_uniq(number_array);
// @dts-jest:pass -> string[]
R_uniq(string_array);
