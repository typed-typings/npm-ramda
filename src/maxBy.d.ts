import { Morphism, Ordered } from "./$types";
/**
 * Takes a function and two values, and returns whichever value produces the
 * larger result when passed to the provided function.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Relation
 * @sig Ord b => (a -> b) -> a -> a -> a
 * @param {Function} f
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.max, R.minBy
 * @example
 *
 *      //  square :: Number -> Number
 *      var square = n => n * n;
 *
 *      R.maxBy(square, -3, 2); //=> -3
 *
 *      R.reduce(R.maxBy(square), 0, [3, -5, 4, 1, -2]); //=> -5
 *      R.reduce(R.maxBy(square), 0, []); //=> 0
 */
declare const maxBy: maxBy_000;
type maxBy_000 = {
    <T>(fn: Morphism<T, Ordered>): maxBy_100<T>;
    <T>(fn: Morphism<T, Ordered>, a: T): maxBy_110<T>;
    <$SEL extends "1">(): <T>(fn: Morphism<T, Ordered>) => maxBy_100<T>;
    <$SEL extends "11">(): <T>(fn: Morphism<T, Ordered>, a: T) => maxBy_110<T>;
    <$SEL extends "111">(): <T>(fn: Morphism<T, Ordered>, a: T, b: T) => maxBy_111<T>;
    <T>(fn: Morphism<T, Ordered>, a: T, b: T): maxBy_111<T>;
};
type maxBy_100<T> = {
    (a: T): maxBy_110<T>;
    <$SEL extends "1">(): (a: T) => maxBy_110<T>;
    <$SEL extends "11">(): (a: T, b: T) => maxBy_111<T>;
    (a: T, b: T): maxBy_111<T>;
};
type maxBy_110<T> = {
    (b: T): maxBy_111<T>;
};
type maxBy_111<T> = T;
export = maxBy;
