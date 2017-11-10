import { Placeholder as PH } from "./$placeholder";
declare const mergeDeepLeft: mergeDeepLeft_00;
type mergeDeepLeft_00 = {
    /**
     * Creates a new object with the own properties of the first object merged with
     * the own properties of the second object. If a key exists in both objects:
     * - and both values are objects, the two values will be recursively merged
     * - otherwise the value from the first object will be used.
     *
     * @func
     * @memberOf R
     * @since v0.24.0
     * @category Object
     * @sig {a} -> {a} -> {a}
     * @param {Object} lObj
     * @param {Object} rObj
     * @return {Object}
     * @see R.merge, R.mergeDeepRight, R.mergeDeepWith, R.mergeDeepWithKey
     * @example
     *
     *      R.mergeDeepLeft({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
     *                      { age: 40, contact: { email: 'baa@example.com' }});
     *      //=> { name: 'fred', age: 10, contact: { email: 'moo@example.com' }}
     */
    (left: object): mergeDeepLeft_10;
    (_left: PH, right: object): mergeDeepLeft_01;
    <$SEL extends "11">(): (left: object, right: object) => mergeDeepLeft_11;
    <$SEL extends "01">(): (_left: PH, right: object) => mergeDeepLeft_01;
    <$SEL extends "1">(): (left: object) => mergeDeepLeft_10;
    (left: object, right: object): mergeDeepLeft_11;
};
type mergeDeepLeft_10 = {
    (right: object): mergeDeepLeft_11;
};
type mergeDeepLeft_01 = {
    (left: object): mergeDeepLeft_11;
};
type mergeDeepLeft_11 = object;
export = mergeDeepLeft;
