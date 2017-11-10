import { KeyedObjectMorphism } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const mapObjIndexed: mapObjIndexed_00;
type mapObjIndexed_00 = {
    /**
     * An Object-specific version of [`map`](#map). The function is applied to three
     * arguments: *(value, key, obj)*. If only the value is significant, use
     * [`map`](#map) instead.
     *
     * @func
     * @memberOf R
     * @since v0.9.0
     * @category Object
     * @sig ((*, String, Object) -> *) -> Object -> Object
     * @param {Function} fn
     * @param {Object} obj
     * @return {Object}
     * @see R.map
     * @example
     *
     *      var values = { x: 1, y: 2, z: 3 };
     *      var prependKeyAndDouble = (num, key, obj) => key + (num * 2);
     *
     *      R.mapObjIndexed(prependKeyAndDouble, values); //=> { x: 'x2', y: 'y4', z: 'z6' }
     */
    <T, U, K extends string>(fn: KeyedObjectMorphism<T, U, K>): mapObjIndexed_10<T, U, K>;
    <T, K extends string>(_fn: PH, object: Record<K, T>): mapObjIndexed_01<T, K>;
    <$SEL extends "11">(): <T, U, K extends string>(fn: KeyedObjectMorphism<T, U, K>, object: Record<K, T>) => mapObjIndexed_11<U, K>;
    <$SEL extends "01">(): <T, K extends string>(_fn: PH, object: Record<K, T>) => mapObjIndexed_01<T, K>;
    <$SEL extends "1">(): <T, U, K extends string>(fn: KeyedObjectMorphism<T, U, K>) => mapObjIndexed_10<T, U, K>;
    <T, U, K extends string>(fn: KeyedObjectMorphism<T, U, K>, object: Record<K, T>): mapObjIndexed_11<U, K>;
};
type mapObjIndexed_10<T, U, K extends string> = {
    (object: Record<K, T>): mapObjIndexed_11<U, K>;
};
type mapObjIndexed_01<T, K extends string> = {
    <U>(fn: KeyedObjectMorphism<T, U, K>): mapObjIndexed_11<U, K>;
};
type mapObjIndexed_11<U, K extends string> = Record<K, U>;
export = mapObjIndexed;
