import { Omit } from "./$operation";
import { List, Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const omit: omit_00;
type omit_00 = {
    /**
     * Returns a partial copy of an object omitting the keys specified.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category Object
     * @sig [String] -> {String: *} -> {String: *}
     * @param {Array} names an array of String property names to omit from the new object
     * @param {Object} obj The object to copy from
     * @return {Object} A new object with properties from `names` not on it.
     * @see R.pick
     * @example
     *
     *      R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
     */
    <T, K extends keyof T>(key: List<K>): omit_keyof_10<T, K>;
    <K extends string>(key: List<K>): omit_record_10<K>;
    (keys: List<Property>): omit_general_10;
    <T>(_key: PH, object: T): omit_keyof_01<T>;
    <T extends Record<K, any>, K extends string>(_key: PH, object: T): omit_record_01<T, K>;
    <T>(_keys: PH, object: T): omit_general_01<T>;
    <T, K extends keyof T>(key: List<K>, object: T): omit_keyof_11<T, K>;
    <T extends Record<K, any>, K extends string>(key: List<K>, object: T): omit_record_11<T, K>;
    <$SEL extends "11", $KIND extends "general">(): <T>(keys: List<Property>, object: T) => omit_general_11<T>;
    <$SEL extends "11", $KIND extends "record">(): <T extends Record<K, any>, K extends string>(key: List<K>, object: T) => omit_record_11<T, K>;
    <$SEL extends "11", $KIND extends "keyof">(): <T, K extends keyof T>(key: List<K>, object: T) => omit_keyof_11<T, K>;
    <$SEL extends "01", $KIND extends "general">(): <T>(_keys: PH, object: T) => omit_general_01<T>;
    <$SEL extends "01", $KIND extends "record">(): <T extends Record<K, any>, K extends string>(_key: PH, object: T) => omit_record_01<T, K>;
    <$SEL extends "01", $KIND extends "keyof">(): <T>(_key: PH, object: T) => omit_keyof_01<T>;
    <$SEL extends "1", $KIND extends "general">(): (keys: List<Property>) => omit_general_10;
    <$SEL extends "1", $KIND extends "record">(): <K extends string>(key: List<K>) => omit_record_10<K>;
    <$SEL extends "1", $KIND extends "keyof">(): <T, K extends keyof T>(key: List<K>) => omit_keyof_10<T, K>;
    <T>(keys: List<Property>, object: T): omit_general_11<T>;
};
type omit_keyof_10<T, K extends keyof T> = {
    (object: T): omit_keyof_11<T, K>;
};
type omit_record_10<K extends string> = {
    <T extends Record<K, any>>(object: T): omit_record_11<T, K>;
};
type omit_general_10 = {
    <T>(object: T): omit_general_11<T>;
};
type omit_keyof_01<T> = {
    <K extends keyof T>(key: List<K>): omit_keyof_11<T, K>;
};
type omit_record_01<T extends Record<K, any>, K extends string> = {
    (key: List<K>): omit_record_11<T, K>;
};
type omit_general_01<T> = {
    (keys: List<Property>): omit_general_11<T>;
};
type omit_keyof_11<T, K extends keyof T> = Omit<T, K>;
type omit_record_11<T extends Record<K, any>, K extends string> = Omit<T, K>;
type omit_general_11<T> = Partial<T>;
export = omit;
