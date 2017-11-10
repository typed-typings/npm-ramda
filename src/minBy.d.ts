import { Morphism, Ordered } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const minBy: minBy_000;
type minBy_000 = {
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
    <T>(fn: Morphism<T, Ordered>): minBy_100<T>;
    <T>(_fn: PH, a: T): minBy_010<T>;
    <T>(fn: Morphism<T, Ordered>, a: T): minBy_110<T>;
    <T>(_fn: PH, _a: PH, b: T): minBy_001<T>;
    <T>(_fn: PH, a: T, b: T): minBy_011<T>;
    <T>(fn: Morphism<T, Ordered>, _a: PH, b: T): minBy_101<T>;
    <$SEL extends "111">(): <T>(fn: Morphism<T, Ordered>, a: T, b: T) => minBy_111<T>;
    <$SEL extends "101">(): <T>(fn: Morphism<T, Ordered>, _a: PH, b: T) => minBy_101<T>;
    <$SEL extends "011">(): <T>(_fn: PH, a: T, b: T) => minBy_011<T>;
    <$SEL extends "001">(): <T>(_fn: PH, _a: PH, b: T) => minBy_001<T>;
    <$SEL extends "11">(): <T>(fn: Morphism<T, Ordered>, a: T) => minBy_110<T>;
    <$SEL extends "01">(): <T>(_fn: PH, a: T) => minBy_010<T>;
    <$SEL extends "1">(): <T>(fn: Morphism<T, Ordered>) => minBy_100<T>;
    <T>(fn: Morphism<T, Ordered>, a: T, b: T): minBy_111<T>;
};
type minBy_100<T> = {
    (a: T): minBy_110<T>;
    (_a: PH, b: T): minBy_101<T>;
    <$SEL extends "11">(): (a: T, b: T) => minBy_111<T>;
    <$SEL extends "01">(): (_a: PH, b: T) => minBy_101<T>;
    <$SEL extends "1">(): (a: T) => minBy_110<T>;
    (a: T, b: T): minBy_111<T>;
};
type minBy_010<T> = {
    (fn: Morphism<T, Ordered>): minBy_110<T>;
    (_fn: PH, b: T): minBy_011<T>;
    <$SEL extends "11">(): (fn: Morphism<T, Ordered>, b: T) => minBy_111<T>;
    <$SEL extends "01">(): (_fn: PH, b: T) => minBy_011<T>;
    <$SEL extends "1">(): (fn: Morphism<T, Ordered>) => minBy_110<T>;
    (fn: Morphism<T, Ordered>, b: T): minBy_111<T>;
};
type minBy_110<T> = {
    (b: T): minBy_111<T>;
};
type minBy_001<T> = {
    (fn: Morphism<T, Ordered>): minBy_101<T>;
    (_fn: PH, a: T): minBy_011<T>;
    <$SEL extends "11">(): (fn: Morphism<T, Ordered>, a: T) => minBy_111<T>;
    <$SEL extends "01">(): (_fn: PH, a: T) => minBy_011<T>;
    <$SEL extends "1">(): (fn: Morphism<T, Ordered>) => minBy_101<T>;
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
