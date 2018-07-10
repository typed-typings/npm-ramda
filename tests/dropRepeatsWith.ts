import * as R from '../ramda/dist/index';

declare const string_to_number: (x: string) => number;
declare const string_array: string[];

// @dts-jest:pass:snap
R.dropRepeatsWith(string_to_number);
// @dts-jest:pass:snap
R.dropRepeatsWith(string_to_number)(string_array);
// @dts-jest:pass:snap
R.dropRepeatsWith(string_to_number, string_array);
