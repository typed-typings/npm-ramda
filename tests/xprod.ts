import * as R_xprod from '../ramda/dist/src/xprod';

declare const number_array: number[];
declare const string_array: string[];

// @dts-jest:pass:snap
R_xprod(number_array);
// @dts-jest:pass:snap
R_xprod(number_array)(string_array);
// @dts-jest:pass:snap
R_xprod(number_array, string_array);
