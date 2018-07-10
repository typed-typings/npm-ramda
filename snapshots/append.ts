import * as R from '../ramda/dist/index';

declare const string: string;
declare const number: number;
declare const number_array: number[];

// @dts-jest:pass:snap -> (string | number)[]
R.append(string)(number_array);
// @dts-jest:pass:snap -> (string | number)[]
R.append(string, number_array);
// @dts-jest:pass:snap -> number[]
R.append(number)(number_array);
// @dts-jest:pass:snap -> number[]
R.append(number, number_array);
