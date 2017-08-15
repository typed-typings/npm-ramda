import * as R_insert from '../ramda/dist/src/insert';

declare const object: object;
declare const object_array: object[];
declare const string: string;
declare const number: number;

// @dts-jest:pass
R_insert(number, string);
// @dts-jest:pass
R_insert(number, string, object_array);
// @dts-jest:pass
R_insert(number)(string)(object_array);

// @dts-jest:pass
R_insert(number, object);
// @dts-jest:pass
R_insert(number, object, object_array);
// @dts-jest:pass
R_insert(number)(object)(object_array);
