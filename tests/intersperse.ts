import R_intersperse = require('../ramda/dist/src/intersperse');

declare const object_array: object[];
declare const string: string;

// @dts-jest:pass:snap
R_intersperse(string);
// @dts-jest:pass:snap
R_intersperse(string, object_array);
// @dts-jest:pass:snap
R_intersperse(string)(object_array);
