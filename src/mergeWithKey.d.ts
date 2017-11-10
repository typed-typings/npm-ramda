import { Omit, Same } from "./$operation";
declare const mergeWithKey: mergeWithKey_000;
type mergeWithKey_000 = {
    /**
     * Creates a new object with the own properties of the two provided objects. If
     * a key exists in both objects, the provided function is applied to the key
     * and the values associated with the key in each object, with the result being
     * used as the value associated with the key in the returned object.
     *
     * @func
     * @memberOf R
     * @since v0.19.0
     * @category Object
     * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
     * @param {Function} fn
     * @param {Object} l
     * @param {Object} r
     * @return {Object}
     * @see R.mergeDeepWithKey, R.merge, R.mergeWith
     * @example
     *
     *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
     *      R.mergeWithKey(concatValues,
     *                     { a: true, thing: 'foo', values: [10, 20] },
     *                     { b: true, thing: 'bar', values: [15, 35] });
     *      //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }
     * @symb R.mergeWithKey(f, { x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: f('y', 2, 5), z: 3 }
     */
    <V, W>(fn: (key: string, a: V, b: V) => W): mergeWithKey_100<V, W>;
    <T, V, W>(fn: (key: string, a: V, b: V) => W, left: T): mergeWithKey_110<T, V, W>;
    <$SEL extends "111">(): <T, U, V, W>(fn: (key: string, a: V, b: V) => W, left: T, right: U) => mergeWithKey_111<T, U, W>;
    <$SEL extends "11">(): <T, V, W>(fn: (key: string, a: V, b: V) => W, left: T) => mergeWithKey_110<T, V, W>;
    <$SEL extends "1">(): <V, W>(fn: (key: string, a: V, b: V) => W) => mergeWithKey_100<V, W>;
    <T, U, V, W>(fn: (key: string, a: V, b: V) => W, left: T, right: U): mergeWithKey_111<T, U, W>;
};
type mergeWithKey_100<V, W> = {
    <T>(left: T): mergeWithKey_110<T, V, W>;
    <$SEL extends "11">(): <T, U>(left: T, right: U) => mergeWithKey_111<T, U, W>;
    <$SEL extends "1">(): <T>(left: T) => mergeWithKey_110<T, V, W>;
    <T, U>(left: T, right: U): mergeWithKey_111<T, U, W>;
};
type mergeWithKey_110<T, V, W> = {
    <U>(right: U): mergeWithKey_111<T, U, W>;
};
type mergeWithKey_111<T, U, W> = Omit<T, keyof U> & Omit<U, keyof T> & Record<Same<keyof T, keyof U>, W>;
export = mergeWithKey;
