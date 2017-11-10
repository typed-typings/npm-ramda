import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const mapAccumRight: mapAccumRight_000;
type mapAccumRight_000 = {
    /**
     * The `mapAccumRight` function behaves like a combination of map and reduce; it
     * applies a function to each element of a list, passing an accumulating
     * parameter from right to left, and returning a final value of this
     * accumulator together with the new list.
     *
     * Similar to [`mapAccum`](#mapAccum), except moves through the input list from
     * the right to the left.
     *
     * The iterator function receives two arguments, *value* and *acc*, and should
     * return a tuple *[value, acc]*.
     *
     * @func
     * @memberOf R
     * @since v0.10.0
     * @category List
     * @sig ((x, acc) -> (y, acc)) -> acc -> [x] -> ([y], acc)
     * @param {Function} fn The function to be called on every element of the input `list`.
     * @param {*} acc The accumulator value.
     * @param {Array} list The list to iterate over.
     * @return {*} The final, accumulated value.
     * @see R.addIndex, R.mapAccum
     * @example
     *
     *      var digits = ['1', '2', '3', '4'];
     *      var append = (a, b) => [a + b, a + b];
     *
     *      R.mapAccumRight(append, 5, digits); //=> [['12345', '2345', '345', '45'], '12345']
     * @symb R.mapAccumRight(f, a, [b, c, d]) = [
     *   [
     *     f(b, f(c, f(d, a)[0])[0])[1],
     *     f(c, f(d, a)[0])[1],
     *     f(d, a)[1],
     *   ]
     *   f(b, f(c, f(d, a)[0])[0])[0],
     * ]
     */
    <T, U, R>(fn: (value: T, accumulator: U) => [R, U]): mapAccumRight_100<T, U, R>;
    <U>(_fn: PH, initial: U): mapAccumRight_010<U>;
    <T, U, R>(fn: (value: T, accumulator: U) => [R, U], initial: U): mapAccumRight_110<T, U, R>;
    <T>(_fn: PH, _initial: PH, list: List<T>): mapAccumRight_001<T>;
    <T, U>(_fn: PH, initial: U, list: List<T>): mapAccumRight_011<T, U>;
    <T, U, R>(fn: (value: T, accumulator: U) => [R, U], _initial: PH, list: List<T>): mapAccumRight_101<T, U, R>;
    <$SEL extends "111">(): <T, U, R>(fn: (value: T, accumulator: U) => [R, U], initial: U, list: List<T>) => mapAccumRight_111<U, R>;
    <$SEL extends "101">(): <T, U, R>(fn: (value: T, accumulator: U) => [R, U], _initial: PH, list: List<T>) => mapAccumRight_101<T, U, R>;
    <$SEL extends "011">(): <T, U>(_fn: PH, initial: U, list: List<T>) => mapAccumRight_011<T, U>;
    <$SEL extends "001">(): <T>(_fn: PH, _initial: PH, list: List<T>) => mapAccumRight_001<T>;
    <$SEL extends "11">(): <T, U, R>(fn: (value: T, accumulator: U) => [R, U], initial: U) => mapAccumRight_110<T, U, R>;
    <$SEL extends "01">(): <U>(_fn: PH, initial: U) => mapAccumRight_010<U>;
    <$SEL extends "1">(): <T, U, R>(fn: (value: T, accumulator: U) => [R, U]) => mapAccumRight_100<T, U, R>;
    <T, U, R>(fn: (value: T, accumulator: U) => [R, U], initial: U, list: List<T>): mapAccumRight_111<U, R>;
};
type mapAccumRight_100<T, U, R> = {
    (initial: U): mapAccumRight_110<T, U, R>;
    (_initial: PH, list: List<T>): mapAccumRight_101<T, U, R>;
    <$SEL extends "11">(): (initial: U, list: List<T>) => mapAccumRight_111<U, R>;
    <$SEL extends "01">(): (_initial: PH, list: List<T>) => mapAccumRight_101<T, U, R>;
    <$SEL extends "1">(): (initial: U) => mapAccumRight_110<T, U, R>;
    (initial: U, list: List<T>): mapAccumRight_111<U, R>;
};
type mapAccumRight_010<U> = {
    <T, R>(fn: (value: T, accumulator: U) => [R, U]): mapAccumRight_110<T, U, R>;
    <T>(_fn: PH, list: List<T>): mapAccumRight_011<T, U>;
    <$SEL extends "11">(): <T, R>(fn: (value: T, accumulator: U) => [R, U], list: List<T>) => mapAccumRight_111<U, R>;
    <$SEL extends "01">(): <T>(_fn: PH, list: List<T>) => mapAccumRight_011<T, U>;
    <$SEL extends "1">(): <T, R>(fn: (value: T, accumulator: U) => [R, U]) => mapAccumRight_110<T, U, R>;
    <T, R>(fn: (value: T, accumulator: U) => [R, U], list: List<T>): mapAccumRight_111<U, R>;
};
type mapAccumRight_110<T, U, R> = {
    (list: List<T>): mapAccumRight_111<U, R>;
};
type mapAccumRight_001<T> = {
    <U, R>(fn: (value: T, accumulator: U) => [R, U]): mapAccumRight_101<T, U, R>;
    <U>(_fn: PH, initial: U): mapAccumRight_011<T, U>;
    <$SEL extends "11">(): <U, R>(fn: (value: T, accumulator: U) => [R, U], initial: U) => mapAccumRight_111<U, R>;
    <$SEL extends "01">(): <U>(_fn: PH, initial: U) => mapAccumRight_011<T, U>;
    <$SEL extends "1">(): <U, R>(fn: (value: T, accumulator: U) => [R, U]) => mapAccumRight_101<T, U, R>;
    <U, R>(fn: (value: T, accumulator: U) => [R, U], initial: U): mapAccumRight_111<U, R>;
};
type mapAccumRight_101<T, U, R> = {
    (initial: U): mapAccumRight_111<U, R>;
};
type mapAccumRight_011<T, U> = {
    <R>(fn: (value: T, accumulator: U) => [R, U]): mapAccumRight_111<U, R>;
};
type mapAccumRight_111<U, R> = [R[], U];
export = mapAccumRight;
