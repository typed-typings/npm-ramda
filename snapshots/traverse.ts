import * as R from '../ramda/dist/index';

declare const number_array: number[];
declare const number_applicative: R.Applicative<number>;
declare const number_traverable: R.Traversable<number>;
declare const number_to_string_applicative: (
  x: number,
) => R.Applicative<string>;

// @dts-jest:pass:snap -> Applicative<string[]>
R.traverse(number_applicative.of, number_to_string_applicative, number_array);
// @dts-jest:pass:snap -> Applicative<string[]>
R.traverse(number_applicative.of)(number_to_string_applicative)(number_array);
// @dts-jest:pass:snap -> Applicative<Traversable<string>>
R.traverse(
  number_applicative.of,
  number_to_string_applicative,
  number_traverable,
);
// @dts-jest:pass:snap -> Applicative<Traversable<string>>
R.traverse(number_applicative.of)(number_to_string_applicative)(
  number_traverable,
);
