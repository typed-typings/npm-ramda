import * as R_intersperse from '../ramda/dist/src/intersperse';

declare const object_array: object[];
declare const string: string;

// @dts-jest:pass
R_intersperse(string);
// @dts-jest:pass
R_intersperse(string, object_array);
// @dts-jest:pass
R_intersperse(string)(object_array);
