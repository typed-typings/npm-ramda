import * as R_prepend from '../ramda/dist/src/prepend';

declare const string: string;
declare const number: number;
declare const number_array: number[];

// @dts-jest:pass -> (string | number)[]
R_prepend(string)(number_array);
// @dts-jest:pass -> (string | number)[]
R_prepend(string, number_array);
// @dts-jest:pass -> number[]
R_prepend(number)(number_array);
// @dts-jest:pass -> number[]
R_prepend(number, number_array);
