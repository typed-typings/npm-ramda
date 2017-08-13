import * as R_symmetricDifference from '../ramda/dist/src/symmetricDifference';

declare const number_array: number[];

// @dts-jest:pass
R_symmetricDifference(number_array);
// @dts-jest:pass
R_symmetricDifference(number_array, number_array);
