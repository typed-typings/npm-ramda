import * as R_startsWith from '../ramda/dist/src/startsWith';

declare const string: string;
declare const boolean_array: boolean[];

// @dts-jest:pass
R_startsWith(string);
// @dts-jest:pass
R_startsWith(string, string);
// @dts-jest:pass
R_startsWith(boolean_array);
// @dts-jest:pass
R_startsWith(boolean_array, boolean_array);
