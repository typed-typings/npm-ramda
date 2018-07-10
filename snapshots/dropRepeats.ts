import * as R from '../ramda/dist/index';

declare const string_array: string[];

// @dts-jest:pass:snap -> string[]
R.dropRepeats(string_array);
