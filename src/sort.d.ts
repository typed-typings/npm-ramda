import { Comparator, List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const sort: sort_00;
type sort_00 = {
    /**
     * Returns a copy of the list, sorted according to the comparator function,
     * which should accept two values at a time and return a negative number if the
     * first value is smaller, a positive number if it's larger, and zero if they
     * are equal. Please note that this is a **copy** of the list. It does not
     * modify the original.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category List
     * @sig ((a, a) -> Number) -> [a] -> [a]
     * @param {Function} comparator A sorting function :: a -> b -> Int
     * @param {Array} list The list to sort
     * @return {Array} a new array with its elements sorted by the comparator function.
     * @example
     *
     *      var diff = function(a, b) { return a - b; };
     *      R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
     */
    <T>(fn: Comparator<T, number>): sort_10<T>;
    <T>(_fn: PH, list: List<T>): sort_01<T>;
    <$SEL extends "11">(): <T>(fn: Comparator<T, number>, list: List<T>) => sort_11<T>;
    <$SEL extends "01">(): <T>(_fn: PH, list: List<T>) => sort_01<T>;
    <$SEL extends "1">(): <T>(fn: Comparator<T, number>) => sort_10<T>;
    <T>(fn: Comparator<T, number>, list: List<T>): sort_11<T>;
};
type sort_10<T> = {
    (list: List<T>): sort_11<T>;
};
type sort_01<T> = {
    (fn: Comparator<T, number>): sort_11<T>;
};
type sort_11<T> = T[];
export = sort;
