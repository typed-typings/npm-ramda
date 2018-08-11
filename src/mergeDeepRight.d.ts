import { DeepMerge } from "./$operation";
import { Placeholder as PH } from "./$placeholder";
declare const mergeDeepRight: mergeDeepRight_00;
type mergeDeepRight_00 = {
    /**
     * Creates a new object with the own properties of the first object merged with
     * the own properties of the second object. If a key exists in both objects:
     * - and both values are objects, the two values will be recursively merged
     * - otherwise the value from the second object will be used.
     *
     * @func
     * @memberOf R
     * @since v0.24.0
     * @category Object
     * @sig {a} -> {a} -> {a}
     * @param {Object} lObj
     * @param {Object} rObj
     * @return {Object}
     * @see R.merge, R.mergeDeepLeft, R.mergeDeepWith, R.mergeDeepWithKey
     * @example
     *
     *      R.mergeDeepRight({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
     *                       { age: 40, contact: { email: 'baa@example.com' }});
     *      //=> { name: 'fred', age: 40, contact: { email: 'baa@example.com' }}
     */
    <T extends object>(left: T): mergeDeepRight_10<T>;
    <U extends object>(_left: PH, right: U): mergeDeepRight_01<U>;
    <$SEL extends "11">(): <T extends object, U extends object>(left: T, right: U) => mergeDeepRight_11<T, U>;
    <$SEL extends "01">(): <U extends object>(_left: PH, right: U) => mergeDeepRight_01<U>;
    <$SEL extends "1">(): <T extends object>(left: T) => mergeDeepRight_10<T>;
    <T extends object, U extends object>(left: T, right: U): mergeDeepRight_11<T, U>;
};
type mergeDeepRight_10<T extends object> = {
    <U extends object>(right: U): mergeDeepRight_11<T, U>;
};
type mergeDeepRight_01<U extends object> = {
    <T extends object>(left: T): mergeDeepRight_11<T, U>;
};
type mergeDeepRight_11<T extends object, U extends object> = DeepMerge<T, U>;
export = mergeDeepRight;
