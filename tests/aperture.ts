import * as R_aperture from '../ramda/dist/src/aperture';

declare const number: number;
declare const string_array: string[];

// @dts-jest:pass
R_aperture(number)(string_array);
// @dts-jest:pass
R_aperture(number, string_array);
