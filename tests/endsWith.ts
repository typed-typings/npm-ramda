import * as R_endsWith from '../ramda/dist/src/endsWith';

declare const string: string;
declare const boolean_array: boolean[];

// @dts-jest:pass
R_endsWith(string);
// @dts-jest:pass
R_endsWith(string, string);
// @dts-jest:pass
R_endsWith(boolean_array);
// @dts-jest:pass
R_endsWith(boolean_array, boolean_array);
