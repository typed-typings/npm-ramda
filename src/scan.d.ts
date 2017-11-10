import { List, Reduced } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const scan: scan_000;
type scan_000 = {
    /**
     * Scan is similar to [`reduce`](#reduce), but returns a list of successively
     * reduced values from the left
     *
     * @func
     * @memberOf R
     * @since v0.10.0
     * @category List
     * @sig ((a, b) -> a) -> a -> [b] -> [a]
     * @param {Function} fn The iterator function. Receives two values, the accumulator and the
     *        current element from the array
     * @param {*} acc The accumulator value.
     * @param {Array} list The list to iterate over.
     * @return {Array} A list of all intermediately reduced values.
     * @see R.reduce
     * @example
     *
     *      var numbers = [1, 2, 3, 4];
     *      var factorials = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]
     * @symb R.scan(f, a, [b, c]) = [a, f(a, b), f(f(a, b), c)]
     */
    <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U): scan_100<T, U>;
    <U>(_fn: PH, initial: U): scan_010<U>;
    <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): scan_110<T, U>;
    <T>(_fn: PH, _initial: PH, values: List<T>): scan_001<T>;
    <T, U>(_fn: PH, initial: U, values: List<T>): scan_011<T, U>;
    <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U, _initial: PH, values: List<T>): scan_101<T, U>;
    <$SEL extends "111">(): <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, values: List<T>) => scan_111<U>;
    <$SEL extends "101">(): <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U, _initial: PH, values: List<T>) => scan_101<T, U>;
    <$SEL extends "011">(): <T, U>(_fn: PH, initial: U, values: List<T>) => scan_011<T, U>;
    <$SEL extends "001">(): <T>(_fn: PH, _initial: PH, values: List<T>) => scan_001<T>;
    <$SEL extends "11">(): <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U) => scan_110<T, U>;
    <$SEL extends "01">(): <U>(_fn: PH, initial: U) => scan_010<U>;
    <$SEL extends "1">(): <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U) => scan_100<T, U>;
    <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, values: List<T>): scan_111<U>;
};
type scan_100<T, U> = {
    (initial: U): scan_110<T, U>;
    (_initial: PH, values: List<T>): scan_101<T, U>;
    <$SEL extends "11">(): (initial: U, values: List<T>) => scan_111<U>;
    <$SEL extends "01">(): (_initial: PH, values: List<T>) => scan_101<T, U>;
    <$SEL extends "1">(): (initial: U) => scan_110<T, U>;
    (initial: U, values: List<T>): scan_111<U>;
};
type scan_010<U> = {
    <T>(fn: (accumulator: U, value: T) => Reduced<U> | U): scan_110<T, U>;
    <T>(_fn: PH, values: List<T>): scan_011<T, U>;
    <$SEL extends "11">(): <T>(fn: (accumulator: U, value: T) => Reduced<U> | U, values: List<T>) => scan_111<U>;
    <$SEL extends "01">(): <T>(_fn: PH, values: List<T>) => scan_011<T, U>;
    <$SEL extends "1">(): <T>(fn: (accumulator: U, value: T) => Reduced<U> | U) => scan_110<T, U>;
    <T>(fn: (accumulator: U, value: T) => Reduced<U> | U, values: List<T>): scan_111<U>;
};
type scan_110<T, U> = {
    (values: List<T>): scan_111<U>;
};
type scan_001<T> = {
    <U>(fn: (accumulator: U, value: T) => Reduced<U> | U): scan_101<T, U>;
    <U>(_fn: PH, initial: U): scan_011<T, U>;
    <$SEL extends "11">(): <U>(fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U) => scan_111<U>;
    <$SEL extends "01">(): <U>(_fn: PH, initial: U) => scan_011<T, U>;
    <$SEL extends "1">(): <U>(fn: (accumulator: U, value: T) => Reduced<U> | U) => scan_101<T, U>;
    <U>(fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): scan_111<U>;
};
type scan_101<T, U> = {
    (initial: U): scan_111<U>;
};
type scan_011<T, U> = {
    (fn: (accumulator: U, value: T) => Reduced<U> | U): scan_111<U>;
};
type scan_111<U> = U[];
export = scan;
