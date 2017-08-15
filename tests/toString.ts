import * as R_toString from '../ramda/dist/src/toString';

declare const number: number;
declare const object: object;

// @dts-jest:pass
R_toString(number);
// @dts-jest:pass
R_toString(object);
