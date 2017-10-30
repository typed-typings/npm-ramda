import { List, Reduced } from "./$types";
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
    <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): scan_110<T, U>;
    <$SEL extends "1">(): <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U) => scan_100<T, U>;
    <$SEL extends "11">(): <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U) => scan_110<T, U>;
    <$SEL extends "111">(): <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, values: List<T>) => scan_111<U>;
    <T, U>(fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, values: List<T>): scan_111<U>;
};
type scan_100<T, U> = {
    (initial: U): scan_110<T, U>;
    <$SEL extends "1">(): (initial: U) => scan_110<T, U>;
    <$SEL extends "11">(): (initial: U, values: List<T>) => scan_111<U>;
    (initial: U, values: List<T>): scan_111<U>;
};
type scan_110<T, U> = {
    (values: List<T>): scan_111<U>;
};
type scan_111<U> = U[];
export = scan;
