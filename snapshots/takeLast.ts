import * as R from '../ramda/dist/index';

declare const number: number;
declare const string: string;
declare const boolean_array: boolean[];

// @dts-jest:pass:snap -> string
R.takeLast(number, string);
// @dts-jest:pass:snap -> boolean[]
R.takeLast(number, boolean_array);
