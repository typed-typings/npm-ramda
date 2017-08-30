import R_partial = require('../ramda/dist/src/partial');

declare const number_string_to_object: (a: number, b: string) => object;
declare const number: number;
declare const string: string;

// @dts-jest:pass:snap
R_partial(number_string_to_object);
// @dts-jest:pass:snap
R_partial(number_string_to_object, [number]);
// @dts-jest:pass:snap
R_partial(number_string_to_object, [number])(string);
