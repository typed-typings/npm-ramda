import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const xprod: xprod_00;
type xprod_00 = {
    /**
     * Creates a new list out of the two supplied by creating each possible pair
     * from the lists.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category List
     * @sig [a] -> [b] -> [[a,b]]
     * @param {Array} as The first list.
     * @param {Array} bs The second list.
     * @return {Array} The list made by combining each possible pair from
     *         `as` and `bs` into pairs (`[a, b]`).
     * @example
     *
     *      R.xprod([1, 2], ['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
     * @symb R.xprod([a, b], [c, d]) = [[a, c], [a, d], [b, c], [b, d]]
     */
    <T>(a: List<T>): xprod_10<T>;
    <U>(_a: PH, b: List<U>): xprod_01<U>;
    <$SEL extends "11">(): <T, U>(a: List<T>, b: List<U>) => xprod_11<T, U>;
    <$SEL extends "01">(): <U>(_a: PH, b: List<U>) => xprod_01<U>;
    <$SEL extends "1">(): <T>(a: List<T>) => xprod_10<T>;
    <T, U>(a: List<T>, b: List<U>): xprod_11<T, U>;
};
type xprod_10<T> = {
    <U>(b: List<U>): xprod_11<T, U>;
};
type xprod_01<U> = {
    <T>(a: List<T>): xprod_11<T, U>;
};
type xprod_11<T, U> = Array<[T, U]>;
export = xprod;
