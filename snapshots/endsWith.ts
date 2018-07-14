import * as R from '../ramda/dist/index';

declare const string: string;
declare const boolean_array: boolean[];

// @dts-jest:pass:snap -> (list: string) => boolean
R.endsWith(string);
// @dts-jest:pass:snap -> boolean
R.endsWith(string, string);
// @dts-jest:pass:snap -> (list: boolean[]) => boolean
R.endsWith(boolean_array);
// @dts-jest:pass:snap -> boolean
R.endsWith(boolean_array, boolean_array);
