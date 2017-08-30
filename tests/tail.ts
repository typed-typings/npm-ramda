import * as R_tail from '../ramda/dist/src/tail';

declare const string: string;
declare const string_array: string[];

// @dts-jest:pass:snap
R_tail(string);
// @dts-jest:pass:snap
R_tail(string_array);
