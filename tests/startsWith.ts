import * as R from '../ramda/dist/index';

declare const string: string;
declare const boolean_array: boolean[];

// @dts-jest:pass:snap
R.startsWith(string);
// @dts-jest:pass:snap
R.startsWith(string, string);
// @dts-jest:pass:snap
R.startsWith(boolean_array);
// @dts-jest:pass:snap
R.startsWith(boolean_array, boolean_array);
