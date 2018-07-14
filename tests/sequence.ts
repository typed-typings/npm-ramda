import * as R from '../ramda/dist/index';

declare const any_applicative: R.Applicative<any>;
declare const number_applicative: R.Applicative<number>;
declare const any_applicative_traverable: R.Traversable<R.Applicative<any>>;

// @dts-jest:pass:snap
R.sequence(number_applicative.of, [number_applicative]);
// @dts-jest:pass:snap
R.sequence(any_applicative.of, [any_applicative]);
// @dts-jest:pass:snap
R.sequence<number>(any_applicative.of, [any_applicative]);

// @dts-jest:pass:snap
R.sequence(number_applicative.of, any_applicative_traverable);
// @dts-jest:pass:snap
R.sequence(any_applicative.of, any_applicative_traverable);
// @dts-jest:pass:snap
R.sequence<number>(any_applicative.of, any_applicative_traverable);
