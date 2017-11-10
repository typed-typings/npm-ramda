import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const mapAccum: mapAccum_000;
type mapAccum_000 = {
    /**
     * The `mapAccum` function behaves like a combination of map and reduce; it
     * applies a function to each element of a list, passing an accumulating
     * parameter from left to right, and returning a final value of this
     * accumulator together with the new list.
     *
     * The iterator function receives two arguments, *acc* and *value*, and should
     * return a tuple *[acc, value]*.
     *
     * @func
     * @memberOf R
     * @since v0.10.0
     * @category List
     * @sig ((acc, x) -> (acc, y)) -> acc -> [x] -> (acc, [y])
     * @param {Function} fn The function to be called on every element of the input `list`.
     * @param {*} acc The accumulator value.
     * @param {Array} list The list to iterate over.
     * @return {*} The final, accumulated value.
     * @see R.addIndex, R.mapAccumRight
     * @example
     *
     *      var digits = ['1', '2', '3', '4'];
     *      var appender = (a, b) => [a + b, a + b];
     *
     *      R.mapAccum(appender, 0, digits); //=> ['01234', ['01', '012', '0123', '01234']]
     * @symb R.mapAccum(f, a, [b, c, d]) = [
     *   f(f(f(a, b)[0], c)[0], d)[0],
     *   [
     *     f(a, b)[1],
     *     f(f(a, b)[0], c)[1],
     *     f(f(f(a, b)[0], c)[0], d)[1]
     *   ]
     * ]
     */
    <T, U, R>(fn: (accumulator: U, value: T) => [U, R]): mapAccum_100<T, U, R>;
    <U>(_fn: PH, initial: U): mapAccum_010<U>;
    <T, U, R>(fn: (accumulator: U, value: T) => [U, R], initial: U): mapAccum_110<T, U, R>;
    <T>(_fn: PH, _initial: PH, list: List<T>): mapAccum_001<T>;
    <T, U>(_fn: PH, initial: U, list: List<T>): mapAccum_011<T, U>;
    <T, U, R>(fn: (accumulator: U, value: T) => [U, R], _initial: PH, list: List<T>): mapAccum_101<T, U, R>;
    <$SEL extends "111">(): <T, U, R>(fn: (accumulator: U, value: T) => [U, R], initial: U, list: List<T>) => mapAccum_111<U, R>;
    <$SEL extends "101">(): <T, U, R>(fn: (accumulator: U, value: T) => [U, R], _initial: PH, list: List<T>) => mapAccum_101<T, U, R>;
    <$SEL extends "011">(): <T, U>(_fn: PH, initial: U, list: List<T>) => mapAccum_011<T, U>;
    <$SEL extends "001">(): <T>(_fn: PH, _initial: PH, list: List<T>) => mapAccum_001<T>;
    <$SEL extends "11">(): <T, U, R>(fn: (accumulator: U, value: T) => [U, R], initial: U) => mapAccum_110<T, U, R>;
    <$SEL extends "01">(): <U>(_fn: PH, initial: U) => mapAccum_010<U>;
    <$SEL extends "1">(): <T, U, R>(fn: (accumulator: U, value: T) => [U, R]) => mapAccum_100<T, U, R>;
    <T, U, R>(fn: (accumulator: U, value: T) => [U, R], initial: U, list: List<T>): mapAccum_111<U, R>;
};
type mapAccum_100<T, U, R> = {
    (initial: U): mapAccum_110<T, U, R>;
    (_initial: PH, list: List<T>): mapAccum_101<T, U, R>;
    <$SEL extends "11">(): (initial: U, list: List<T>) => mapAccum_111<U, R>;
    <$SEL extends "01">(): (_initial: PH, list: List<T>) => mapAccum_101<T, U, R>;
    <$SEL extends "1">(): (initial: U) => mapAccum_110<T, U, R>;
    (initial: U, list: List<T>): mapAccum_111<U, R>;
};
type mapAccum_010<U> = {
    <T, R>(fn: (accumulator: U, value: T) => [U, R]): mapAccum_110<T, U, R>;
    <T>(_fn: PH, list: List<T>): mapAccum_011<T, U>;
    <$SEL extends "11">(): <T, R>(fn: (accumulator: U, value: T) => [U, R], list: List<T>) => mapAccum_111<U, R>;
    <$SEL extends "01">(): <T>(_fn: PH, list: List<T>) => mapAccum_011<T, U>;
    <$SEL extends "1">(): <T, R>(fn: (accumulator: U, value: T) => [U, R]) => mapAccum_110<T, U, R>;
    <T, R>(fn: (accumulator: U, value: T) => [U, R], list: List<T>): mapAccum_111<U, R>;
};
type mapAccum_110<T, U, R> = {
    (list: List<T>): mapAccum_111<U, R>;
};
type mapAccum_001<T> = {
    <U, R>(fn: (accumulator: U, value: T) => [U, R]): mapAccum_101<T, U, R>;
    <U>(_fn: PH, initial: U): mapAccum_011<T, U>;
    <$SEL extends "11">(): <U, R>(fn: (accumulator: U, value: T) => [U, R], initial: U) => mapAccum_111<U, R>;
    <$SEL extends "01">(): <U>(_fn: PH, initial: U) => mapAccum_011<T, U>;
    <$SEL extends "1">(): <U, R>(fn: (accumulator: U, value: T) => [U, R]) => mapAccum_101<T, U, R>;
    <U, R>(fn: (accumulator: U, value: T) => [U, R], initial: U): mapAccum_111<U, R>;
};
type mapAccum_101<T, U, R> = {
    (initial: U): mapAccum_111<U, R>;
};
type mapAccum_011<T, U> = {
    <R>(fn: (accumulator: U, value: T) => [U, R]): mapAccum_111<U, R>;
};
type mapAccum_111<U, R> = [U, R[]];
export = mapAccum;
