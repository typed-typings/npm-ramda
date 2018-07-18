import { Dictionary, KeyedObjectMorphism } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const pickBy: pickBy_00;
type pickBy_00 = {
    /**
     * Returns a partial copy of an object containing only the keys that satisfy
     * the supplied predicate.
     *
     * @func
     * @memberOf R
     * @since v0.8.0
     * @category Object
     * @sig ((v, k) -> Boolean) -> {k: v} -> {k: v}
     * @param {Function} pred A predicate to determine whether or not a key
     *        should be included on the output object.
     * @param {Object} obj The object to copy from
     * @return {Object} A new object with only properties that satisfy `pred`
     *         on it.
     * @see R.pick, R.filter
     * @example
     *
     *      var isUpperCase = (val, key) => key.toUpperCase() === key;
     *      R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
     */
    <T extends {
    }, U extends Dictionary<T>>(fn: KeyedObjectMorphism<T, boolean, keyof U>): pickBy_10<T, U>;
    <T extends {
    }, U extends Dictionary<T>>(_fn: PH, object: U): pickBy_01<T, U>;
    <$SEL extends "11">(): <T extends {
    }, U extends Dictionary<T>>(fn: KeyedObjectMorphism<T, boolean, keyof U>, object: U) => pickBy_11<T, U>;
    <$SEL extends "01">(): <T extends {
    }, U extends Dictionary<T>>(_fn: PH, object: U) => pickBy_01<T, U>;
    <$SEL extends "1">(): <T extends {
    }, U extends Dictionary<T>>(fn: KeyedObjectMorphism<T, boolean, keyof U>) => pickBy_10<T, U>;
    <T extends {
    }, U extends Dictionary<T>>(fn: KeyedObjectMorphism<T, boolean, keyof U>, object: U): pickBy_11<T, U>;
};
type pickBy_10<T extends {
}, U extends Dictionary<T>> = {
    (object: U): pickBy_11<T, U>;
};
type pickBy_01<T extends {
}, U extends Dictionary<T>> = {
    (fn: KeyedObjectMorphism<T, boolean, keyof U>): pickBy_11<T, U>;
};
type pickBy_11<T extends {
}, U extends Dictionary<T>> = Partial<U>;
export = pickBy;
