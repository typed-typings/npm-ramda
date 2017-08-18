import { Dictionary, List, Predicate } from "./$types";
/**
 * Takes a predicate and a list or other `Filterable` object and returns the
 * pair of filterable objects of the same type of elements which do and do not
 * satisfy, the predicate, respectively. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> [f a, f a]
 * @param {Function} pred A predicate to determine which side the element belongs to.
 * @param {Array} filterable the list (or other filterable) to partition.
 * @return {Array} An array, containing first the subset of elements that satisfy the
 *         predicate, and second the subset of elements that do not satisfy.
 * @see R.filter, R.reject
 * @example
 *
 *      R.partition(R.contains('s'), ['sss', 'ttt', 'foo', 'bars']);
 *      // => [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]
 *
 *      R.partition(R.contains('s'), { a: 'sss', b: 'ttt', foo: 'bars' });
 *      // => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ]
 */
declare const partition: partition_00;
type partition_00 = {
    <T>(fn: Predicate<T>): partition_10<T>;
    <T>(fn: Predicate<T>, list: List<T>): partition_list_11<T>;
    <T, U extends Dictionary<T>>(fn: Predicate<T>, dictionary: U): partition_object_11<T, U>;
    <$SEL extends "1">(): <T>(fn: Predicate<T>) => partition_10<T>;
    <$SEL extends "11", $KIND extends "list">(): <T>(fn: Predicate<T>, list: List<T>) => partition_list_11<T>;
    <$SEL extends "11", $KIND extends "object">(): <T, U extends Dictionary<T>>(fn: Predicate<T>, dictionary: U) => partition_object_11<T, U>;
    <$SEL extends "11", $KIND extends "mixed">(): <T, U extends List<T> | Dictionary<T>>(fn: Predicate<T>, target: U) => partition_mixed_11<T, U>;
    <T, U extends List<T> | Dictionary<T>>(fn: Predicate<T>, target: U): partition_mixed_11<T, U>;
};
type partition_10<T> = {
    (list: List<T>): partition_list_11<T>;
    <U extends Dictionary<T>>(dictionary: U): partition_object_11<T, U>;
    <$SEL extends "1", $KIND extends "list">(): (list: List<T>) => partition_list_11<T>;
    <$SEL extends "1", $KIND extends "object">(): <U extends Dictionary<T>>(dictionary: U) => partition_object_11<T, U>;
    <$SEL extends "1", $KIND extends "mixed">(): <U extends List<T> | Dictionary<T>>(target: U) => partition_mixed_11<T, U>;
    <U extends List<T> | Dictionary<T>>(target: U): partition_mixed_11<T, U>;
};
type partition_list_11<T> = [T[], T[]];
type partition_object_11<T, U extends Dictionary<T>> = [Partial<U>, Partial<U>];
type partition_mixed_11<T, U extends List<T> | Dictionary<T>> = [T[], T[]] | [Partial<U>, Partial<U>];
export = partition;
