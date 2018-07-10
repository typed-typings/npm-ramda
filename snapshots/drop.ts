import * as R from '../ramda/dist/index';

declare const number: number;
declare const string: string;
declare const boolean_array: boolean[];

// @dts-jest:pass:snap -> string
R.drop(number, string);
// @dts-jest:pass:snap -> boolean[]
R.drop(number, boolean_array);
