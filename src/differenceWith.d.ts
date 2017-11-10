import { Comparator, List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const differenceWith: differenceWith_000;
type differenceWith_000 = {
    /**
     * Finds the set (i.e. no duplicates) of all elements in the first list not
     * contained in the second list. Duplication is determined according to the
     * value returned by applying the supplied predicate to two list elements.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category Relation
     * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
     * @param {Function} pred A predicate used to test whether two items are equal.
     * @param {Array} list1 The first list.
     * @param {Array} list2 The second list.
     * @return {Array} The elements in `list1` that are not in `list2`.
     * @see R.difference, R.symmetricDifference, R.symmetricDifferenceWith
     * @example
     *
     *      var cmp = (x, y) => x.a === y.a;
     *      var l1 = [{a: 1}, {a: 2}, {a: 3}];
     *      var l2 = [{a: 3}, {a: 4}];
     *      R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]
     */
    <T>(fn: Comparator<T, boolean>): differenceWith_100<T>;
    <T>(_fn: PH, a: List<T>): differenceWith_010<T>;
    <T>(fn: Comparator<T, boolean>, a: List<T>): differenceWith_110<T>;
    <T>(_fn: PH, _a: PH, b: List<T>): differenceWith_001<T>;
    <T>(_fn: PH, a: List<T>, b: List<T>): differenceWith_011<T>;
    <T>(fn: Comparator<T, boolean>, _a: PH, b: List<T>): differenceWith_101<T>;
    <$SEL extends "111">(): <T>(fn: Comparator<T, boolean>, a: List<T>, b: List<T>) => differenceWith_111<T>;
    <$SEL extends "101">(): <T>(fn: Comparator<T, boolean>, _a: PH, b: List<T>) => differenceWith_101<T>;
    <$SEL extends "011">(): <T>(_fn: PH, a: List<T>, b: List<T>) => differenceWith_011<T>;
    <$SEL extends "001">(): <T>(_fn: PH, _a: PH, b: List<T>) => differenceWith_001<T>;
    <$SEL extends "11">(): <T>(fn: Comparator<T, boolean>, a: List<T>) => differenceWith_110<T>;
    <$SEL extends "01">(): <T>(_fn: PH, a: List<T>) => differenceWith_010<T>;
    <$SEL extends "1">(): <T>(fn: Comparator<T, boolean>) => differenceWith_100<T>;
    <T>(fn: Comparator<T, boolean>, a: List<T>, b: List<T>): differenceWith_111<T>;
};
type differenceWith_100<T> = {
    (a: List<T>): differenceWith_110<T>;
    (_a: PH, b: List<T>): differenceWith_101<T>;
    <$SEL extends "11">(): (a: List<T>, b: List<T>) => differenceWith_111<T>;
    <$SEL extends "01">(): (_a: PH, b: List<T>) => differenceWith_101<T>;
    <$SEL extends "1">(): (a: List<T>) => differenceWith_110<T>;
    (a: List<T>, b: List<T>): differenceWith_111<T>;
};
type differenceWith_010<T> = {
    (fn: Comparator<T, boolean>): differenceWith_110<T>;
    (_fn: PH, b: List<T>): differenceWith_011<T>;
    <$SEL extends "11">(): (fn: Comparator<T, boolean>, b: List<T>) => differenceWith_111<T>;
    <$SEL extends "01">(): (_fn: PH, b: List<T>) => differenceWith_011<T>;
    <$SEL extends "1">(): (fn: Comparator<T, boolean>) => differenceWith_110<T>;
    (fn: Comparator<T, boolean>, b: List<T>): differenceWith_111<T>;
};
type differenceWith_110<T> = {
    (b: List<T>): differenceWith_111<T>;
};
type differenceWith_001<T> = {
    (fn: Comparator<T, boolean>): differenceWith_101<T>;
    (_fn: PH, a: List<T>): differenceWith_011<T>;
    <$SEL extends "11">(): (fn: Comparator<T, boolean>, a: List<T>) => differenceWith_111<T>;
    <$SEL extends "01">(): (_fn: PH, a: List<T>) => differenceWith_011<T>;
    <$SEL extends "1">(): (fn: Comparator<T, boolean>) => differenceWith_101<T>;
    (fn: Comparator<T, boolean>, a: List<T>): differenceWith_111<T>;
};
type differenceWith_101<T> = {
    (a: List<T>): differenceWith_111<T>;
};
type differenceWith_011<T> = {
    (fn: Comparator<T, boolean>): differenceWith_111<T>;
};
type differenceWith_111<T> = T[];
export = differenceWith;
