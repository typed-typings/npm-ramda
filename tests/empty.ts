import * as R from '../ramda/dist/index';

declare const object: object;
declare const string: string;
declare const string_array: string[];

// @dts-jest:pass:snap
R.empty(object);
// @dts-jest:pass:snap
R.empty(string);
// @dts-jest:pass:snap
R.empty(string_array);
