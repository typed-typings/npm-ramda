import { Placeholder as PH } from "./$placeholder";
declare const mergeDeepWithKey: mergeDeepWithKey_000;
type mergeDeepWithKey_000 = {
    /**
     * Creates a new object with the own properties of the two provided objects.
     * If a key exists in both objects:
     * - and both associated values are also objects then the values will be
     *   recursively merged.
     * - otherwise the provided function is applied to the key and associated values
     *   using the resulting value as the new value associated with the key.
     * If a key only exists in one object, the value will be associated with the key
     * of the resulting object.
     *
     * @func
     * @memberOf R
     * @since v0.24.0
     * @category Object
     * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
     * @param {Function} fn
     * @param {Object} lObj
     * @param {Object} rObj
     * @return {Object}
     * @see R.mergeWithKey, R.mergeDeep, R.mergeDeepWith
     * @example
     *
     *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
     *      R.mergeDeepWithKey(concatValues,
     *                         { a: true, c: { thing: 'foo', values: [10, 20] }},
     *                         { b: true, c: { thing: 'bar', values: [15, 35] }});
     *      //=> { a: true, b: true, c: { thing: 'bar', values: [10, 20, 15, 35] }}
     */
    <V>(fn: (key: string, a: V, b: V) => any): mergeDeepWithKey_100<V>;
    (_fn: PH, left: object): mergeDeepWithKey_010;
    <V>(fn: (key: string, a: V, b: V) => any, left: object): mergeDeepWithKey_110<V>;
    (_fn: PH, _left: PH, right: object): mergeDeepWithKey_001;
    (_fn: PH, left: object, right: object): mergeDeepWithKey_011;
    <V>(fn: (key: string, a: V, b: V) => any, _left: PH, right: object): mergeDeepWithKey_101<V>;
    <$SEL extends "111">(): <V>(fn: (key: string, a: V, b: V) => any, left: object, right: object) => mergeDeepWithKey_111;
    <$SEL extends "101">(): <V>(fn: (key: string, a: V, b: V) => any, _left: PH, right: object) => mergeDeepWithKey_101<V>;
    <$SEL extends "011">(): (_fn: PH, left: object, right: object) => mergeDeepWithKey_011;
    <$SEL extends "001">(): (_fn: PH, _left: PH, right: object) => mergeDeepWithKey_001;
    <$SEL extends "11">(): <V>(fn: (key: string, a: V, b: V) => any, left: object) => mergeDeepWithKey_110<V>;
    <$SEL extends "01">(): (_fn: PH, left: object) => mergeDeepWithKey_010;
    <$SEL extends "1">(): <V>(fn: (key: string, a: V, b: V) => any) => mergeDeepWithKey_100<V>;
    <V>(fn: (key: string, a: V, b: V) => any, left: object, right: object): mergeDeepWithKey_111;
};
type mergeDeepWithKey_100<V> = {
    (left: object): mergeDeepWithKey_110<V>;
    (_left: PH, right: object): mergeDeepWithKey_101<V>;
    <$SEL extends "11">(): (left: object, right: object) => mergeDeepWithKey_111;
    <$SEL extends "01">(): (_left: PH, right: object) => mergeDeepWithKey_101<V>;
    <$SEL extends "1">(): (left: object) => mergeDeepWithKey_110<V>;
    (left: object, right: object): mergeDeepWithKey_111;
};
type mergeDeepWithKey_010 = {
    <V>(fn: (key: string, a: V, b: V) => any): mergeDeepWithKey_110<V>;
    (_fn: PH, right: object): mergeDeepWithKey_011;
    <$SEL extends "11">(): <V>(fn: (key: string, a: V, b: V) => any, right: object) => mergeDeepWithKey_111;
    <$SEL extends "01">(): (_fn: PH, right: object) => mergeDeepWithKey_011;
    <$SEL extends "1">(): <V>(fn: (key: string, a: V, b: V) => any) => mergeDeepWithKey_110<V>;
    <V>(fn: (key: string, a: V, b: V) => any, right: object): mergeDeepWithKey_111;
};
type mergeDeepWithKey_110<V> = {
    (right: object): mergeDeepWithKey_111;
};
type mergeDeepWithKey_001 = {
    <V>(fn: (key: string, a: V, b: V) => any): mergeDeepWithKey_101<V>;
    (_fn: PH, left: object): mergeDeepWithKey_011;
    <$SEL extends "11">(): <V>(fn: (key: string, a: V, b: V) => any, left: object) => mergeDeepWithKey_111;
    <$SEL extends "01">(): (_fn: PH, left: object) => mergeDeepWithKey_011;
    <$SEL extends "1">(): <V>(fn: (key: string, a: V, b: V) => any) => mergeDeepWithKey_101<V>;
    <V>(fn: (key: string, a: V, b: V) => any, left: object): mergeDeepWithKey_111;
};
type mergeDeepWithKey_101<V> = {
    (left: object): mergeDeepWithKey_111;
};
type mergeDeepWithKey_011 = {
    <V>(fn: (key: string, a: V, b: V) => any): mergeDeepWithKey_111;
};
type mergeDeepWithKey_111 = object;
export = mergeDeepWithKey;
