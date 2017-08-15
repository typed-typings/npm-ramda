import { Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
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
declare const assoc: assoc_000;
type assoc_000 = {
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
    <$SEL extends "1", $KIND extends "extend">(): <K extends string>(property: K) => assoc_extend_100<K>;
    <$SEL extends "1", $KIND extends "general">(): (property: Property) => assoc_general_100;
    <$SEL extends "01", $KIND extends "extend">(): <V>(_property: PH, value: V) => assoc_extend_010<V>;
    <$SEL extends "01", $KIND extends "general">(): (_property: PH, value: any) => assoc_general_010;
    <$SEL extends "11", $KIND extends "extend">(): <K extends string, V>(property: K, value: V) => assoc_extend_110<K, V>;
    <$SEL extends "11", $KIND extends "general">(): (property: Property, value: any) => assoc_general_110;
    <$SEL extends "001">(): <T extends {}>(_property: PH, _value: PH, object: T) => assoc_001<T>;
    <$SEL extends "011", $KIND extends "extend">(): <V, T extends {}>(_property: PH, value: V, object: T) => assoc_extend_011<V, T>;
    <$SEL extends "011", $KIND extends "general">(): <T extends {}>(_property: PH, value: any, object: T) => assoc_general_011<T>;
    <$SEL extends "101", $KIND extends "extend">(): <K extends string, T extends {}>(property: K, _value: PH, object: T) => assoc_extend_101<K, T>;
    <$SEL extends "101", $KIND extends "general">(): <T extends {}>(property: Property, _value: PH, object: T) => assoc_general_101<T>;
    <$SEL extends "111", $KIND extends "extend">(): <K extends string, V, T extends {}>(property: K, value: V, object: T) => assoc_extend_111<K, V, T>;
    <$SEL extends "111", $KIND extends "general">(): <T extends {}>(property: Property, value: any, object: T) => assoc_general_111<T>;
    <T extends {}>(property: Property, value: any, object: T): assoc_general_111<T>;
};
type assoc_001<T extends {}> = {
    <K extends string>(property: K): assoc_extend_101<K, T>;
    (property: Property): assoc_general_101<T>;
    <V>(_property: PH, value: V): assoc_extend_011<V, T>;
    (_property: PH, value: any): assoc_general_011<T>;
    <K extends string, V>(property: K, value: V): assoc_extend_111<K, V, T>;
    <$SEL extends "1", $KIND extends "extend">(): <K extends string>(property: K) => assoc_extend_101<K, T>;
    <$SEL extends "1", $KIND extends "general">(): (property: Property) => assoc_general_101<T>;
    <$SEL extends "01", $KIND extends "extend">(): <V>(_property: PH, value: V) => assoc_extend_011<V, T>;
    <$SEL extends "01", $KIND extends "general">(): (_property: PH, value: any) => assoc_general_011<T>;
    <$SEL extends "11", $KIND extends "extend">(): <K extends string, V>(property: K, value: V) => assoc_extend_111<K, V, T>;
    <$SEL extends "11", $KIND extends "general">(): (property: Property, value: any) => assoc_general_111<T>;
    (property: Property, value: any): assoc_general_111<T>;
};
type assoc_extend_100<K extends string> = {
    <V>(value: V): assoc_extend_110<K, V>;
    <T extends {}>(_value: PH, object: T): assoc_extend_101<K, T>;
    <$SEL extends "1">(): <V>(value: V) => assoc_extend_110<K, V>;
    <$SEL extends "01">(): <T extends {}>(_value: PH, object: T) => assoc_extend_101<K, T>;
    <$SEL extends "11">(): <V, T extends {}>(value: V, object: T) => assoc_extend_111<K, V, T>;
    <V, T extends {}>(value: V, object: T): assoc_extend_111<K, V, T>;
};
type assoc_general_100 = {
    (value: any): assoc_general_110;
    <T extends {}>(_value: PH, object: T): assoc_general_101<T>;
    <$SEL extends "1">(): (value: any) => assoc_general_110;
    <$SEL extends "01">(): <T extends {}>(_value: PH, object: T) => assoc_general_101<T>;
    <$SEL extends "11">(): <T extends {}>(value: any, object: T) => assoc_general_111<T>;
    <T extends {}>(value: any, object: T): assoc_general_111<T>;
};
type assoc_extend_010<V> = {
    <K extends string>(property: K): assoc_extend_110<K, V>;
    <T extends {}>(_property: PH, object: T): assoc_extend_011<V, T>;
    <$SEL extends "1">(): <K extends string>(property: K) => assoc_extend_110<K, V>;
    <$SEL extends "01">(): <T extends {}>(_property: PH, object: T) => assoc_extend_011<V, T>;
    <$SEL extends "11">(): <K extends string, T extends {}>(property: K, object: T) => assoc_extend_111<K, V, T>;
    <K extends string, T extends {}>(property: K, object: T): assoc_extend_111<K, V, T>;
};
type assoc_general_010 = {
    (property: Property): assoc_general_110;
    <T extends {}>(_property: PH, object: T): assoc_general_011<T>;
    <$SEL extends "1">(): (property: Property) => assoc_general_110;
    <$SEL extends "01">(): <T extends {}>(_property: PH, object: T) => assoc_general_011<T>;
    <$SEL extends "11">(): <T extends {}>(property: Property, object: T) => assoc_general_111<T>;
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
