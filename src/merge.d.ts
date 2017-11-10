import { Merge } from "./$operation";
import { Placeholder as PH } from "./$placeholder";
declare const merge: merge_00;
type merge_00 = {
    /**
     * Create a new object with the own properties of the first object merged with
     * the own properties of the second object. If a key exists in both objects,
     * the value from the second object will be used.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category Object
     * @sig {k: v} -> {k: v} -> {k: v}
     * @param {Object} l
     * @param {Object} r
     * @return {Object}
     * @see R.mergeDeepRight, R.mergeWith, R.mergeWithKey
     * @example
     *
     *      R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
     *      //=> { 'name': 'fred', 'age': 40 }
     *
     *      var resetToDefault = R.merge(R.__, {x: 0});
     *      resetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}
     * @symb R.merge({ x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: 5, z: 3 }
     */
    <T>(a: T): merge_10<T>;
    <U>(_a: PH, b: U): merge_01<U>;
    <$SEL extends "11">(): <T, U>(a: T, b: U) => merge_11<T, U>;
    <$SEL extends "01">(): <U>(_a: PH, b: U) => merge_01<U>;
    <$SEL extends "1">(): <T>(a: T) => merge_10<T>;
    <T, U>(a: T, b: U): merge_11<T, U>;
};
type merge_10<T> = {
    <U>(b: U): merge_11<T, U>;
};
type merge_01<U> = {
    <T>(a: T): merge_11<T, U>;
};
type merge_11<T, U> = Merge<T, U>;
export = merge;
