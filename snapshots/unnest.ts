import * as R_unnest from '../ramda/dist/src/unnest';

declare const number_array: number[];
declare const number_array_array: number[][];

// @dts-jest:pass -> number[]
R_unnest(number_array);
// @dts-jest:pass -> number[]
R_unnest(number_array_array);
