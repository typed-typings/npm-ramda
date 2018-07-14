import * as R from '../ramda/dist/index';

declare const number: number;

// @dts-jest:pass:snap
R.add(number, number);
// @dts-jest:pass:snap
R.add(number)(number);
