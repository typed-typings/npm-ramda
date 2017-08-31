import R_partialRight = require('../ramda/dist/src/partialRight');

declare const number_string_to_object: (a: number, b: string) => object;
declare const number: number;
declare const string: string;

// @dts-jest:pass:snap -> (args: any[]) => (...args: any[]) => object
R_partialRight(number_string_to_object);
// @dts-jest:pass:snap -> (...args: any[]) => object
R_partialRight(number_string_to_object, [string]);
// @dts-jest:pass:snap -> object
R_partialRight(number_string_to_object, [string])(number);
