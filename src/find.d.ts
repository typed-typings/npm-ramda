import { List, Predicate } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const find: find_00;
type find_00 = {
    /**
     * Returns the first element of the list which matches the predicate, or
     * `undefined` if no element matches.
     *
     * Dispatches to the `find` method of the second argument, if present.
     *
     * Acts as a transducer if a transformer is given in list position.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category List
     * @sig (a -> Boolean) -> [a] -> a | undefined
     * @param {Function} fn The predicate function used to determine if the element is the
     *        desired one.
     * @param {Array} list The array to consider.
     * @return {Object} The element found, or `undefined`.
     * @see R.transduce
     * @example
     *
     *      var xs = [{a: 1}, {a: 2}, {a: 3}];
     *      R.find(R.propEq('a', 2))(xs); //=> {a: 2}
     *      R.find(R.propEq('a', 4))(xs); //=> undefined
     */
    <T>(fn: Predicate<T>): find_10<T>;
    <T>(_fn: PH, list: List<T>): find_01<T>;
    <$SEL extends "11">(): <T>(fn: Predicate<T>, list: List<T>) => find_11<T>;
    <$SEL extends "01">(): <T>(_fn: PH, list: List<T>) => find_01<T>;
    <$SEL extends "1">(): <T>(fn: Predicate<T>) => find_10<T>;
    <T>(fn: Predicate<T>, list: List<T>): find_11<T>;
};
type find_10<T> = {
    (list: List<T>): find_11<T>;
};
type find_01<T> = {
    (fn: Predicate<T>): find_11<T>;
};
type find_11<T> = T | undefined;
export = find;
