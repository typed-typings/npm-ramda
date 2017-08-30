import R_aperture = require('../ramda/dist/src/aperture');

declare const number: number;
declare const string_array: string[];

// @dts-jest:pass:snap
R_aperture(number)(string_array);
// @dts-jest:pass:snap
R_aperture(number, string_array);
