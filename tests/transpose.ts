import { List } from '../ramda/dist/src/$types';
import * as R_transpose from '../ramda/dist/src/transpose';

declare const number_array_array: number[][];
declare const number_list_list: List<List<number>>;
declare const boolean_array_array: boolean[][];

// @dts-jest:pass
R_transpose(number_list_list);
// @dts-jest:pass
R_transpose(number_array_array);
// @dts-jest:pass
R_transpose(boolean_array_array);
