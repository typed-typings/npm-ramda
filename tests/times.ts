import * as R_times from '../ramda/dist/src/times';

declare const number_to_object: (x: number) => object;
declare const number: number;

// @dts-jest:pass:snap
R_times(number_to_object);
// @dts-jest:pass:snap
R_times(number_to_object, number);
