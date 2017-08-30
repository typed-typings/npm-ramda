import R_uncurryN = require('../ramda/dist/src/uncurryN');

declare const string_to_object: (x: string) => object;
declare const number_boolean_to_string: (x: number, y: boolean) => string;
declare const number_args_to_boolean: (...args: number[]) => boolean;
declare const seven_string_to_number: (
  v1: string,
  v2: string,
  v3: string,
  v4: string,
  v5: string,
  v6: string,
  v7: string,
) => number;

// @dts-jest:pass:snap
R_uncurryN(0, string_to_object);
// @dts-jest:pass:snap
R_uncurryN(1, number_boolean_to_string);
// @dts-jest:pass:snap
R_uncurryN(4, number_args_to_boolean);
// @dts-jest:pass:snap
R_uncurryN(7, seven_string_to_number);

// @dts-jest:pass:snap
R_uncurryN<object>(0, string_to_object);
// @dts-jest:pass:snap
R_uncurryN<string, number>(1, number_boolean_to_string);
// @dts-jest:pass:snap
R_uncurryN<boolean, number, number>(4, number_args_to_boolean);
// @dts-jest:pass:snap
R_uncurryN<number>(7, seven_string_to_number);
