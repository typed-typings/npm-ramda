import { Comparator, List } from "./$types";
/**
 * Combines two lists into a set (i.e. no duplicates) composed of those
 * elements common to both lists. Duplication is determined according to the
 * value returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate function that determines whether
 *        the two supplied elements are equal.
 * @param {Array} list1 One list of items to compare
 * @param {Array} list2 A second list of items to compare
 * @return {Array} A new list containing those elements common to both lists.
 * @see R.innerJoin
 * @deprecated since v0.24.0
 * @example
 *
 *      var buffaloSpringfield = [
 *        {id: 824, name: 'Richie Furay'},
 *        {id: 956, name: 'Dewey Martin'},
 *        {id: 313, name: 'Bruce Palmer'},
 *        {id: 456, name: 'Stephen Stills'},
 *        {id: 177, name: 'Neil Young'}
 *      ];
 *      var csny = [
 *        {id: 204, name: 'David Crosby'},
 *        {id: 456, name: 'Stephen Stills'},
 *        {id: 539, name: 'Graham Nash'},
 *        {id: 177, name: 'Neil Young'}
 *      ];
 *
 *      R.intersectionWith(R.eqBy(R.prop('id')), buffaloSpringfield, csny);
 *      //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
 */
declare const intersectionWith: intersectionWith_000;
type intersectionWith_000 = {
    <T>(fn: Comparator<T, boolean>): intersectionWith_100<T>;
    <T>(fn: Comparator<T, boolean>, a: List<T>): intersectionWith_110<T>;
    <$SEL extends "1">(): <T>(fn: Comparator<T, boolean>) => intersectionWith_100<T>;
    <$SEL extends "11">(): <T>(fn: Comparator<T, boolean>, a: List<T>) => intersectionWith_110<T>;
    <$SEL extends "111">(): <T>(fn: Comparator<T, boolean>, a: List<T>, b: List<T>) => intersectionWith_111<T>;
    <T>(fn: Comparator<T, boolean>, a: List<T>, b: List<T>): intersectionWith_111<T>;
};
type intersectionWith_100<T> = {
    (a: List<T>): intersectionWith_110<T>;
    <$SEL extends "1">(): (a: List<T>) => intersectionWith_110<T>;
    <$SEL extends "11">(): (a: List<T>, b: List<T>) => intersectionWith_111<T>;
    (a: List<T>, b: List<T>): intersectionWith_111<T>;
};
type intersectionWith_010<T> = {
    (fn: Comparator<T, boolean>): intersectionWith_110<T>;
    <$SEL extends "1">(): (fn: Comparator<T, boolean>) => intersectionWith_110<T>;
    <$SEL extends "11">(): (fn: Comparator<T, boolean>, b: List<T>) => intersectionWith_111<T>;
    (fn: Comparator<T, boolean>, b: List<T>): intersectionWith_111<T>;
};
type intersectionWith_110<T> = {
    (b: List<T>): intersectionWith_111<T>;
};
type intersectionWith_001<T> = {
    (fn: Comparator<T, boolean>): intersectionWith_101<T>;
    <$SEL extends "1">(): (fn: Comparator<T, boolean>) => intersectionWith_101<T>;
    <$SEL extends "11">(): (fn: Comparator<T, boolean>, a: List<T>) => intersectionWith_111<T>;
    (fn: Comparator<T, boolean>, a: List<T>): intersectionWith_111<T>;
};
type intersectionWith_101<T> = {
    (a: List<T>): intersectionWith_111<T>;
};
type intersectionWith_011<T> = {
    (fn: Comparator<T, boolean>): intersectionWith_111<T>;
};
type intersectionWith_111<T> = T[];
export = intersectionWith;
