import * as R_indexOf from '../ramda/dist/src/indexOf';

declare const string: string;
declare const string_array: string[];

// @dts-jest:pass
R_indexOf(string);
// @dts-jest:pass
R_indexOf(string, string);
// @dts-jest:pass
R_indexOf(string, string_array);
