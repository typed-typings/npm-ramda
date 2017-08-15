import * as R_insertAll from '../ramda/dist/src/insertAll';

declare const object_array: object[];
declare const string_array: string[];
declare const number: number;

// @dts-jest:pass
R_insertAll(number, string_array);
// @dts-jest:pass
R_insertAll(number, string_array, object_array);
// @dts-jest:pass
R_insertAll(number)(string_array)(object_array);
// @dts-jest:pass
R_insertAll(number, string_array, string_array);
// @dts-jest:pass
R_insertAll(number)(string_array)(string_array);
