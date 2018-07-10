import * as R from '../ramda/dist/index';

declare const string: string;
declare const object_array: object[];
declare const number_array: number[];
declare const number_list: R.List<number>;

// @dts-jest:pass:snap
R.concat(string, string);
// @dts-jest:pass:snap
R.concat(number_array, number_array);
// @dts-jest:pass:snap
R.concat(object_array, number_array);
// @dts-jest:fail:snap
R.concat(number_list, number_list);
