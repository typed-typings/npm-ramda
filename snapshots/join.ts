import * as R_join from '../ramda/dist/src/join';

declare const string: string;
declare const number_array: string[];

// @dts-jest:pass -> (list: any[]) => string
R_join(string);
// @dts-jest:pass -> string
R_join(string)(number_array);
// @dts-jest:pass -> string
R_join(string, number_array);
