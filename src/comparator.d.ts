import { Comparator } from "./$types";
declare const comparator: comparator_0;
type comparator_0 = {
    /**
     * Makes a comparator function out of a function that reports whether the first
     * element is less than the second.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category Function
     * @sig ((a, b) -> Boolean) -> ((a, b) -> Number)
     * @param {Function} pred A predicate function of arity two which will return `true` if the first argument
     * is less than the second, `false` otherwise
     * @return {Function} A Function :: a -> b -> Int that returns `-1` if a < b, `1` if b < a, otherwise `0`
     * @example
     *
     *      var byAge = R.comparator((a, b) => a.age < b.age);
     *      var people = [
     *        // ...
     *      ];
     *      var peopleByIncreasingAge = R.sort(byAge, people);
     */
    <T>(fn: Comparator<T, boolean>): comparator_1<T>;
};
type comparator_1<T> = Comparator<T, number>;
export = comparator;
