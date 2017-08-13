import * as R_startsWith from '../ramda/dist/src/startsWith';

declare const string: string;
declare const boolean_array: boolean[];

// @dts-jest:pass -> (list: string) => boolean
R_startsWith(string);
// @dts-jest:pass -> boolean
R_startsWith(string, string);
// @dts-jest:pass -> (list: boolean[]) => boolean
R_startsWith(boolean_array);
// @dts-jest:pass -> boolean
R_startsWith(boolean_array, boolean_array);
