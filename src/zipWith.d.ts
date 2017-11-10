import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const zipWith: zipWith_000;
type zipWith_000 = {
    /**
     * Creates a new list out of the two supplied by applying the function to each
     * equally-positioned pair in the lists. The returned list is truncated to the
     * length of the shorter of the two input lists.
     *
     * @function
     * @memberOf R
     * @since v0.1.0
     * @category List
     * @sig ((a, b) -> c) -> [a] -> [b] -> [c]
     * @param {Function} fn The function used to combine the two elements into one value.
     * @param {Array} list1 The first array to consider.
     * @param {Array} list2 The second array to consider.
     * @return {Array} The list made by combining same-indexed elements of `list1` and `list2`
     *         using `fn`.
     * @example
     *
     *      var f = (x, y) => {
     *        // ...
     *      };
     *      R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']);
     *      //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
     * @symb R.zipWith(fn, [a, b, c], [d, e, f]) = [fn(a, d), fn(b, e), fn(c, f)]
     */
    <T, U, R>(fn: (x: T, y: U) => R): zipWith_100<T, U, R>;
    <T>(_fn: PH, a: List<T>): zipWith_010<T>;
    <T, U, R>(fn: (x: T, y: U) => R, a: List<T>): zipWith_110<T, U, R>;
    <U>(_fn: PH, _a: PH, b: List<U>): zipWith_001<U>;
    <T, U>(_fn: PH, a: List<T>, b: List<U>): zipWith_011<T, U>;
    <T, U, R>(fn: (x: T, y: U) => R, _a: PH, b: List<U>): zipWith_101<T, U, R>;
    <$SEL extends "111">(): <T, U, R>(fn: (x: T, y: U) => R, a: List<T>, b: List<U>) => zipWith_111<R>;
    <$SEL extends "101">(): <T, U, R>(fn: (x: T, y: U) => R, _a: PH, b: List<U>) => zipWith_101<T, U, R>;
    <$SEL extends "011">(): <T, U>(_fn: PH, a: List<T>, b: List<U>) => zipWith_011<T, U>;
    <$SEL extends "001">(): <U>(_fn: PH, _a: PH, b: List<U>) => zipWith_001<U>;
    <$SEL extends "11">(): <T, U, R>(fn: (x: T, y: U) => R, a: List<T>) => zipWith_110<T, U, R>;
    <$SEL extends "01">(): <T>(_fn: PH, a: List<T>) => zipWith_010<T>;
    <$SEL extends "1">(): <T, U, R>(fn: (x: T, y: U) => R) => zipWith_100<T, U, R>;
    <T, U, R>(fn: (x: T, y: U) => R, a: List<T>, b: List<U>): zipWith_111<R>;
};
type zipWith_100<T, U, R> = {
    (a: List<T>): zipWith_110<T, U, R>;
    (_a: PH, b: List<U>): zipWith_101<T, U, R>;
    <$SEL extends "11">(): (a: List<T>, b: List<U>) => zipWith_111<R>;
    <$SEL extends "01">(): (_a: PH, b: List<U>) => zipWith_101<T, U, R>;
    <$SEL extends "1">(): (a: List<T>) => zipWith_110<T, U, R>;
    (a: List<T>, b: List<U>): zipWith_111<R>;
};
type zipWith_010<T> = {
    <U, R>(fn: (x: T, y: U) => R): zipWith_110<T, U, R>;
    <U>(_fn: PH, b: List<U>): zipWith_011<T, U>;
    <$SEL extends "11">(): <U, R>(fn: (x: T, y: U) => R, b: List<U>) => zipWith_111<R>;
    <$SEL extends "01">(): <U>(_fn: PH, b: List<U>) => zipWith_011<T, U>;
    <$SEL extends "1">(): <U, R>(fn: (x: T, y: U) => R) => zipWith_110<T, U, R>;
    <U, R>(fn: (x: T, y: U) => R, b: List<U>): zipWith_111<R>;
};
type zipWith_110<T, U, R> = {
    (b: List<U>): zipWith_111<R>;
};
type zipWith_001<U> = {
    <T, R>(fn: (x: T, y: U) => R): zipWith_101<T, U, R>;
    <T>(_fn: PH, a: List<T>): zipWith_011<T, U>;
    <$SEL extends "11">(): <T, R>(fn: (x: T, y: U) => R, a: List<T>) => zipWith_111<R>;
    <$SEL extends "01">(): <T>(_fn: PH, a: List<T>) => zipWith_011<T, U>;
    <$SEL extends "1">(): <T, R>(fn: (x: T, y: U) => R) => zipWith_101<T, U, R>;
    <T, R>(fn: (x: T, y: U) => R, a: List<T>): zipWith_111<R>;
};
type zipWith_101<T, U, R> = {
    (a: List<T>): zipWith_111<R>;
};
type zipWith_011<T, U> = {
    <R>(fn: (x: T, y: U) => R): zipWith_111<R>;
};
type zipWith_111<R> = R[];
export = zipWith;
