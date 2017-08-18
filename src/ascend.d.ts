import { Morphism, Ordered } from "./$types";
/**
 * Makes an ascending comparator function out of a function that returns a value
 * that can be compared with `<` and `>`.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Function
 * @sig Ord b => (a -> b) -> a -> a -> Number
 * @param {Function} fn A function of arity one that returns a value that can be compared
 * @param {*} a The first item to be compared.
 * @param {*} b The second item to be compared.
 * @return {Number} `-1` if fn(a) < fn(b), `1` if fn(b) < fn(a), otherwise `0`
 * @see R.descend
 * @example
 *
 *      var byAge = R.ascend(R.prop('age'));
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByYoungestFirst = R.sort(byAge, people);
 */
declare const ascend: ascend_000;
type ascend_000 = {
    <T>(fn: Morphism<T, Ordered>): ascend_100<T>;
    <T>(fn: Morphism<T, Ordered>, a: T): ascend_110<T>;
    <T>(fn: Morphism<T, Ordered>, a: T, b: T): ascend_111;
};
type ascend_100<T> = {
    (a: T): ascend_110<T>;
    (a: T, b: T): ascend_111;
};
type ascend_110<T> = {
    (b: T): ascend_111;
};
type ascend_111 = number;
export = ascend;
