import * as R from '../ramda/dist/index';

declare const number: number;
declare const string_array: string[];

// @dts-jest:pass:snap
R.aperture(number)(string_array);
// @dts-jest:pass:snap
R.aperture(number, string_array);
