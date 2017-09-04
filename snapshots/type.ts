import R_type = require('../ramda/dist/src/type');

declare const boolean: boolean;
declare const number: number;
declare const object: object;
declare const any: any;

// @dts-jest:pass:snap -> "Boolean"
R_type(boolean);
// @dts-jest:pass:snap -> "Number"
R_type(number);
// @dts-jest:pass:snap -> string
R_type(object);
// @dts-jest:pass:snap -> string
R_type(any);
