import R_call = require('../ramda/dist/src/call');

declare const number_and_string_to_boolean: (a: number, b: string) => boolean;
declare const number_and_string: [number, string];

// @dts-jest:pass:snap
R_call(number_and_string_to_boolean, ...number_and_string);
