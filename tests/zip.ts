import * as R_zip from '../ramda/dist/src/zip';

declare const number_array: number[];
declare const string_array: string[];

// @dts-jest:pass
R_zip(number_array);
// @dts-jest:pass
R_zip(number_array)(string_array);
// @dts-jest:pass
R_zip(number_array, string_array);
