import { Morphism } from "./$types";
declare const eqBy: eqBy_000;
type eqBy_000 = {
    /**
     * Takes a function and two values in its domain and returns `true` if the
     * values map to the same value in the codomain; `false` otherwise.
     *
     * @func
     * @memberOf R
     * @since v0.18.0
     * @category Relation
     * @sig (a -> b) -> a -> a -> Boolean
     * @param {Function} f
     * @param {*} x
     * @param {*} y
     * @return {Boolean}
     * @example
     *
     *      R.eqBy(Math.abs, 5, -5); //=> true
     */
    <T>(fn: Morphism<T, any>): eqBy_100<T>;
    <T>(fn: Morphism<T, any>, a: T): eqBy_110<T>;
    <$SEL extends "111">(): <T>(fn: Morphism<T, any>, a: T, b: T) => eqBy_111;
    <$SEL extends "11">(): <T>(fn: Morphism<T, any>, a: T) => eqBy_110<T>;
    <$SEL extends "1">(): <T>(fn: Morphism<T, any>) => eqBy_100<T>;
    <T>(fn: Morphism<T, any>, a: T, b: T): eqBy_111;
};
type eqBy_100<T> = {
    (a: T): eqBy_110<T>;
    <$SEL extends "11">(): (a: T, b: T) => eqBy_111;
    <$SEL extends "1">(): (a: T) => eqBy_110<T>;
    (a: T, b: T): eqBy_111;
};
type eqBy_110<T> = {
    (b: T): eqBy_111;
};
type eqBy_111 = boolean;
export = eqBy;
