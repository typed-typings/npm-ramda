import * as R_intersperse from '../ramda/dist/src/intersperse';

declare const object_array: object[];
declare const string: string;

// @dts-jest:pass -> <U>(list: U[] | ArrayLike<U>) => (string | U)[]
R_intersperse(string);
// @dts-jest:pass -> (string | object)[]
R_intersperse(string, object_array);
// @dts-jest:pass -> (string | object)[]
R_intersperse(string)(object_array);
