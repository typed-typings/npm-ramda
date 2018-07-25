import { Omit } from "./$operation";
import { Property, PropKey } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const dissoc: dissoc_00;
type dissoc_00 = {
    /**
     * Returns a new object that does not contain a `prop` property.
     *
     * @func
     * @memberOf R
     * @since v0.10.0
     * @category Object
     * @sig String -> {k: v} -> {k: v}
     * @param {String} prop The name of the property to dissociate
     * @param {Object} obj The object to clone
     * @return {Object} A new object equivalent to the original but without the specified property
     * @see R.assoc
     * @example
     *
     *      R.dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}
     */
    <T extends object, K extends keyof T>(property: K): dissoc_keyof_10<T, K>;
    <V extends PropKey>(property: V): dissoc_record_10<V>;
    (property: Property): dissoc_general_10;
    <T extends object>(_property: PH, object: T): dissoc_keyof_01<T>;
    <U extends Record<V, any>, V extends PropKey>(_property: PH, object: U): dissoc_record_01<U, V>;
    <T extends object>(_property: PH, object: T): dissoc_general_01<T>;
    <T extends object, K extends keyof T>(property: K, object: T): dissoc_keyof_11<T, K>;
    <U extends Record<V, any>, V extends PropKey>(property: V, object: U): dissoc_record_11<U, V>;
    <$SEL extends "11", $KIND extends "general">(): <T extends object>(property: Property, object: T) => dissoc_general_11<T>;
    <$SEL extends "11", $KIND extends "record">(): <U extends Record<V, any>, V extends PropKey>(property: V, object: U) => dissoc_record_11<U, V>;
    <$SEL extends "11", $KIND extends "keyof">(): <T extends object, K extends keyof T>(property: K, object: T) => dissoc_keyof_11<T, K>;
    <$SEL extends "01", $KIND extends "general">(): <T extends object>(_property: PH, object: T) => dissoc_general_01<T>;
    <$SEL extends "01", $KIND extends "record">(): <U extends Record<V, any>, V extends PropKey>(_property: PH, object: U) => dissoc_record_01<U, V>;
    <$SEL extends "01", $KIND extends "keyof">(): <T extends object>(_property: PH, object: T) => dissoc_keyof_01<T>;
    <$SEL extends "1", $KIND extends "general">(): (property: Property) => dissoc_general_10;
    <$SEL extends "1", $KIND extends "record">(): <V extends PropKey>(property: V) => dissoc_record_10<V>;
    <$SEL extends "1", $KIND extends "keyof">(): <T extends object, K extends keyof T>(property: K) => dissoc_keyof_10<T, K>;
    <T extends object>(property: Property, object: T): dissoc_general_11<T>;
};
type dissoc_keyof_10<T extends object, K extends keyof T> = {
    (object: T): dissoc_keyof_11<T, K>;
};
type dissoc_record_10<V extends PropKey> = {
    <U extends Record<V, any>>(object: U): dissoc_record_11<U, V>;
};
type dissoc_general_10 = {
    <T extends object>(object: T): dissoc_general_11<T>;
};
type dissoc_keyof_01<T extends object> = {
    <K extends keyof T>(property: K): dissoc_keyof_11<T, K>;
};
type dissoc_record_01<U extends Record<V, any>, V extends PropKey> = {
    (property: V): dissoc_record_11<U, V>;
};
type dissoc_general_01<T extends object> = {
    (property: Property): dissoc_general_11<T>;
};
type dissoc_keyof_11<T extends object, K extends keyof T> = Omit<T, K>;
type dissoc_record_11<U extends Record<V, any>, V extends PropKey> = Omit<U, V>;
type dissoc_general_11<T extends object> = T;
export = dissoc;
