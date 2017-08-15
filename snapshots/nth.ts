import * as R_nth from '../ramda/dist/src/nth';

declare const number: number;
declare const string: string;
declare const object_array: object[];

// @dts-jest:pass -> string
R_nth(number)(string);
// @dts-jest:pass -> string
R_nth(number, string);

// @dts-jest:pass -> object | undefined
R_nth(number)(object_array);
// @dts-jest:pass -> object | undefined
R_nth(number, object_array);
