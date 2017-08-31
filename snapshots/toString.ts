import R_toString = require('../ramda/dist/src/toString');

declare const number: number;
declare const object: object;

// @dts-jest:pass:snap -> string
R_toString(number);
// @dts-jest:pass:snap -> string
R_toString(object);
