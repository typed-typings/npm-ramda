import { Applicative, Traversable } from '../ramda/dist/src/$types';
import R_traverse = require('../ramda/dist/src/traverse');

declare const number_array: number[];
declare const number_applicative: Applicative<number>;
declare const number_traverable: Traversable<number>;
declare const number_to_string_applicative: (x: number) => Applicative<string>;

// @dts-jest:pass:snap
R_traverse(number_applicative.of, number_to_string_applicative, number_array);
// @dts-jest:pass:snap
R_traverse(number_applicative.of)(number_to_string_applicative)(number_array);
// @dts-jest:pass:snap
R_traverse(
  number_applicative.of,
  number_to_string_applicative,
  number_traverable,
);
// @dts-jest:pass:snap
R_traverse(number_applicative.of)(number_to_string_applicative)(
  number_traverable,
);
