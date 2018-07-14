import * as R from '../ramda/dist/index';

declare const number: number;
declare const string: string;
declare const boolean_array: boolean[];

// @dts-jest:pass:snap -> string
R.dropLast(number, string);
// @dts-jest:pass:snap -> boolean[]
R.dropLast(number, boolean_array);
