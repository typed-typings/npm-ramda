import { Comparator, List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const groupWith: groupWith_00;
type groupWith_00 = {
    /**
     * Takes a list and returns a list of lists where each sublist's elements are
     * all satisfied pairwise comparison according to the provided function.
     * Only adjacent elements are passed to the comparison function.
     *
     * @func
     * @memberOf R
     * @since v0.21.0
     * @category List
     * @sig ((a, a) → Boolean) → [a] → [[a]]
     * @param {Function} fn Function for determining whether two given (adjacent)
     *        elements should be in the same group
     * @param {Array} list The array to group. Also accepts a string, which will be
     *        treated as a list of characters.
     * @return {List} A list that contains sublists of elements,
     *         whose concatenations are equal to the original list.
     * @example
     *
     * R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21])
     * //=> [[0], [1, 1], [2], [3], [5], [8], [13], [21]]
     *
     * R.groupWith((a, b) => a + 1 === b, [0, 1, 1, 2, 3, 5, 8, 13, 21])
     * //=> [[0, 1], [1, 2, 3], [5], [8], [13], [21]]
     *
     * R.groupWith((a, b) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21])
     * //=> [[0], [1, 1], [2], [3, 5], [8], [13, 21]]
     *
     * R.groupWith(R.eqBy(isVowel), 'aestiou')
     * //=> ['ae', 'st', 'iou']
     */
    <T>(fn: Comparator<T, boolean>): groupWith_10<T>;
    <T, U extends List<T>>(_fn: PH, list: U): groupWith_01<T, U>;
    <$SEL extends "11">(): <T, U extends List<T>>(fn: Comparator<T, boolean>, list: U) => groupWith_11<T, U>;
    <$SEL extends "01">(): <T, U extends List<T>>(_fn: PH, list: U) => groupWith_01<T, U>;
    <$SEL extends "1">(): <T>(fn: Comparator<T, boolean>) => groupWith_10<T>;
    <T, U extends List<T>>(fn: Comparator<T, boolean>, list: U): groupWith_11<T, U>;
};
type groupWith_10<T> = {
    <U extends List<T>>(list: U): groupWith_11<T, U>;
};
type groupWith_01<T, U extends List<T>> = {
    (fn: Comparator<T, boolean>): groupWith_11<T, U>;
};
type groupWith_11<T, U extends List<T>> = U[];
export = groupWith;
