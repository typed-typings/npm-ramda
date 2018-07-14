import * as R from '../ramda/dist/index';

declare const number_array: number[];
declare const string_array: string[];

// @dts-jest:pass:snap -> <U>(b: R.List<U>) => [number, U][]
R.zip(number_array);
// @dts-jest:pass:snap -> [number, string][]
R.zip(number_array)(string_array);
// @dts-jest:pass:snap -> [number, string][]
R.zip(number_array, string_array);
