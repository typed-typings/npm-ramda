import * as R_type from '../ramda/dist/src/type';

declare const boolean: boolean;
declare const number: number;
declare const object: object;
declare const any: any;

// @dts-jest:pass:snap
R_type(boolean);
// @dts-jest:pass:snap
R_type(number);
// @dts-jest:pass:snap
R_type(object);
// @dts-jest:pass:snap
R_type(any);
