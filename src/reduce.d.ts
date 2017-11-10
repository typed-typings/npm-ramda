import { List, Reduced } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const reduce: reduce_000;
type reduce_000 = {
    /**
     * Returns a single item by iterating through the list, successively calling
     * the iterator function and passing it an accumulator value and the current
     * value from the array, and then passing the result to the next call.
     *
     * The iterator function receives two values: *(acc, value)*. It may use
     * [`R.reduced`](#reduced) to shortcut the iteration.
     *
     * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function
     * is *(value, acc)*.
     *
     * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
     * arrays), unlike the native `Array.prototype.reduce` method. For more details
     * on this behavior, see:
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
     *
     * Dispatches to the `reduce` method of the third argument, if present. When
     * doing so, it is up to the user to handle the [`R.reduced`](#reduced)
     * shortcuting, as this is not implemented by `reduce`.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category List
     * @sig ((a, b) -> a) -> a -> [b] -> a
     * @param {Function} fn The iterator function. Receives two values, the accumulator and the
     *        current element from the array.
     * @param {*} acc The accumulator value.
     * @param {Array} list The list to iterate over.
     * @return {*} The final, accumulated value.
     * @see R.reduced, R.addIndex, R.reduceRight
     * @example
     *
     *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
     *      //          -               -10
     *      //         / \              / \
     *      //        -   4           -6   4
     *      //       / \              / \
     *      //      -   3   ==>     -3   3
     *      //     / \              / \
     *      //    -   2           -1   2
     *      //   / \              / \
     *      //  0   1            0   1
     *
     * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
     */
    <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U): reduce_100<T, U>;
    <U>(_fn: PH, initial: U): reduce_010<U>;
    <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): reduce_110<T, U>;
    <T>(_fn: PH, _initial: PH, values: List<T>): reduce_001<T>;
    <T, U>(_fn: PH, initial: U, values: List<T>): reduce_011<T, U>;
    <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U, _initial: PH, values: List<T>): reduce_101<T, U>;
    <$SEL extends "111">(): <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, values: List<T>) => reduce_111<U>;
    <$SEL extends "101">(): <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U, _initial: PH, values: List<T>) => reduce_101<T, U>;
    <$SEL extends "011">(): <T, U>(_fn: PH, initial: U, values: List<T>) => reduce_011<T, U>;
    <$SEL extends "001">(): <T>(_fn: PH, _initial: PH, values: List<T>) => reduce_001<T>;
    <$SEL extends "11">(): <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U) => reduce_110<T, U>;
    <$SEL extends "01">(): <U>(_fn: PH, initial: U) => reduce_010<U>;
    <$SEL extends "1">(): <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U) => reduce_100<T, U>;
    <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, values: List<T>): reduce_111<U>;
};
type reduce_100<T, U> = {
    (initial: U): reduce_110<T, U>;
    (_initial: PH, values: List<T>): reduce_101<T, U>;
    <$SEL extends "11">(): (initial: U, values: List<T>) => reduce_111<U>;
    <$SEL extends "01">(): (_initial: PH, values: List<T>) => reduce_101<T, U>;
    <$SEL extends "1">(): (initial: U) => reduce_110<T, U>;
    (initial: U, values: List<T>): reduce_111<U>;
};
type reduce_010<U> = {
    <T>(fn: (accumulator: U, value: T) => Reduced<U> | U): reduce_110<T, U>;
    <T>(_fn: PH, values: List<T>): reduce_011<T, U>;
    <$SEL extends "11">(): <T>(fn: (accumulator: U, value: T) => Reduced<U> | U, values: List<T>) => reduce_111<U>;
    <$SEL extends "01">(): <T>(_fn: PH, values: List<T>) => reduce_011<T, U>;
    <$SEL extends "1">(): <T>(fn: (accumulator: U, value: T) => Reduced<U> | U) => reduce_110<T, U>;
    <T>(fn: (accumulator: U, value: T) => Reduced<U> | U, values: List<T>): reduce_111<U>;
};
type reduce_110<T, U> = {
    (values: List<T>): reduce_111<U>;
};
type reduce_001<T> = {
    <U>(fn: (accumulator: U, value: T) => Reduced<U> | U): reduce_101<T, U>;
    <U>(_fn: PH, initial: U): reduce_011<T, U>;
    <$SEL extends "11">(): <U>(fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U) => reduce_111<U>;
    <$SEL extends "01">(): <U>(_fn: PH, initial: U) => reduce_011<T, U>;
    <$SEL extends "1">(): <U>(fn: (accumulator: U, value: T) => Reduced<U> | U) => reduce_101<T, U>;
    <U>(fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): reduce_111<U>;
};
type reduce_101<T, U> = {
    (initial: U): reduce_111<U>;
};
type reduce_011<T, U> = {
    (fn: (accumulator: U, value: T) => Reduced<U> | U): reduce_111<U>;
};
type reduce_111<U> = U;
export = reduce;
