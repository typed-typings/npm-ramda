import * as R from '../ramda/dist/index';

declare const boolean_array: boolean[];
declare const number: number;

// @dts-jest:pass:snap -> <T>(list: T[]) => T[]
R.remove(number, number);
// @dts-jest:pass:snap -> boolean[]
R.remove(number)(number)(boolean_array);
// @dts-jest:pass:snap -> boolean[]
R.remove(number, number, boolean_array);
