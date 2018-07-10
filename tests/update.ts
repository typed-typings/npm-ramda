import * as R from '../ramda/dist/index';

declare const string_array: string[];
declare const boolean: boolean;
declare const string: string;
declare const number: number;

// @dts-jest:pass:snap
R.update(number, boolean);
// @dts-jest:pass:snap
R.update(number)(boolean)(string_array);
// @dts-jest:pass:snap
R.update(number, boolean, string_array);
// @dts-jest:pass:snap
R.update(number)(string)(string_array);
// @dts-jest:pass:snap
R.update(number, string, string_array);
