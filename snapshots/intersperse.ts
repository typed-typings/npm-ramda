import R_intersperse = require('../ramda/dist/src/intersperse');

declare const object_array: object[];
declare const string: string;

// @dts-jest:pass:snap -> <U>(list: U[] | ArrayLike<U>) => (string | U)[]
R_intersperse(string);
// @dts-jest:pass:snap -> (string | object)[]
R_intersperse(string, object_array);
// @dts-jest:pass:snap -> (string | object)[]
R_intersperse(string)(object_array);
