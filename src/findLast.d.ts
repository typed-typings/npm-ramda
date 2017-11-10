import { List, Predicate } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const findLast: findLast_00;
type findLast_00 = {
    /**
     * Returns the last element of the list which matches the predicate, or
     * `undefined` if no element matches.
     *
     * Acts as a transducer if a transformer is given in list position.
     *
     * @func
     * @memberOf R
     * @since v0.1.1
     * @category List
     * @sig (a -> Boolean) -> [a] -> a | undefined
     * @param {Function} fn The predicate function used to determine if the element is the
     * desired one.
     * @param {Array} list The array to consider.
     * @return {Object} The element found, or `undefined`.
     * @see R.transduce
     * @example
     *
     *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
     *      R.findLast(R.propEq('a', 1))(xs); //=> {a: 1, b: 1}
     *      R.findLast(R.propEq('a', 4))(xs); //=> undefined
     */
    <T>(fn: Predicate<T>): findLast_10<T>;
    <T>(_fn: PH, list: List<T>): findLast_01<T>;
    <$SEL extends "11">(): <T>(fn: Predicate<T>, list: List<T>) => findLast_11<T>;
    <$SEL extends "01">(): <T>(_fn: PH, list: List<T>) => findLast_01<T>;
    <$SEL extends "1">(): <T>(fn: Predicate<T>) => findLast_10<T>;
    <T>(fn: Predicate<T>, list: List<T>): findLast_11<T>;
};
type findLast_10<T> = {
    (list: List<T>): findLast_11<T>;
};
type findLast_01<T> = {
    (fn: Predicate<T>): findLast_11<T>;
};
type findLast_11<T> = T | undefined;
export = findLast;
