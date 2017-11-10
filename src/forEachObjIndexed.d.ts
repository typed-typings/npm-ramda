import { Dictionary, KeyedObjectTap } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const forEachObjIndexed: forEachObjIndexed_00;
type forEachObjIndexed_00 = {
    /**
     * Iterate over an input `object`, calling a provided function `fn` for each
     * key and value in the object.
     *
     * `fn` receives three argument: *(value, key, obj)*.
     *
     * @func
     * @memberOf R
     * @since v0.23.0
     * @category Object
     * @sig ((a, String, StrMap a) -> Any) -> StrMap a -> StrMap a
     * @param {Function} fn The function to invoke. Receives three argument, `value`, `key`, `obj`.
     * @param {Object} obj The object to iterate over.
     * @return {Object} The original object.
     * @example
     *
     *      var printKeyConcatValue = (value, key) => console.log(key + ':' + value);
     *      R.forEachObjIndexed(printKeyConcatValue, {x: 1, y: 2}); //=> {x: 1, y: 2}
     *      // logs x:1
     *      // logs y:2
     * @symb R.forEachObjIndexed(f, {x: a, y: b}) = {x: a, y: b}
     */
    <T, U extends Dictionary<T>>(fn: KeyedObjectTap<T, U>): forEachObjIndexed_10<T, U>;
    <T, U extends Dictionary<T>>(_fn: PH, list: U): forEachObjIndexed_01<T, U>;
    <$SEL extends "11">(): <T, U extends Dictionary<T>>(fn: KeyedObjectTap<T, U>, list: U) => forEachObjIndexed_11<T, U>;
    <$SEL extends "01">(): <T, U extends Dictionary<T>>(_fn: PH, list: U) => forEachObjIndexed_01<T, U>;
    <$SEL extends "1">(): <T, U extends Dictionary<T>>(fn: KeyedObjectTap<T, U>) => forEachObjIndexed_10<T, U>;
    <T, U extends Dictionary<T>>(fn: KeyedObjectTap<T, U>, list: U): forEachObjIndexed_11<T, U>;
};
type forEachObjIndexed_10<T, U extends Dictionary<T>> = {
    (list: U): forEachObjIndexed_11<T, U>;
};
type forEachObjIndexed_01<T, U extends Dictionary<T>> = {
    (fn: KeyedObjectTap<T, U>): forEachObjIndexed_11<T, U>;
};
type forEachObjIndexed_11<T, U extends Dictionary<T>> = U;
export = forEachObjIndexed;
