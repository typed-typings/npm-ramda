import * as R from '../ramda/dist/index';

declare const number_to_object: (x: number) => object;
declare const number: number;

// @dts-jest:pass:snap -> (n: number) => object[]
R.times(number_to_object);
// @dts-jest:pass:snap -> object[]
R.times(number_to_object, number);
