import * as R from '../ramda/dist/index';

declare const string: string;
declare const boolean_array: boolean[];

// @dts-jest:pass:snap -> (list: string) => boolean
R.startsWith(string);
// @dts-jest:pass:snap -> boolean
R.startsWith(string, string);
// @dts-jest:pass:snap -> (list: boolean[]) => boolean
R.startsWith(boolean_array);
// @dts-jest:pass:snap -> boolean
R.startsWith(boolean_array, boolean_array);
