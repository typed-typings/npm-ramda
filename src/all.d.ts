import { List, Predicate } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const all: all_00;
type all_00 = {
    /**
     * Returns `true` if all elements of the list match the predicate, `false` if
     * there are any that don't.
     *
     * Dispatches to the `all` method of the second argument, if present.
     *
     * Acts as a transducer if a transformer is given in list position.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category List
     * @sig (a -> Boolean) -> [a] -> Boolean
     * @param {Function} fn The predicate function.
     * @param {Array} list The array to consider.
     * @return {Boolean} `true` if the predicate is satisfied by every element, `false`
     *         otherwise.
     * @see R.any, R.none, R.transduce
     * @example
     *
     *      var equals3 = R.equals(3);
     *      R.all(equals3)([3, 3, 3, 3]); //=> true
     *      R.all(equals3)([3, 3, 1, 3]); //=> false
     */
    <T>(fn: Predicate<T>): all_10<T>;
    <T>(_fn: PH, list: List<T>): all_01<T>;
    <$SEL extends "11">(): <T>(fn: Predicate<T>, list: List<T>) => all_11;
    <$SEL extends "01">(): <T>(_fn: PH, list: List<T>) => all_01<T>;
    <$SEL extends "1">(): <T>(fn: Predicate<T>) => all_10<T>;
    <T>(fn: Predicate<T>, list: List<T>): all_11;
};
type all_10<T> = {
    (list: List<T>): all_11;
};
type all_01<T> = {
    (fn: Predicate<T>): all_11;
};
type all_11 = boolean;
export = all;
