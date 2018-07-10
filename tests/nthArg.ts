import * as R from '../ramda/dist/index';

declare const number: number;
declare const object_array: object[];

// @dts-jest:pass:snap
R.nthArg(number)(...object_array);
