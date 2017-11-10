import { List, Morphism } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const uniqBy: uniqBy_00;
type uniqBy_00 = {
    /**
     * Returns a new list containing only one copy of each element in the original
     * list, based upon the value returned by applying the supplied function to
     * each list element. Prefers the first item if the supplied function produces
     * the same value on two items. [`R.equals`](#equals) is used for comparison.
     *
     * @func
     * @memberOf R
     * @since v0.16.0
     * @category List
     * @sig (a -> b) -> [a] -> [a]
     * @param {Function} fn A function used to produce a value to use during comparisons.
     * @param {Array} list The array to consider.
     * @return {Array} The list of unique items.
     * @example
     *
     *      R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]
     */
    <T>(fn: Morphism<T, any>): uniqBy_10<T>;
    <T>(_fn: PH, list: List<T>): uniqBy_01<T>;
    <$SEL extends "11">(): <T>(fn: Morphism<T, any>, list: List<T>) => uniqBy_11<T>;
    <$SEL extends "01">(): <T>(_fn: PH, list: List<T>) => uniqBy_01<T>;
    <$SEL extends "1">(): <T>(fn: Morphism<T, any>) => uniqBy_10<T>;
    <T>(fn: Morphism<T, any>, list: List<T>): uniqBy_11<T>;
};
type uniqBy_10<T> = {
    (list: List<T>): uniqBy_11<T>;
};
type uniqBy_01<T> = {
    (fn: Morphism<T, any>): uniqBy_11<T>;
};
type uniqBy_11<T> = T[];
export = uniqBy;
