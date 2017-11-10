import { Comparator, List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const uniqWith: uniqWith_00;
type uniqWith_00 = {
    /**
     * Returns a new list containing only one copy of each element in the original
     * list, based upon the value returned by applying the supplied predicate to
     * two list elements. Prefers the first item if two items compare equal based
     * on the predicate.
     *
     * @func
     * @memberOf R
     * @since v0.2.0
     * @category List
     * @sig ((a, a) -> Boolean) -> [a] -> [a]
     * @param {Function} pred A predicate used to test whether two items are equal.
     * @param {Array} list The array to consider.
     * @return {Array} The list of unique items.
     * @example
     *
     *      var strEq = R.eqBy(String);
     *      R.uniqWith(strEq)([1, '1', 2, 1]); //=> [1, 2]
     *      R.uniqWith(strEq)([{}, {}]);       //=> [{}]
     *      R.uniqWith(strEq)([1, '1', 1]);    //=> [1]
     *      R.uniqWith(strEq)(['1', 1, 1]);    //=> ['1']
     */
    <T>(fn: Comparator<T, boolean>): uniqWith_10<T>;
    <T>(_fn: PH, list: List<T>): uniqWith_01<T>;
    <$SEL extends "11">(): <T>(fn: Comparator<T, boolean>, list: List<T>) => uniqWith_11<T>;
    <$SEL extends "01">(): <T>(_fn: PH, list: List<T>) => uniqWith_01<T>;
    <$SEL extends "1">(): <T>(fn: Comparator<T, boolean>) => uniqWith_10<T>;
    <T>(fn: Comparator<T, boolean>, list: List<T>): uniqWith_11<T>;
};
type uniqWith_10<T> = {
    (list: List<T>): uniqWith_11<T>;
};
type uniqWith_01<T> = {
    (fn: Comparator<T, boolean>): uniqWith_11<T>;
};
type uniqWith_11<T> = T[];
export = uniqWith;
