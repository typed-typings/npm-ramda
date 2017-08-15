import { Applicative, Traversable } from '../ramda/dist/src/$types';
import * as R_sequence from '../ramda/dist/src/sequence';

declare const any_applicative: Applicative<any>;
declare const number_applicative: Applicative<number>;
declare const any_applicative_traverable: Traversable<Applicative<any>>;

// @dts-jest:pass -> Applicative<{}[]>
R_sequence(number_applicative.of, [number_applicative]);
// @dts-jest:pass -> Applicative<{}[]>
R_sequence(any_applicative.of, [any_applicative]);
// @dts-jest:pass -> Applicative<number[]>
R_sequence<number>(any_applicative.of, [any_applicative]);

// @dts-jest:pass -> Applicative<Traversable<{}>>
R_sequence(number_applicative.of, any_applicative_traverable);
// @dts-jest:pass -> Applicative<Traversable<{}>>
R_sequence(any_applicative.of, any_applicative_traverable);
// @dts-jest:pass -> Applicative<Traversable<number>>
R_sequence<number>(any_applicative.of, any_applicative_traverable);
