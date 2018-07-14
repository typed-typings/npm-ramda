import * as R from '../ramda/dist/index';

declare const boolean_array: boolean[];
declare const number: number;

// @dts-jest:pass:snap
R.remove(number, number);
// @dts-jest:pass:snap
R.remove(number)(number)(boolean_array);
// @dts-jest:pass:snap
R.remove(number, number, boolean_array);
