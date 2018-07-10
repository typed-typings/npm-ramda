import * as R from '../ramda/dist/index';

declare const boolean: boolean;
declare const number: number;
declare const object: object;
declare const any: any;

// @dts-jest:pass:snap
R.type(boolean);
// @dts-jest:pass:snap
R.type(number);
// @dts-jest:pass:snap
R.type(object);
// @dts-jest:pass:snap
R.type(any);
