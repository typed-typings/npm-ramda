import { List, Predicate } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const any: any_00;
type any_00 = {
    /**
     * Returns `true` if at least one of elements of the list match the predicate,
     * `false` otherwise.
     *
     * Dispatches to the `any` method of the second argument, if present.
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
     * @return {Boolean} `true` if the predicate is satisfied by at least one element, `false`
     *         otherwise.
     * @see R.all, R.none, R.transduce
     * @example
     *
     *      var lessThan0 = R.flip(R.lt)(0);
     *      var lessThan2 = R.flip(R.lt)(2);
     *      R.any(lessThan0)([1, 2]); //=> false
     *      R.any(lessThan2)([1, 2]); //=> true
     */
    <T>(fn: Predicate<T>): any_10<T>;
    <T>(_fn: PH, list: List<T>): any_01<T>;
    <$SEL extends "11">(): <T>(fn: Predicate<T>, list: List<T>) => any_11;
    <$SEL extends "01">(): <T>(_fn: PH, list: List<T>) => any_01<T>;
    <$SEL extends "1">(): <T>(fn: Predicate<T>) => any_10<T>;
    <T>(fn: Predicate<T>, list: List<T>): any_11;
};
type any_10<T> = {
    (list: List<T>): any_11;
};
type any_01<T> = {
    (fn: Predicate<T>): any_11;
};
type any_11 = boolean;
export = any;
