import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const zip: zip_00;
type zip_00 = {
    /**
     * Creates a new list out of the two supplied by pairing up equally-positioned
     * items from both lists. The returned list is truncated to the length of the
     * shorter of the two input lists.
     * Note: `zip` is equivalent to `zipWith(function(a, b) { return [a, b] })`.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category List
     * @sig [a] -> [b] -> [[a,b]]
     * @param {Array} list1 The first array to consider.
     * @param {Array} list2 The second array to consider.
     * @return {Array} The list made by pairing up same-indexed elements of `list1` and `list2`.
     * @example
     *
     *      R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
     * @symb R.zip([a, b, c], [d, e, f]) = [[a, d], [b, e], [c, f]]
     */
    <T>(a: List<T>): zip_10<T>;
    <U>(_a: PH, b: List<U>): zip_01<U>;
    <$SEL extends "11">(): <T, U>(a: List<T>, b: List<U>) => zip_11<T, U>;
    <$SEL extends "01">(): <U>(_a: PH, b: List<U>) => zip_01<U>;
    <$SEL extends "1">(): <T>(a: List<T>) => zip_10<T>;
    <T, U>(a: List<T>, b: List<U>): zip_11<T, U>;
};
type zip_10<T> = {
    <U>(b: List<U>): zip_11<T, U>;
};
type zip_01<U> = {
    <T>(a: List<T>): zip_11<T, U>;
};
type zip_11<T, U> = Array<[T, U]>;
export = zip;
