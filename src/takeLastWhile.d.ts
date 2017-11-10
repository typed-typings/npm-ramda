import { List, Predicate } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const takeLastWhile: takeLastWhile_00;
type takeLastWhile_00 = {
    /**
     * Returns a new list containing the last `n` elements of a given list, passing
     * each value to the supplied predicate function, and terminating when the
     * predicate function returns `false`. Excludes the element that caused the
     * predicate function to fail. The predicate function is passed one argument:
     * *(value)*.
     *
     * @func
     * @memberOf R
     * @since v0.16.0
     * @category List
     * @sig (a -> Boolean) -> [a] -> [a]
     * @sig (a -> Boolean) -> String -> String
     * @param {Function} fn The function called per iteration.
     * @param {Array} xs The collection to iterate over.
     * @return {Array} A new array.
     * @see R.dropLastWhile, R.addIndex
     * @example
     *
     *      var isNotOne = x => x !== 1;
     *
     *      R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]
     *
     *      R.takeLastWhile(x => x !== 'R' , 'Ramda'); //=> 'amda'
     */
    <T>(fn: Predicate<T>): takeLastWhile_10<T>;
    <T>(_fn: PH, list: List<T>): takeLastWhile_01<T>;
    <$SEL extends "11">(): <T>(fn: Predicate<T>, list: List<T>) => takeLastWhile_11<T>;
    <$SEL extends "01">(): <T>(_fn: PH, list: List<T>) => takeLastWhile_01<T>;
    <$SEL extends "1">(): <T>(fn: Predicate<T>) => takeLastWhile_10<T>;
    <T>(fn: Predicate<T>, list: List<T>): takeLastWhile_11<T>;
};
type takeLastWhile_10<T> = {
    (list: List<T>): takeLastWhile_11<T>;
};
type takeLastWhile_01<T> = {
    (fn: Predicate<T>): takeLastWhile_11<T>;
};
type takeLastWhile_11<T> = T[];
export = takeLastWhile;
