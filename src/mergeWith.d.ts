import { Omit, Same } from "./$operation";
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
     * @sig (a -> a -> a) -> {a} -> {a} -> {a}
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
    <T, V, W>(fn: (a: V, b: V) => W, left: T): mergeWith_110<T, V, W>;
    <T, U, V, W>(fn: (a: V, b: V) => W, left: T, right: U): mergeWith_111<T, U, W>;
};
type mergeWith_100<V, W> = {
    <T>(left: T): mergeWith_110<T, V, W>;
    <T, U>(left: T, right: U): mergeWith_111<T, U, W>;
};
type mergeWith_110<T, V, W> = {
    <U>(right: U): mergeWith_111<T, U, W>;
};
type mergeWith_111<T, U, W> = Omit<T, keyof U> & Omit<U, keyof T> & Record<Same<keyof T, keyof U>, W>;
export = mergeWith;
