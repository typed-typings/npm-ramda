import * as R from '../ramda/dist/index';

declare const number_array_array: number[][];
declare const number_list_list: R.List<R.List<number>>;
declare const boolean_array_array: boolean[][];

// @dts-jest:pass:snap
R.transpose(number_list_list);
// @dts-jest:pass:snap
R.transpose(number_array_array);
// @dts-jest:pass:snap
R.transpose(boolean_array_array);
