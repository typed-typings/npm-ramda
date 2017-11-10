import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const difference: difference_00;
type difference_00 = {
    /**
     * Finds the set (i.e. no duplicates) of all elements in the first list not
     * contained in the second list. Objects and Arrays are compared in terms of
     * value equality, not reference equality.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category Relation
     * @sig [*] -> [*] -> [*]
     * @param {Array} list1 The first list.
     * @param {Array} list2 The second list.
     * @return {Array} The elements in `list1` that are not in `list2`.
     * @see R.differenceWith, R.symmetricDifference, R.symmetricDifferenceWith, R.without
     * @example
     *
     *      R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
     *      R.difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]
     *      R.difference([{a: 1}, {b: 2}], [{a: 1}, {c: 3}]) //=> [{b: 2}]
     */
    <T>(a: List<T>): difference_10<T>;
    <T>(_a: PH, b: List<T>): difference_01<T>;
    <$SEL extends "11">(): <T>(a: List<T>, b: List<T>) => difference_11<T>;
    <$SEL extends "01">(): <T>(_a: PH, b: List<T>) => difference_01<T>;
    <$SEL extends "1">(): <T>(a: List<T>) => difference_10<T>;
    <T>(a: List<T>, b: List<T>): difference_11<T>;
};
type difference_10<T> = {
    (b: List<T>): difference_11<T>;
};
type difference_01<T> = {
    (a: List<T>): difference_11<T>;
};
type difference_11<T> = T[];
export = difference;
