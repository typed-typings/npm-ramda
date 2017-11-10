import { List, Predicate } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const findIndex: findIndex_00;
type findIndex_00 = {
    /**
     * Returns the index of the first element of the list which matches the
     * predicate, or `-1` if no element matches.
     *
     * Acts as a transducer if a transformer is given in list position.
     *
     * @func
     * @memberOf R
     * @since v0.1.1
     * @category List
     * @sig (a -> Boolean) -> [a] -> Number
     * @param {Function} fn The predicate function used to determine if the element is the
     * desired one.
     * @param {Array} list The array to consider.
     * @return {Number} The index of the element found, or `-1`.
     * @see R.transduce
     * @example
     *
     *      var xs = [{a: 1}, {a: 2}, {a: 3}];
     *      R.findIndex(R.propEq('a', 2))(xs); //=> 1
     *      R.findIndex(R.propEq('a', 4))(xs); //=> -1
     */
    <T>(fn: Predicate<T>): findIndex_10<T>;
    <T>(_fn: PH, list: List<T>): findIndex_01<T>;
    <$SEL extends "11">(): <T>(fn: Predicate<T>, list: List<T>) => findIndex_11;
    <$SEL extends "01">(): <T>(_fn: PH, list: List<T>) => findIndex_01<T>;
    <$SEL extends "1">(): <T>(fn: Predicate<T>) => findIndex_10<T>;
    <T>(fn: Predicate<T>, list: List<T>): findIndex_11;
};
type findIndex_10<T> = {
    (list: List<T>): findIndex_11;
};
type findIndex_01<T> = {
    (fn: Predicate<T>): findIndex_11;
};
type findIndex_11 = number;
export = findIndex;
