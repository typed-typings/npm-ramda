import * as R_update from '../ramda/dist/src/update';

declare const string_array: string[];
declare const boolean: boolean;
declare const string: string;
declare const number: number;

// @dts-jest:pass:snap
R_update(number, boolean);
// @dts-jest:pass:snap
R_update(number)(boolean)(string_array);
// @dts-jest:pass:snap
R_update(number, boolean, string_array);
// @dts-jest:pass:snap
R_update(number)(string)(string_array);
// @dts-jest:pass:snap
R_update(number, string, string_array);
