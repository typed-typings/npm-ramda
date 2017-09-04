import R_nthArg = require('../ramda/dist/src/nthArg');

declare const number: number;
declare const object_array: object[];

// @dts-jest:pass:snap -> object
R_nthArg(number)(...object_array);
