import { Omit, Same } from "./$operation";
import { Placeholder as PH } from "./$placeholder";
declare const mergeWith: mergeWith_000;
type mergeWith_000 = {
    /**
     * Creates a new object with the own properties of the two provided objects. If
     * a key exists in both objects, the provided function is applied to the values
     * associated with the key in each object, with the result being used as the
     * value associated with the key in the returned object.
     *
     * @func
     * @memberOf R
     * @since v0.19.0
     * @category Object
     * @sig ((a, a) -> a) -> {a} -> {a} -> {a}
     * @param {Function} fn
     * @param {Object} l
     * @param {Object} r
     * @return {Object}
     * @see R.mergeDeepWith, R.merge, R.mergeWithKey
     * @example
     *
     *      R.mergeWith(R.concat,
     *                  { a: true, values: [10, 20] },
     *                  { b: true, values: [15, 35] });
     *      //=> { a: true, b: true, values: [10, 20, 15, 35] }
     */
    <V, W>(fn: (a: V, b: V) => W): mergeWith_100<V, W>;
    <T>(_fn: PH, left: T): mergeWith_010<T>;
    <T, V, W>(fn: (a: V, b: V) => W, left: T): mergeWith_110<T, V, W>;
    <U>(_fn: PH, _left: PH, right: U): mergeWith_001<U>;
    <T, U>(_fn: PH, left: T, right: U): mergeWith_011<T, U>;
    <U, V, W>(fn: (a: V, b: V) => W, _left: PH, right: U): mergeWith_101<U, V, W>;
    <$SEL extends "111">(): <T, U, V, W>(fn: (a: V, b: V) => W, left: T, right: U) => mergeWith_111<T, U, W>;
    <$SEL extends "101">(): <U, V, W>(fn: (a: V, b: V) => W, _left: PH, right: U) => mergeWith_101<U, V, W>;
    <$SEL extends "011">(): <T, U>(_fn: PH, left: T, right: U) => mergeWith_011<T, U>;
    <$SEL extends "001">(): <U>(_fn: PH, _left: PH, right: U) => mergeWith_001<U>;
    <$SEL extends "11">(): <T, V, W>(fn: (a: V, b: V) => W, left: T) => mergeWith_110<T, V, W>;
    <$SEL extends "01">(): <T>(_fn: PH, left: T) => mergeWith_010<T>;
    <$SEL extends "1">(): <V, W>(fn: (a: V, b: V) => W) => mergeWith_100<V, W>;
    <T, U, V, W>(fn: (a: V, b: V) => W, left: T, right: U): mergeWith_111<T, U, W>;
};
type mergeWith_100<V, W> = {
    <T>(left: T): mergeWith_110<T, V, W>;
    <U>(_left: PH, right: U): mergeWith_101<U, V, W>;
    <$SEL extends "11">(): <T, U>(left: T, right: U) => mergeWith_111<T, U, W>;
    <$SEL extends "01">(): <U>(_left: PH, right: U) => mergeWith_101<U, V, W>;
    <$SEL extends "1">(): <T>(left: T) => mergeWith_110<T, V, W>;
    <T, U>(left: T, right: U): mergeWith_111<T, U, W>;
};
type mergeWith_010<T> = {
    <V, W>(fn: (a: V, b: V) => W): mergeWith_110<T, V, W>;
    <U>(_fn: PH, right: U): mergeWith_011<T, U>;
    <$SEL extends "11">(): <U, V, W>(fn: (a: V, b: V) => W, right: U) => mergeWith_111<T, U, W>;
    <$SEL extends "01">(): <U>(_fn: PH, right: U) => mergeWith_011<T, U>;
    <$SEL extends "1">(): <V, W>(fn: (a: V, b: V) => W) => mergeWith_110<T, V, W>;
    <U, V, W>(fn: (a: V, b: V) => W, right: U): mergeWith_111<T, U, W>;
};
type mergeWith_110<T, V, W> = {
    <U>(right: U): mergeWith_111<T, U, W>;
};
type mergeWith_001<U> = {
    <V, W>(fn: (a: V, b: V) => W): mergeWith_101<U, V, W>;
    <T>(_fn: PH, left: T): mergeWith_011<T, U>;
    <$SEL extends "11">(): <T, V, W>(fn: (a: V, b: V) => W, left: T) => mergeWith_111<T, U, W>;
    <$SEL extends "01">(): <T>(_fn: PH, left: T) => mergeWith_011<T, U>;
    <$SEL extends "1">(): <V, W>(fn: (a: V, b: V) => W) => mergeWith_101<U, V, W>;
    <T, V, W>(fn: (a: V, b: V) => W, left: T): mergeWith_111<T, U, W>;
};
type mergeWith_101<U, V, W> = {
    <T>(left: T): mergeWith_111<T, U, W>;
};
type mergeWith_011<T, U> = {
    <V, W>(fn: (a: V, b: V) => W): mergeWith_111<T, U, W>;
};
type mergeWith_111<T, U, W> = Omit<T, keyof U> & Omit<U, keyof T> & Record<Same<keyof T, keyof U>, W>;
export = mergeWith;
