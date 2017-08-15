import { Morphism, Ordered } from "./$types";
/**
 * Takes a function and two values, and returns whichever value produces the
 * smaller result when passed to the provided function.
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
 * @see R.min, R.maxBy
 * @example
 *
 *      //  square :: Number -> Number
 *      var square = n => n * n;
 *
 *      R.minBy(square, -3, 2); //=> 2
 *
 *      R.reduce(R.minBy(square), Infinity, [3, -5, 4, 1, -2]); //=> 1
 *      R.reduce(R.minBy(square), Infinity, []); //=> Infinity
 */
declare const minBy: minBy_000;
type minBy_000 = {
    <T>(fn: Morphism<T, Ordered>): minBy_100<T>;
    <T>(fn: Morphism<T, Ordered>, a: T): minBy_110<T>;
    <$SEL extends "1">(): <T>(fn: Morphism<T, Ordered>) => minBy_100<T>;
    <$SEL extends "11">(): <T>(fn: Morphism<T, Ordered>, a: T) => minBy_110<T>;
    <$SEL extends "111">(): <T>(fn: Morphism<T, Ordered>, a: T, b: T) => minBy_111<T>;
    <T>(fn: Morphism<T, Ordered>, a: T, b: T): minBy_111<T>;
};
type minBy_100<T> = {
    (a: T): minBy_110<T>;
    <$SEL extends "1">(): (a: T) => minBy_110<T>;
    <$SEL extends "11">(): (a: T, b: T) => minBy_111<T>;
    (a: T, b: T): minBy_111<T>;
};
type minBy_010<T> = {
    (fn: Morphism<T, Ordered>): minBy_110<T>;
    <$SEL extends "1">(): (fn: Morphism<T, Ordered>) => minBy_110<T>;
    <$SEL extends "11">(): (fn: Morphism<T, Ordered>, b: T) => minBy_111<T>;
    (fn: Morphism<T, Ordered>, b: T): minBy_111<T>;
};
type minBy_110<T> = {
    (b: T): minBy_111<T>;
};
type minBy_001<T> = {
    (fn: Morphism<T, Ordered>): minBy_101<T>;
    <$SEL extends "1">(): (fn: Morphism<T, Ordered>) => minBy_101<T>;
    <$SEL extends "11">(): (fn: Morphism<T, Ordered>, a: T) => minBy_111<T>;
    (fn: Morphism<T, Ordered>, a: T): minBy_111<T>;
};
type minBy_101<T> = {
    (a: T): minBy_111<T>;
};
type minBy_011<T> = {
    (fn: Morphism<T, Ordered>): minBy_111<T>;
};
type minBy_111<T> = T;
export = minBy;
