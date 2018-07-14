import * as R from '../ramda/dist/index';

declare const number_to_object: (x: number) => object;
declare const number: number;

// @dts-jest:pass:snap
R.times(number_to_object);
// @dts-jest:pass:snap
R.times(number_to_object, number);
