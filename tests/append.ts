import * as R_append from '../ramda/dist/src/append';

declare const string: string;
declare const number: number;
declare const number_array: number[];

// @dts-jest:pass
R_append(string)(number_array);
// @dts-jest:pass
R_append(string, number_array);
// @dts-jest:pass
R_append(number)(number_array);
// @dts-jest:pass
R_append(number, number_array);
