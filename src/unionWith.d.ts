import { Comparator, List } from "./$types";
/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements
 * of each list. Duplication is determined according to the value returned by
 * applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig (a -> a -> Boolean) -> [*] -> [*] -> [*]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The first and second lists concatenated, with
 *         duplicates removed.
 * @see R.union
 * @example
 *
 *      var l1 = [{a: 1}, {a: 2}];
 *      var l2 = [{a: 1}, {a: 4}];
 *      R.unionWith(R.eqBy(R.prop('a')), l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]
 */
declare const unionWith: unionWith_000;
type unionWith_000 = {
    <T>(fn: Comparator<T, boolean>): unionWith_100<T>;
    <T>(fn: Comparator<T, boolean>, a: List<T>): unionWith_110<T>;
    <$SEL extends "1">(): <T>(fn: Comparator<T, boolean>) => unionWith_100<T>;
    <$SEL extends "11">(): <T>(fn: Comparator<T, boolean>, a: List<T>) => unionWith_110<T>;
    <$SEL extends "111">(): <T>(fn: Comparator<T, boolean>, a: List<T>, b: List<T>) => unionWith_111<T>;
    <T>(fn: Comparator<T, boolean>, a: List<T>, b: List<T>): unionWith_111<T>;
};
type unionWith_100<T> = {
    (a: List<T>): unionWith_110<T>;
    <$SEL extends "1">(): (a: List<T>) => unionWith_110<T>;
    <$SEL extends "11">(): (a: List<T>, b: List<T>) => unionWith_111<T>;
    (a: List<T>, b: List<T>): unionWith_111<T>;
};
type unionWith_110<T> = {
    (b: List<T>): unionWith_111<T>;
};
type unionWith_111<T> = T[];
export = unionWith;
