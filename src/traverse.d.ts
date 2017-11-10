import { Applicative, List, Morphism, Traversable } from "./$types";
declare const traverse: traverse_000;
type traverse_000 = {
    /**
     * Maps an [Applicative](https://github.com/fantasyland/fantasy-land#applicative)-returning
     * function over a [Traversable](https://github.com/fantasyland/fantasy-land#traversable),
     * then uses [`sequence`](#sequence) to transform the resulting Traversable of Applicative
     * into an Applicative of Traversable.
     *
     * Dispatches to the `traverse` method of the third argument, if present.
     *
     * @func
     * @memberOf R
     * @since v0.19.0
     * @category List
     * @sig (Applicative f, Traversable t) => (a -> f a) -> (a -> f b) -> t a -> f (t b)
     * @param {Function} of
     * @param {Function} f
     * @param {*} traversable
     * @return {*}
     * @see R.sequence
     * @example
     *
     *      // Returns `Nothing` if the given divisor is `0`
     *      safeDiv = n => d => d === 0 ? Nothing() : Just(n / d)
     *
     *      R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); //=> Just([5, 2.5, 2])
     *      R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); //=> Nothing
     */
    <T>(of: Morphism<T, Applicative<T>>): traverse_100<T>;
    <T, U>(of: Morphism<T, Applicative<T>>, fn: Morphism<T, Applicative<U>>): traverse_110<T, U>;
    <T, U>(of: Morphism<T, Applicative<T>>, fn: Morphism<T, Applicative<U>>, traversable: List<T>): traverse_list_111<U>;
    <T, U>(of: Morphism<T, Applicative<T>>, fn: Morphism<T, Applicative<U>>, traversable: Traversable<T>): traverse_traversable_111<U>;
    <$SEL extends "111", $KIND extends "mixed">(): <T, U>(of: Morphism<T, Applicative<T>>, fn: Morphism<T, Applicative<U>>, traversable: List<T> | Traversable<T>) => traverse_mixed_111<U>;
    <$SEL extends "111", $KIND extends "traversable">(): <T, U>(of: Morphism<T, Applicative<T>>, fn: Morphism<T, Applicative<U>>, traversable: Traversable<T>) => traverse_traversable_111<U>;
    <$SEL extends "111", $KIND extends "list">(): <T, U>(of: Morphism<T, Applicative<T>>, fn: Morphism<T, Applicative<U>>, traversable: List<T>) => traverse_list_111<U>;
    <$SEL extends "11">(): <T, U>(of: Morphism<T, Applicative<T>>, fn: Morphism<T, Applicative<U>>) => traverse_110<T, U>;
    <$SEL extends "1">(): <T>(of: Morphism<T, Applicative<T>>) => traverse_100<T>;
    <T, U>(of: Morphism<T, Applicative<T>>, fn: Morphism<T, Applicative<U>>, traversable: List<T> | Traversable<T>): traverse_mixed_111<U>;
};
type traverse_100<T> = {
    <U>(fn: Morphism<T, Applicative<U>>): traverse_110<T, U>;
    <U>(fn: Morphism<T, Applicative<U>>, traversable: List<T>): traverse_list_111<U>;
    <U>(fn: Morphism<T, Applicative<U>>, traversable: Traversable<T>): traverse_traversable_111<U>;
    <$SEL extends "11", $KIND extends "mixed">(): <U>(fn: Morphism<T, Applicative<U>>, traversable: List<T> | Traversable<T>) => traverse_mixed_111<U>;
    <$SEL extends "11", $KIND extends "traversable">(): <U>(fn: Morphism<T, Applicative<U>>, traversable: Traversable<T>) => traverse_traversable_111<U>;
    <$SEL extends "11", $KIND extends "list">(): <U>(fn: Morphism<T, Applicative<U>>, traversable: List<T>) => traverse_list_111<U>;
    <$SEL extends "1">(): <U>(fn: Morphism<T, Applicative<U>>) => traverse_110<T, U>;
    <U>(fn: Morphism<T, Applicative<U>>, traversable: List<T> | Traversable<T>): traverse_mixed_111<U>;
};
type traverse_110<T, U> = {
    (traversable: List<T>): traverse_list_111<U>;
    (traversable: Traversable<T>): traverse_traversable_111<U>;
    <$SEL extends "1", $KIND extends "mixed">(): (traversable: List<T> | Traversable<T>) => traverse_mixed_111<U>;
    <$SEL extends "1", $KIND extends "traversable">(): (traversable: Traversable<T>) => traverse_traversable_111<U>;
    <$SEL extends "1", $KIND extends "list">(): (traversable: List<T>) => traverse_list_111<U>;
    (traversable: List<T> | Traversable<T>): traverse_mixed_111<U>;
};
type traverse_list_111<U> = Applicative<U[]>;
type traverse_traversable_111<U> = Applicative<Traversable<U>>;
type traverse_mixed_111<U> = Applicative<U[]> | Applicative<Traversable<U>>;
export = traverse;
