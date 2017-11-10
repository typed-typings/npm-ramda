import { Applicative, List, Morphism, Traversable } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const sequence: sequence_00;
type sequence_00 = {
    /**
     * Transforms a [Traversable](https://github.com/fantasyland/fantasy-land#traversable)
     * of [Applicative](https://github.com/fantasyland/fantasy-land#applicative) into an
     * Applicative of Traversable.
     *
     * Dispatches to the `sequence` method of the second argument, if present.
     *
     * @func
     * @memberOf R
     * @since v0.19.0
     * @category List
     * @sig (Applicative f, Traversable t) => (a -> f a) -> t (f a) -> f (t a)
     * @param {Function} of
     * @param {*} traversable
     * @return {*}
     * @see R.traverse
     * @example
     *
     *      R.sequence(Maybe.of, [Just(1), Just(2), Just(3)]);   //=> Just([1, 2, 3])
     *      R.sequence(Maybe.of, [Just(1), Just(2), Nothing()]); //=> Nothing()
     *
     *      R.sequence(R.of, Just([1, 2, 3])); //=> [Just(1), Just(2), Just(3)]
     *      R.sequence(R.of, Nothing());       //=> [Nothing()]
     */
    <T>(of: Morphism<T, Applicative<T>>): sequence_10<T>;
    <T>(_of: PH, traversable: List<Applicative<T>>): sequence_list_01<T>;
    <T>(_of: PH, traversable: Traversable<Applicative<T>>): sequence_traversable_01<T>;
    <T>(_of: PH, traversable: List<Applicative<T>> | Traversable<Applicative<T>>): sequence_mixed_01<T>;
    <T>(of: Morphism<T, Applicative<T>>, traversable: List<Applicative<T>>): sequence_list_11<T>;
    <T>(of: Morphism<T, Applicative<T>>, traversable: Traversable<Applicative<T>>): sequence_traversable_11<T>;
    <$SEL extends "11", $KIND extends "mixed">(): <T>(of: Morphism<T, Applicative<T>>, traversable: List<Applicative<T>> | Traversable<Applicative<T>>) => sequence_mixed_11<T>;
    <$SEL extends "11", $KIND extends "traversable">(): <T>(of: Morphism<T, Applicative<T>>, traversable: Traversable<Applicative<T>>) => sequence_traversable_11<T>;
    <$SEL extends "11", $KIND extends "list">(): <T>(of: Morphism<T, Applicative<T>>, traversable: List<Applicative<T>>) => sequence_list_11<T>;
    <$SEL extends "01", $KIND extends "mixed">(): <T>(_of: PH, traversable: List<Applicative<T>> | Traversable<Applicative<T>>) => sequence_mixed_01<T>;
    <$SEL extends "01", $KIND extends "traversable">(): <T>(_of: PH, traversable: Traversable<Applicative<T>>) => sequence_traversable_01<T>;
    <$SEL extends "01", $KIND extends "list">(): <T>(_of: PH, traversable: List<Applicative<T>>) => sequence_list_01<T>;
    <$SEL extends "1">(): <T>(of: Morphism<T, Applicative<T>>) => sequence_10<T>;
    <T>(of: Morphism<T, Applicative<T>>, traversable: List<Applicative<T>> | Traversable<Applicative<T>>): sequence_mixed_11<T>;
};
type sequence_10<T> = {
    (traversable: List<Applicative<T>>): sequence_list_11<T>;
    (traversable: Traversable<Applicative<T>>): sequence_traversable_11<T>;
    <$SEL extends "1", $KIND extends "mixed">(): (traversable: List<Applicative<T>> | Traversable<Applicative<T>>) => sequence_mixed_11<T>;
    <$SEL extends "1", $KIND extends "traversable">(): (traversable: Traversable<Applicative<T>>) => sequence_traversable_11<T>;
    <$SEL extends "1", $KIND extends "list">(): (traversable: List<Applicative<T>>) => sequence_list_11<T>;
    (traversable: List<Applicative<T>> | Traversable<Applicative<T>>): sequence_mixed_11<T>;
};
type sequence_list_01<T> = {
    (of: Morphism<T, Applicative<T>>): sequence_list_11<T>;
};
type sequence_traversable_01<T> = {
    (of: Morphism<T, Applicative<T>>): sequence_traversable_11<T>;
};
type sequence_mixed_01<T> = {
    (of: Morphism<T, Applicative<T>>): sequence_mixed_11<T>;
};
type sequence_list_11<T> = Applicative<T[]>;
type sequence_traversable_11<T> = Applicative<Traversable<T>>;
type sequence_mixed_11<T> = Applicative<T[]> | Applicative<Traversable<T>>;
export = sequence;
