import * as R from '../ramda/dist/index';

declare const number: number;
declare const object: object;

// @dts-jest:pass:snap
R.pair(number);
// @dts-jest:pass:snap
R.pair(number)(object);
// @dts-jest:pass:snap
R.pair(number, object);
