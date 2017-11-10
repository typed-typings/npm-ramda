import { Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const assoc: assoc_000;
type assoc_000 = {
    /**
     * Makes a shallow clone of an object, setting or overriding the specified
     * property with the given value. Note that this copies and flattens prototype
     * properties onto the new object as well. All non-primitive properties are
     * copied by reference.
     *
     * @func
     * @memberOf R
     * @since v0.8.0
     * @category Object
     * @sig String -> a -> {k: v} -> {k: v}
     * @param {String} prop The property name to set
     * @param {*} val The new value
     * @param {Object} obj The object to clone
     * @return {Object} A new object equivalent to the original except for the changed property.
     * @see R.dissoc
     * @example
     *
     *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
     */
    <K extends string>(property: K): assoc_extend_100<K>;
    (property: Property): assoc_general_100;
    <V>(_property: PH, value: V): assoc_extend_010<V>;
    (_property: PH, value: any): assoc_general_010;
    <K extends string, V>(property: K, value: V): assoc_extend_110<K, V>;
    (property: Property, value: any): assoc_general_110;
    <T extends object>(_property: PH, _value: PH, object: T): assoc_001<T>;
    <V, T extends object>(_property: PH, value: V, object: T): assoc_extend_011<V, T>;
    <T extends object>(_property: PH, value: any, object: T): assoc_general_011<T>;
    <K extends string, T extends object>(property: K, _value: PH, object: T): assoc_extend_101<K, T>;
    <T extends object>(property: Property, _value: PH, object: T): assoc_general_101<T>;
    <K extends string, V, T extends object>(property: K, value: V, object: T): assoc_extend_111<K, V, T>;
    <$SEL extends "111", $KIND extends "general">(): <T extends object>(property: Property, value: any, object: T) => assoc_general_111<T>;
    <$SEL extends "111", $KIND extends "extend">(): <K extends string, V, T extends object>(property: K, value: V, object: T) => assoc_extend_111<K, V, T>;
    <$SEL extends "101", $KIND extends "general">(): <T extends object>(property: Property, _value: PH, object: T) => assoc_general_101<T>;
    <$SEL extends "101", $KIND extends "extend">(): <K extends string, T extends object>(property: K, _value: PH, object: T) => assoc_extend_101<K, T>;
    <$SEL extends "011", $KIND extends "general">(): <T extends object>(_property: PH, value: any, object: T) => assoc_general_011<T>;
    <$SEL extends "011", $KIND extends "extend">(): <V, T extends object>(_property: PH, value: V, object: T) => assoc_extend_011<V, T>;
    <$SEL extends "001">(): <T extends object>(_property: PH, _value: PH, object: T) => assoc_001<T>;
    <$SEL extends "11", $KIND extends "general">(): (property: Property, value: any) => assoc_general_110;
    <$SEL extends "11", $KIND extends "extend">(): <K extends string, V>(property: K, value: V) => assoc_extend_110<K, V>;
    <$SEL extends "01", $KIND extends "general">(): (_property: PH, value: any) => assoc_general_010;
    <$SEL extends "01", $KIND extends "extend">(): <V>(_property: PH, value: V) => assoc_extend_010<V>;
    <$SEL extends "1", $KIND extends "general">(): (property: Property) => assoc_general_100;
    <$SEL extends "1", $KIND extends "extend">(): <K extends string>(property: K) => assoc_extend_100<K>;
    <T extends object>(property: Property, value: any, object: T): assoc_general_111<T>;
};
type assoc_001<T extends object> = {
    <K extends string>(property: K): assoc_extend_101<K, T>;
    (property: Property): assoc_general_101<T>;
    <V>(_property: PH, value: V): assoc_extend_011<V, T>;
    (_property: PH, value: any): assoc_general_011<T>;
    <K extends string, V>(property: K, value: V): assoc_extend_111<K, V, T>;
    <$SEL extends "11", $KIND extends "general">(): (property: Property, value: any) => assoc_general_111<T>;
    <$SEL extends "11", $KIND extends "extend">(): <K extends string, V>(property: K, value: V) => assoc_extend_111<K, V, T>;
    <$SEL extends "01", $KIND extends "general">(): (_property: PH, value: any) => assoc_general_011<T>;
    <$SEL extends "01", $KIND extends "extend">(): <V>(_property: PH, value: V) => assoc_extend_011<V, T>;
    <$SEL extends "1", $KIND extends "general">(): (property: Property) => assoc_general_101<T>;
    <$SEL extends "1", $KIND extends "extend">(): <K extends string>(property: K) => assoc_extend_101<K, T>;
    (property: Property, value: any): assoc_general_111<T>;
};
type assoc_extend_100<K extends string> = {
    <V>(value: V): assoc_extend_110<K, V>;
    <T extends object>(_value: PH, object: T): assoc_extend_101<K, T>;
    <$SEL extends "11">(): <V, T extends object>(value: V, object: T) => assoc_extend_111<K, V, T>;
    <$SEL extends "01">(): <T extends object>(_value: PH, object: T) => assoc_extend_101<K, T>;
    <$SEL extends "1">(): <V>(value: V) => assoc_extend_110<K, V>;
    <V, T extends object>(value: V, object: T): assoc_extend_111<K, V, T>;
};
type assoc_general_100 = {
    (value: any): assoc_general_110;
    <T extends object>(_value: PH, object: T): assoc_general_101<T>;
    <$SEL extends "11">(): <T extends object>(value: any, object: T) => assoc_general_111<T>;
    <$SEL extends "01">(): <T extends object>(_value: PH, object: T) => assoc_general_101<T>;
    <$SEL extends "1">(): (value: any) => assoc_general_110;
    <T extends object>(value: any, object: T): assoc_general_111<T>;
};
type assoc_extend_010<V> = {
    <K extends string>(property: K): assoc_extend_110<K, V>;
    <T extends object>(_property: PH, object: T): assoc_extend_011<V, T>;
    <$SEL extends "11">(): <K extends string, T extends object>(property: K, object: T) => assoc_extend_111<K, V, T>;
    <$SEL extends "01">(): <T extends object>(_property: PH, object: T) => assoc_extend_011<V, T>;
    <$SEL extends "1">(): <K extends string>(property: K) => assoc_extend_110<K, V>;
    <K extends string, T extends object>(property: K, object: T): assoc_extend_111<K, V, T>;
};
type assoc_general_010 = {
    (property: Property): assoc_general_110;
    <T extends object>(_property: PH, object: T): assoc_general_011<T>;
    <$SEL extends "11">(): <T extends object>(property: Property, object: T) => assoc_general_111<T>;
    <$SEL extends "01">(): <T extends object>(_property: PH, object: T) => assoc_general_011<T>;
    <$SEL extends "1">(): (property: Property) => assoc_general_110;
    <T extends object>(property: Property, object: T): assoc_general_111<T>;
};
type assoc_extend_110<K extends string, V> = {
    <T extends object>(object: T): assoc_extend_111<K, V, T>;
};
type assoc_general_110 = {
    <T extends object>(object: T): assoc_general_111<T>;
};
type assoc_extend_101<K extends string, T extends object> = {
    <V>(value: V): assoc_extend_111<K, V, T>;
};
type assoc_general_101<T extends object> = {
    (value: any): assoc_general_111<T>;
};
type assoc_extend_011<V, T extends object> = {
    <K extends string>(property: K): assoc_extend_111<K, V, T>;
};
type assoc_general_011<T extends object> = {
    (property: Property): assoc_general_111<T>;
};
type assoc_extend_111<K extends string, V, T extends object> = T & Record<K, V>;
type assoc_general_111<T extends object> = T;
export = assoc;
