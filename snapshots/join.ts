import * as R from '../ramda/dist/index';

declare const string: string;
declare const number_array: string[];

// @dts-jest:pass:snap -> (list: any[]) => string
R.join(string);
// @dts-jest:pass:snap -> string
R.join(string)(number_array);
// @dts-jest:pass:snap -> string
R.join(string, number_array);
