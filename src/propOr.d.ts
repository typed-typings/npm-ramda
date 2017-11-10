import { Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const propOr: propOr_000;
type propOr_000 = {
    /**
     * If the given, non-null object has an own property with the specified name,
     * returns the value of that property. Otherwise returns the provided default
     * value.
     *
     * @func
     * @memberOf R
     * @since v0.6.0
     * @category Object
     * @sig a -> String -> Object -> a
     * @param {*} val The default value.
     * @param {String} p The name of the property to return.
     * @param {Object} obj The object to query.
     * @return {*} The value of given property of the supplied object or the default value.
     * @example
     *
     *      var alice = {
     *        name: 'ALICE',
     *        age: 101
     *      };
     *      var favorite = R.prop('favoriteLibrary');
     *      var favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');
     *
     *      favorite(alice);  //=> undefined
     *      favoriteWithDefault(alice);  //=> 'Ramda'
     */
    <D>(defaults: D): propOr_keyof_100<D>;
    <D>(defaults: D): propOr_record_100<D>;
    <T>(defaults: T): propOr_general_100<T>;
    <T, K extends keyof T>(_defaults: PH, key: K): propOr_keyof_010<T, K>;
    <K extends string>(_defaults: PH, key: K): propOr_record_010<K>;
    (_defaults: PH, key: Property): propOr_general_010;
    <D, T, K extends keyof T>(defaults: D, key: K): propOr_keyof_110<D, T, K>;
    <D, K extends string>(defaults: D, key: K): propOr_record_110<D, K>;
    <T>(defaults: T, key: Property): propOr_general_110<T>;
    <T>(_defaults: PH, _key: PH, object: T): propOr_keyof_001<T>;
    <K extends string, T extends Record<K, any>>(_defaults: PH, _key: PH, object: T): propOr_record_001<K, T>;
    (_defaults: PH, _key: PH, object: any): propOr_general_001;
    <T, K extends keyof T>(_defaults: PH, key: K, object: T): propOr_keyof_011<T, K>;
    <K extends string, T extends Record<K, any>>(_defaults: PH, key: K, object: T): propOr_record_011<K, T>;
    (_defaults: PH, key: Property, object: any): propOr_general_011;
    <D, T>(defaults: D, _key: PH, object: T): propOr_keyof_101<D, T>;
    <D, K extends string, T extends Record<K, any>>(defaults: D, _key: PH, object: T): propOr_record_101<D, K, T>;
    <T>(defaults: T, _key: PH, object: any): propOr_general_101<T>;
    <D, T, K extends keyof T>(defaults: D, key: K, object: T): propOr_keyof_111<D, T, K>;
    <D, K extends string, T extends Record<K, any>>(defaults: D, key: K, object: T): propOr_record_111<D, K, T>;
    <$SEL extends "111", $KIND extends "general">(): <T, U>(defaults: T, key: Property, object: any) => propOr_general_111<T, U>;
    <$SEL extends "111", $KIND extends "record">(): <D, K extends string, T extends Record<K, any>>(defaults: D, key: K, object: T) => propOr_record_111<D, K, T>;
    <$SEL extends "111", $KIND extends "keyof">(): <D, T, K extends keyof T>(defaults: D, key: K, object: T) => propOr_keyof_111<D, T, K>;
    <$SEL extends "101", $KIND extends "general">(): <T>(defaults: T, _key: PH, object: any) => propOr_general_101<T>;
    <$SEL extends "101", $KIND extends "record">(): <D, K extends string, T extends Record<K, any>>(defaults: D, _key: PH, object: T) => propOr_record_101<D, K, T>;
    <$SEL extends "101", $KIND extends "keyof">(): <D, T>(defaults: D, _key: PH, object: T) => propOr_keyof_101<D, T>;
    <$SEL extends "011", $KIND extends "general">(): (_defaults: PH, key: Property, object: any) => propOr_general_011;
    <$SEL extends "011", $KIND extends "record">(): <K extends string, T extends Record<K, any>>(_defaults: PH, key: K, object: T) => propOr_record_011<K, T>;
    <$SEL extends "011", $KIND extends "keyof">(): <T, K extends keyof T>(_defaults: PH, key: K, object: T) => propOr_keyof_011<T, K>;
    <$SEL extends "001", $KIND extends "general">(): (_defaults: PH, _key: PH, object: any) => propOr_general_001;
    <$SEL extends "001", $KIND extends "record">(): <K extends string, T extends Record<K, any>>(_defaults: PH, _key: PH, object: T) => propOr_record_001<K, T>;
    <$SEL extends "001", $KIND extends "keyof">(): <T>(_defaults: PH, _key: PH, object: T) => propOr_keyof_001<T>;
    <$SEL extends "11", $KIND extends "general">(): <T>(defaults: T, key: Property) => propOr_general_110<T>;
    <$SEL extends "11", $KIND extends "record">(): <D, K extends string>(defaults: D, key: K) => propOr_record_110<D, K>;
    <$SEL extends "11", $KIND extends "keyof">(): <D, T, K extends keyof T>(defaults: D, key: K) => propOr_keyof_110<D, T, K>;
    <$SEL extends "01", $KIND extends "general">(): (_defaults: PH, key: Property) => propOr_general_010;
    <$SEL extends "01", $KIND extends "record">(): <K extends string>(_defaults: PH, key: K) => propOr_record_010<K>;
    <$SEL extends "01", $KIND extends "keyof">(): <T, K extends keyof T>(_defaults: PH, key: K) => propOr_keyof_010<T, K>;
    <$SEL extends "1", $KIND extends "general">(): <T>(defaults: T) => propOr_general_100<T>;
    <$SEL extends "1", $KIND extends "record">(): <D>(defaults: D) => propOr_record_100<D>;
    <$SEL extends "1", $KIND extends "keyof">(): <D>(defaults: D) => propOr_keyof_100<D>;
    <T, U>(defaults: T, key: Property, object: any): propOr_general_111<T, U>;
};
type propOr_keyof_100<D> = {
    <T, K extends keyof T>(key: K): propOr_keyof_110<D, T, K>;
    <T>(_key: PH, object: T): propOr_keyof_101<D, T>;
    <$SEL extends "11">(): <T, K extends keyof T>(key: K, object: T) => propOr_keyof_111<D, T, K>;
    <$SEL extends "01">(): <T>(_key: PH, object: T) => propOr_keyof_101<D, T>;
    <$SEL extends "1">(): <T, K extends keyof T>(key: K) => propOr_keyof_110<D, T, K>;
    <T, K extends keyof T>(key: K, object: T): propOr_keyof_111<D, T, K>;
};
type propOr_record_100<D> = {
    <K extends string>(key: K): propOr_record_110<D, K>;
    <K extends string, T extends Record<K, any>>(_key: PH, object: T): propOr_record_101<D, K, T>;
    <$SEL extends "11">(): <K extends string, T extends Record<K, any>>(key: K, object: T) => propOr_record_111<D, K, T>;
    <$SEL extends "01">(): <K extends string, T extends Record<K, any>>(_key: PH, object: T) => propOr_record_101<D, K, T>;
    <$SEL extends "1">(): <K extends string>(key: K) => propOr_record_110<D, K>;
    <K extends string, T extends Record<K, any>>(key: K, object: T): propOr_record_111<D, K, T>;
};
type propOr_general_100<T> = {
    (key: Property): propOr_general_110<T>;
    (_key: PH, object: any): propOr_general_101<T>;
    <$SEL extends "11">(): <U>(key: Property, object: any) => propOr_general_111<T, U>;
    <$SEL extends "01">(): (_key: PH, object: any) => propOr_general_101<T>;
    <$SEL extends "1">(): (key: Property) => propOr_general_110<T>;
    <U>(key: Property, object: any): propOr_general_111<T, U>;
};
type propOr_keyof_010<T, K extends keyof T> = {
    <D>(defaults: D): propOr_keyof_110<D, T, K>;
    (_defaults: PH, object: T): propOr_keyof_011<T, K>;
    <$SEL extends "11">(): <D>(defaults: D, object: T) => propOr_keyof_111<D, T, K>;
    <$SEL extends "01">(): (_defaults: PH, object: T) => propOr_keyof_011<T, K>;
    <$SEL extends "1">(): <D>(defaults: D) => propOr_keyof_110<D, T, K>;
    <D>(defaults: D, object: T): propOr_keyof_111<D, T, K>;
};
type propOr_record_010<K extends string> = {
    <D>(defaults: D): propOr_record_110<D, K>;
    <T extends Record<K, any>>(_defaults: PH, object: T): propOr_record_011<K, T>;
    <$SEL extends "11">(): <D, T extends Record<K, any>>(defaults: D, object: T) => propOr_record_111<D, K, T>;
    <$SEL extends "01">(): <T extends Record<K, any>>(_defaults: PH, object: T) => propOr_record_011<K, T>;
    <$SEL extends "1">(): <D>(defaults: D) => propOr_record_110<D, K>;
    <D, T extends Record<K, any>>(defaults: D, object: T): propOr_record_111<D, K, T>;
};
type propOr_general_010 = {
    <T>(defaults: T): propOr_general_110<T>;
    (_defaults: PH, object: any): propOr_general_011;
    <$SEL extends "11">(): <T, U>(defaults: T, object: any) => propOr_general_111<T, U>;
    <$SEL extends "01">(): (_defaults: PH, object: any) => propOr_general_011;
    <$SEL extends "1">(): <T>(defaults: T) => propOr_general_110<T>;
    <T, U>(defaults: T, object: any): propOr_general_111<T, U>;
};
type propOr_keyof_110<D, T, K extends keyof T> = {
    (object: T): propOr_keyof_111<D, T, K>;
};
type propOr_record_110<D, K extends string> = {
    <T extends Record<K, any>>(object: T): propOr_record_111<D, K, T>;
};
type propOr_general_110<T> = {
    <U>(object: any): propOr_general_111<T, U>;
};
type propOr_keyof_001<T> = {
    <D>(defaults: D): propOr_keyof_101<D, T>;
    <K extends keyof T>(_defaults: PH, key: K): propOr_keyof_011<T, K>;
    <$SEL extends "11">(): <D, K extends keyof T>(defaults: D, key: K) => propOr_keyof_111<D, T, K>;
    <$SEL extends "01">(): <K extends keyof T>(_defaults: PH, key: K) => propOr_keyof_011<T, K>;
    <$SEL extends "1">(): <D>(defaults: D) => propOr_keyof_101<D, T>;
    <D, K extends keyof T>(defaults: D, key: K): propOr_keyof_111<D, T, K>;
};
type propOr_record_001<K extends string, T extends Record<K, any>> = {
    <D>(defaults: D): propOr_record_101<D, K, T>;
    (_defaults: PH, key: K): propOr_record_011<K, T>;
    <$SEL extends "11">(): <D>(defaults: D, key: K) => propOr_record_111<D, K, T>;
    <$SEL extends "01">(): (_defaults: PH, key: K) => propOr_record_011<K, T>;
    <$SEL extends "1">(): <D>(defaults: D) => propOr_record_101<D, K, T>;
    <D>(defaults: D, key: K): propOr_record_111<D, K, T>;
};
type propOr_general_001 = {
    <T>(defaults: T): propOr_general_101<T>;
    (_defaults: PH, key: Property): propOr_general_011;
    <$SEL extends "11">(): <T, U>(defaults: T, key: Property) => propOr_general_111<T, U>;
    <$SEL extends "01">(): (_defaults: PH, key: Property) => propOr_general_011;
    <$SEL extends "1">(): <T>(defaults: T) => propOr_general_101<T>;
    <T, U>(defaults: T, key: Property): propOr_general_111<T, U>;
};
type propOr_keyof_101<D, T> = {
    <K extends keyof T>(key: K): propOr_keyof_111<D, T, K>;
};
type propOr_record_101<D, K extends string, T extends Record<K, any>> = {
    (key: K): propOr_record_111<D, K, T>;
};
type propOr_general_101<T> = {
    <U>(key: Property): propOr_general_111<T, U>;
};
type propOr_keyof_011<T, K extends keyof T> = {
    <D>(defaults: D): propOr_keyof_111<D, T, K>;
};
type propOr_record_011<K extends string, T extends Record<K, any>> = {
    <D>(defaults: D): propOr_record_111<D, K, T>;
};
type propOr_general_011 = {
    <T, U>(defaults: T): propOr_general_111<T, U>;
};
type propOr_keyof_111<D, T, K extends keyof T> = T[K] | D;
type propOr_record_111<D, K extends string, T extends Record<K, any>> = T[K] | D;
type propOr_general_111<T, U> = T | U;
export = propOr;
