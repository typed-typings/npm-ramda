import * as R_nthArg from '../ramda/dist/src/nthArg';

declare const number: number;
declare const object_array: object[];

// @dts-jest:pass:snap
R_nthArg(number)(...object_array);
