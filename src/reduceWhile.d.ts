import { List, Reduced } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const reduceWhile: reduceWhile_0000;
type reduceWhile_0000 = {
    /**
     * Like [`reduce`](#reduce), `reduceWhile` returns a single item by iterating
     * through the list, successively calling the iterator function. `reduceWhile`
     * also takes a predicate that is evaluated before each step. If the predicate
     * returns `false`, it "short-circuits" the iteration and returns the current
     * value of the accumulator.
     *
     * @func
     * @memberOf R
     * @since v0.22.0
     * @category List
     * @sig ((a, b) -> Boolean) -> ((a, b) -> a) -> a -> [b] -> a
     * @param {Function} pred The predicate. It is passed the accumulator and the
     *        current element.
     * @param {Function} fn The iterator function. Receives two values, the
     *        accumulator and the current element.
     * @param {*} a The accumulator value.
     * @param {Array} list The list to iterate over.
     * @return {*} The final, accumulated value.
     * @see R.reduce, R.reduced
     * @example
     *
     *      var isOdd = (acc, x) => x % 2 === 1;
     *      var xs = [1, 3, 5, 60, 777, 800];
     *      R.reduceWhile(isOdd, R.add, 0, xs); //=> 9
     *
     *      var ys = [2, 4, 6]
     *      R.reduceWhile(isOdd, R.add, 111, ys); //=> 111
     */
    <T, U>(pred: (accumulator: U, value: T) => boolean): reduceWhile_1000<T, U>;
    <T, U>(_pred: PH, fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_0100<T, U>;
    <T, U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_1100<T, U>;
    <U>(_pred: PH, _fn: PH, initial: U): reduceWhile_0010<U>;
    <T, U>(_pred: PH, fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): reduceWhile_0110<T, U>;
    <T, U>(pred: (accumulator: U, value: T) => boolean, _fn: PH, initial: U): reduceWhile_1010<T, U>;
    <T, U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): reduceWhile_1110<T, U>;
    <T>(_pred: PH, _fn: PH, _initial: PH, values: List<T>): reduceWhile_0001<T>;
    <T, U>(_pred: PH, _fn: PH, initial: U, values: List<T>): reduceWhile_0011<T, U>;
    <T, U>(_pred: PH, fn: (accumulator: U, value: T) => Reduced<U> | U, _initial: PH, values: List<T>): reduceWhile_0101<T, U>;
    <T, U>(pred: (accumulator: U, value: T) => boolean, _fn: PH, _initial: PH, values: List<T>): reduceWhile_1001<T, U>;
    <T, U>(_pred: PH, fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, values: List<T>): reduceWhile_0111<T, U>;
    <T, U>(pred: (accumulator: U, value: T) => boolean, _fn: PH, initial: U, values: List<T>): reduceWhile_1011<T, U>;
    <T, U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U, _initial: PH, values: List<T>): reduceWhile_1101<T, U>;
    <$SEL extends "1111">(): <T, U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, values: List<T>) => reduceWhile_1111<U>;
    <$SEL extends "1101">(): <T, U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U, _initial: PH, values: List<T>) => reduceWhile_1101<T, U>;
    <$SEL extends "1011">(): <T, U>(pred: (accumulator: U, value: T) => boolean, _fn: PH, initial: U, values: List<T>) => reduceWhile_1011<T, U>;
    <$SEL extends "0111">(): <T, U>(_pred: PH, fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, values: List<T>) => reduceWhile_0111<T, U>;
    <$SEL extends "1001">(): <T, U>(pred: (accumulator: U, value: T) => boolean, _fn: PH, _initial: PH, values: List<T>) => reduceWhile_1001<T, U>;
    <$SEL extends "0101">(): <T, U>(_pred: PH, fn: (accumulator: U, value: T) => Reduced<U> | U, _initial: PH, values: List<T>) => reduceWhile_0101<T, U>;
    <$SEL extends "0011">(): <T, U>(_pred: PH, _fn: PH, initial: U, values: List<T>) => reduceWhile_0011<T, U>;
    <$SEL extends "0001">(): <T>(_pred: PH, _fn: PH, _initial: PH, values: List<T>) => reduceWhile_0001<T>;
    <$SEL extends "111">(): <T, U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U) => reduceWhile_1110<T, U>;
    <$SEL extends "101">(): <T, U>(pred: (accumulator: U, value: T) => boolean, _fn: PH, initial: U) => reduceWhile_1010<T, U>;
    <$SEL extends "011">(): <T, U>(_pred: PH, fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U) => reduceWhile_0110<T, U>;
    <$SEL extends "001">(): <U>(_pred: PH, _fn: PH, initial: U) => reduceWhile_0010<U>;
    <$SEL extends "11">(): <T, U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U) => reduceWhile_1100<T, U>;
    <$SEL extends "01">(): <T, U>(_pred: PH, fn: (accumulator: U, value: T) => Reduced<U> | U) => reduceWhile_0100<T, U>;
    <$SEL extends "1">(): <T, U>(pred: (accumulator: U, value: T) => boolean) => reduceWhile_1000<T, U>;
    <T, U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, values: List<T>): reduceWhile_1111<U>;
};
type reduceWhile_1000<T, U> = {
    (fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_1100<T, U>;
    (_fn: PH, initial: U): reduceWhile_1010<T, U>;
    (fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): reduceWhile_1110<T, U>;
    (_fn: PH, _initial: PH, values: List<T>): reduceWhile_1001<T, U>;
    (_fn: PH, initial: U, values: List<T>): reduceWhile_1011<T, U>;
    (fn: (accumulator: U, value: T) => Reduced<U> | U, _initial: PH, values: List<T>): reduceWhile_1101<T, U>;
    <$SEL extends "111">(): (fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, values: List<T>) => reduceWhile_1111<U>;
    <$SEL extends "101">(): (fn: (accumulator: U, value: T) => Reduced<U> | U, _initial: PH, values: List<T>) => reduceWhile_1101<T, U>;
    <$SEL extends "011">(): (_fn: PH, initial: U, values: List<T>) => reduceWhile_1011<T, U>;
    <$SEL extends "001">(): (_fn: PH, _initial: PH, values: List<T>) => reduceWhile_1001<T, U>;
    <$SEL extends "11">(): (fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U) => reduceWhile_1110<T, U>;
    <$SEL extends "01">(): (_fn: PH, initial: U) => reduceWhile_1010<T, U>;
    <$SEL extends "1">(): (fn: (accumulator: U, value: T) => Reduced<U> | U) => reduceWhile_1100<T, U>;
    (fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, values: List<T>): reduceWhile_1111<U>;
};
type reduceWhile_0100<T, U> = {
    (pred: (accumulator: U, value: T) => boolean): reduceWhile_1100<T, U>;
    (_pred: PH, initial: U): reduceWhile_0110<T, U>;
    (pred: (accumulator: U, value: T) => boolean, initial: U): reduceWhile_1110<T, U>;
    (_pred: PH, _initial: PH, values: List<T>): reduceWhile_0101<T, U>;
    (_pred: PH, initial: U, values: List<T>): reduceWhile_0111<T, U>;
    (pred: (accumulator: U, value: T) => boolean, _initial: PH, values: List<T>): reduceWhile_1101<T, U>;
    <$SEL extends "111">(): (pred: (accumulator: U, value: T) => boolean, initial: U, values: List<T>) => reduceWhile_1111<U>;
    <$SEL extends "101">(): (pred: (accumulator: U, value: T) => boolean, _initial: PH, values: List<T>) => reduceWhile_1101<T, U>;
    <$SEL extends "011">(): (_pred: PH, initial: U, values: List<T>) => reduceWhile_0111<T, U>;
    <$SEL extends "001">(): (_pred: PH, _initial: PH, values: List<T>) => reduceWhile_0101<T, U>;
    <$SEL extends "11">(): (pred: (accumulator: U, value: T) => boolean, initial: U) => reduceWhile_1110<T, U>;
    <$SEL extends "01">(): (_pred: PH, initial: U) => reduceWhile_0110<T, U>;
    <$SEL extends "1">(): (pred: (accumulator: U, value: T) => boolean) => reduceWhile_1100<T, U>;
    (pred: (accumulator: U, value: T) => boolean, initial: U, values: List<T>): reduceWhile_1111<U>;
};
type reduceWhile_1100<T, U> = {
    (initial: U): reduceWhile_1110<T, U>;
    (_initial: PH, values: List<T>): reduceWhile_1101<T, U>;
    <$SEL extends "11">(): (initial: U, values: List<T>) => reduceWhile_1111<U>;
    <$SEL extends "01">(): (_initial: PH, values: List<T>) => reduceWhile_1101<T, U>;
    <$SEL extends "1">(): (initial: U) => reduceWhile_1110<T, U>;
    (initial: U, values: List<T>): reduceWhile_1111<U>;
};
type reduceWhile_0010<U> = {
    <T>(pred: (accumulator: U, value: T) => boolean): reduceWhile_1010<T, U>;
    <T>(_pred: PH, fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_0110<T, U>;
    <T>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_1110<T, U>;
    <T>(_pred: PH, _fn: PH, values: List<T>): reduceWhile_0011<T, U>;
    <T>(_pred: PH, fn: (accumulator: U, value: T) => Reduced<U> | U, values: List<T>): reduceWhile_0111<T, U>;
    <T>(pred: (accumulator: U, value: T) => boolean, _fn: PH, values: List<T>): reduceWhile_1011<T, U>;
    <$SEL extends "111">(): <T>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U, values: List<T>) => reduceWhile_1111<U>;
    <$SEL extends "101">(): <T>(pred: (accumulator: U, value: T) => boolean, _fn: PH, values: List<T>) => reduceWhile_1011<T, U>;
    <$SEL extends "011">(): <T>(_pred: PH, fn: (accumulator: U, value: T) => Reduced<U> | U, values: List<T>) => reduceWhile_0111<T, U>;
    <$SEL extends "001">(): <T>(_pred: PH, _fn: PH, values: List<T>) => reduceWhile_0011<T, U>;
    <$SEL extends "11">(): <T>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U) => reduceWhile_1110<T, U>;
    <$SEL extends "01">(): <T>(_pred: PH, fn: (accumulator: U, value: T) => Reduced<U> | U) => reduceWhile_0110<T, U>;
    <$SEL extends "1">(): <T>(pred: (accumulator: U, value: T) => boolean) => reduceWhile_1010<T, U>;
    <T>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U, values: List<T>): reduceWhile_1111<U>;
};
type reduceWhile_1010<T, U> = {
    (fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_1110<T, U>;
    (_fn: PH, values: List<T>): reduceWhile_1011<T, U>;
    <$SEL extends "11">(): (fn: (accumulator: U, value: T) => Reduced<U> | U, values: List<T>) => reduceWhile_1111<U>;
    <$SEL extends "01">(): (_fn: PH, values: List<T>) => reduceWhile_1011<T, U>;
    <$SEL extends "1">(): (fn: (accumulator: U, value: T) => Reduced<U> | U) => reduceWhile_1110<T, U>;
    (fn: (accumulator: U, value: T) => Reduced<U> | U, values: List<T>): reduceWhile_1111<U>;
};
type reduceWhile_0110<T, U> = {
    (pred: (accumulator: U, value: T) => boolean): reduceWhile_1110<T, U>;
    (_pred: PH, values: List<T>): reduceWhile_0111<T, U>;
    <$SEL extends "11">(): (pred: (accumulator: U, value: T) => boolean, values: List<T>) => reduceWhile_1111<U>;
    <$SEL extends "01">(): (_pred: PH, values: List<T>) => reduceWhile_0111<T, U>;
    <$SEL extends "1">(): (pred: (accumulator: U, value: T) => boolean) => reduceWhile_1110<T, U>;
    (pred: (accumulator: U, value: T) => boolean, values: List<T>): reduceWhile_1111<U>;
};
type reduceWhile_1110<T, U> = {
    (values: List<T>): reduceWhile_1111<U>;
};
type reduceWhile_0001<T> = {
    <U>(pred: (accumulator: U, value: T) => boolean): reduceWhile_1001<T, U>;
    <U>(_pred: PH, fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_0101<T, U>;
    <U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_1101<T, U>;
    <U>(_pred: PH, _fn: PH, initial: U): reduceWhile_0011<T, U>;
    <U>(_pred: PH, fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): reduceWhile_0111<T, U>;
    <U>(pred: (accumulator: U, value: T) => boolean, _fn: PH, initial: U): reduceWhile_1011<T, U>;
    <$SEL extends "111">(): <U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U) => reduceWhile_1111<U>;
    <$SEL extends "101">(): <U>(pred: (accumulator: U, value: T) => boolean, _fn: PH, initial: U) => reduceWhile_1011<T, U>;
    <$SEL extends "011">(): <U>(_pred: PH, fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U) => reduceWhile_0111<T, U>;
    <$SEL extends "001">(): <U>(_pred: PH, _fn: PH, initial: U) => reduceWhile_0011<T, U>;
    <$SEL extends "11">(): <U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U) => reduceWhile_1101<T, U>;
    <$SEL extends "01">(): <U>(_pred: PH, fn: (accumulator: U, value: T) => Reduced<U> | U) => reduceWhile_0101<T, U>;
    <$SEL extends "1">(): <U>(pred: (accumulator: U, value: T) => boolean) => reduceWhile_1001<T, U>;
    <U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): reduceWhile_1111<U>;
};
type reduceWhile_1001<T, U> = {
    (fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_1101<T, U>;
    (_fn: PH, initial: U): reduceWhile_1011<T, U>;
    <$SEL extends "11">(): (fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U) => reduceWhile_1111<U>;
    <$SEL extends "01">(): (_fn: PH, initial: U) => reduceWhile_1011<T, U>;
    <$SEL extends "1">(): (fn: (accumulator: U, value: T) => Reduced<U> | U) => reduceWhile_1101<T, U>;
    (fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): reduceWhile_1111<U>;
};
type reduceWhile_0101<T, U> = {
    (pred: (accumulator: U, value: T) => boolean): reduceWhile_1101<T, U>;
    (_pred: PH, initial: U): reduceWhile_0111<T, U>;
    <$SEL extends "11">(): (pred: (accumulator: U, value: T) => boolean, initial: U) => reduceWhile_1111<U>;
    <$SEL extends "01">(): (_pred: PH, initial: U) => reduceWhile_0111<T, U>;
    <$SEL extends "1">(): (pred: (accumulator: U, value: T) => boolean) => reduceWhile_1101<T, U>;
    (pred: (accumulator: U, value: T) => boolean, initial: U): reduceWhile_1111<U>;
};
type reduceWhile_1101<T, U> = {
    (initial: U): reduceWhile_1111<U>;
};
type reduceWhile_0011<T, U> = {
    (pred: (accumulator: U, value: T) => boolean): reduceWhile_1011<T, U>;
    (_pred: PH, fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_0111<T, U>;
    <$SEL extends "11">(): (pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U) => reduceWhile_1111<U>;
    <$SEL extends "01">(): (_pred: PH, fn: (accumulator: U, value: T) => Reduced<U> | U) => reduceWhile_0111<T, U>;
    <$SEL extends "1">(): (pred: (accumulator: U, value: T) => boolean) => reduceWhile_1011<T, U>;
    (pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_1111<U>;
};
type reduceWhile_1011<T, U> = {
    (fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_1111<U>;
};
type reduceWhile_0111<T, U> = {
    (pred: (accumulator: U, value: T) => boolean): reduceWhile_1111<U>;
};
type reduceWhile_1111<U> = U;
export = reduceWhile;
