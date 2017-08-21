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
    <T extends {}>(_property: PH, _value: PH, object: T): assoc_001<T>;
    <V, T extends {}>(_property: PH, value: V, object: T): assoc_extend_011<V, T>;
    <T extends {}>(_property: PH, value: any, object: T): assoc_general_011<T>;
    <K extends string, T extends {}>(property: K, _value: PH, object: T): assoc_extend_101<K, T>;
    <T extends {}>(property: Property, _value: PH, object: T): assoc_general_101<T>;
    <K extends string, V, T extends {}>(property: K, value: V, object: T): assoc_extend_111<K, V, T>;
    <T extends {}>(property: Property, value: any, object: T): assoc_general_111<T>;
};
type assoc_001<T extends {}> = {
    <K extends string>(property: K): assoc_extend_101<K, T>;
    (property: Property): assoc_general_101<T>;
    <V>(_property: PH, value: V): assoc_extend_011<V, T>;
    (_property: PH, value: any): assoc_general_011<T>;
    <K extends string, V>(property: K, value: V): assoc_extend_111<K, V, T>;
    (property: Property, value: any): assoc_general_111<T>;
};
type assoc_extend_100<K extends string> = {
    <V>(value: V): assoc_extend_110<K, V>;
    <T extends {}>(_value: PH, object: T): assoc_extend_101<K, T>;
    <V, T extends {}>(value: V, object: T): assoc_extend_111<K, V, T>;
};
type assoc_general_100 = {
    (value: any): assoc_general_110;
    <T extends {}>(_value: PH, object: T): assoc_general_101<T>;
    <T extends {}>(value: any, object: T): assoc_general_111<T>;
};
type assoc_extend_010<V> = {
    <K extends string>(property: K): assoc_extend_110<K, V>;
    <T extends {}>(_property: PH, object: T): assoc_extend_011<V, T>;
    <K extends string, T extends {}>(property: K, object: T): assoc_extend_111<K, V, T>;
};
type assoc_general_010 = {
    (property: Property): assoc_general_110;
    <T extends {}>(_property: PH, object: T): assoc_general_011<T>;
    <T extends {}>(property: Property, object: T): assoc_general_111<T>;
};
type assoc_extend_110<K extends string, V> = {
    <T extends {}>(object: T): assoc_extend_111<K, V, T>;
};
type assoc_general_110 = {
    <T extends {}>(object: T): assoc_general_111<T>;
};
type assoc_extend_101<K extends string, T extends {}> = {
    <V>(value: V): assoc_extend_111<K, V, T>;
};
type assoc_general_101<T extends {}> = {
    (value: any): assoc_general_111<T>;
};
type assoc_extend_011<V, T extends {}> = {
    <K extends string>(property: K): assoc_extend_111<K, V, T>;
};
type assoc_general_011<T extends {}> = {
    (property: Property): assoc_general_111<T>;
};
type assoc_extend_111<K extends string, V, T extends {}> = T & Record<K, V>;
type assoc_general_111<T extends {}> = T;
export = assoc;
