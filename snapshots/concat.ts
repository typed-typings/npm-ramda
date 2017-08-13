import { List } from '../ramda/dist/src/$types';
import * as R_concat from '../ramda/dist/src/concat';

declare const string: string;
declare const object_array: object[];
declare const number_array: number[];
declare const number_list: List<number>;

// @dts-jest:pass -> string
R_concat(string, string);
// @dts-jest:pass -> number[]
R_concat(number_array, number_array);
// @dts-jest:pass -> (number | object)[]
R_concat(object_array, number_array);
// @dts-jest:fail -> Argument of type 'List<number>' is not assignable to parameter of type 'string | number[]'.
R_concat(number_list, number_list);
