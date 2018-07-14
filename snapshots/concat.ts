import * as R from '../ramda/dist/index';

declare const string: string;
declare const object_array: object[];
declare const number_array: number[];
declare const number_list: R.List<number>;

// @dts-jest:pass:snap -> string
R.concat(string, string);
// @dts-jest:pass:snap -> number[]
R.concat(number_array, number_array);
// @dts-jest:pass:snap -> (number | object)[]
R.concat(object_array, number_array);
// @dts-jest:fail:snap -> Argument of type 'List<number>' is not assignable to parameter of type 'string | number[]'.
R.concat(number_list, number_list);
