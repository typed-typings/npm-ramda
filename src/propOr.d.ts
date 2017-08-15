import { List, Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
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
declare const propOr: propOr_000;
type propOr_000 = {
    <D>(defaults: D): propOr_keyof_100<D>;
    <D>(defaults: D): propOr_record_100<D>;
    <T>(defaults: T): propOr_general_100<T>;
    <T extends {}, K extends keyof T>(_defaults: PH, key: K): propOr_keyof_010<T, K>;
    <K extends string>(_defaults: PH, key: K): propOr_record_010<K>;
    (_defaults: PH, key: Property): propOr_general_010;
    <D, T extends {}, K extends keyof T>(defaults: D, key: K): propOr_keyof_110<D, T, K>;
    <D, K extends string>(defaults: D, key: K): propOr_record_110<D, K>;
    <T>(defaults: T, key: Property): propOr_general_110<T>;
    <T extends {}>(_defaults: PH, _key: PH, object: T): propOr_keyof_001<T>;
    <K extends string, T extends Record<K, any>>(_defaults: PH, _key: PH, object: T): propOr_record_001<K, T>;
    (_defaults: PH, _key: PH, object: {}): propOr_general_001;
    <T extends {}, K extends keyof T>(_defaults: PH, key: K, object: T): propOr_keyof_011<T, K>;
    <K extends string, T extends Record<K, any>>(_defaults: PH, key: K, object: T): propOr_record_011<K, T>;
    (_defaults: PH, key: Property, object: {}): propOr_general_011;
    <D, T extends {}>(defaults: D, _key: PH, object: T): propOr_keyof_101<D, T>;
    <D, K extends string, T extends Record<K, any>>(defaults: D, _key: PH, object: T): propOr_record_101<D, K, T>;
    <T>(defaults: T, _key: PH, object: {}): propOr_general_101<T>;
    <D, T extends {}, K extends keyof T>(defaults: D, key: K, object: T): propOr_keyof_111<D, T, K>;
    <D, K extends string, T extends Record<K, any>>(defaults: D, key: K, object: T): propOr_record_111<D, K, T>;
    <T, U>(defaults: T, key: Property, object: {}): propOr_general_111<T, U>;
};
type propOr_keyof_100<D> = {
    <T extends {}, K extends keyof T>(key: K): propOr_keyof_110<D, T, K>;
    <T extends {}>(_key: PH, object: T): propOr_keyof_101<D, T>;
    <T extends {}, K extends keyof T>(key: K, object: T): propOr_keyof_111<D, T, K>;
};
type propOr_record_100<D> = {
    <K extends string>(key: K): propOr_record_110<D, K>;
    <K extends string, T extends Record<K, any>>(_key: PH, object: T): propOr_record_101<D, K, T>;
    <K extends string, T extends Record<K, any>>(key: K, object: T): propOr_record_111<D, K, T>;
};
type propOr_general_100<T> = {
    (key: Property): propOr_general_110<T>;
    (_key: PH, object: {}): propOr_general_101<T>;
    <U>(key: Property, object: {}): propOr_general_111<T, U>;
};
type propOr_keyof_010<T extends {}, K extends keyof T> = {
    <D>(defaults: D): propOr_keyof_110<D, T, K>;
    (_defaults: PH, object: T): propOr_keyof_011<T, K>;
    <D>(defaults: D, object: T): propOr_keyof_111<D, T, K>;
};
type propOr_record_010<K extends string> = {
    <D>(defaults: D): propOr_record_110<D, K>;
    <T extends Record<K, any>>(_defaults: PH, object: T): propOr_record_011<K, T>;
    <D, T extends Record<K, any>>(defaults: D, object: T): propOr_record_111<D, K, T>;
};
type propOr_general_010 = {
    <T>(defaults: T): propOr_general_110<T>;
    (_defaults: PH, object: {}): propOr_general_011;
    <T, U>(defaults: T, object: {}): propOr_general_111<T, U>;
};
type propOr_keyof_110<D, T extends {}, K extends keyof T> = {
    (object: T): propOr_keyof_111<D, T, K>;
};
type propOr_record_110<D, K extends string> = {
    <T extends Record<K, any>>(object: T): propOr_record_111<D, K, T>;
};
type propOr_general_110<T> = {
    <U>(object: {}): propOr_general_111<T, U>;
};
type propOr_keyof_001<T extends {}> = {
    <D>(defaults: D): propOr_keyof_101<D, T>;
    <K extends keyof T>(_defaults: PH, key: K): propOr_keyof_011<T, K>;
    <D, K extends keyof T>(defaults: D, key: K): propOr_keyof_111<D, T, K>;
};
type propOr_record_001<K extends string, T extends Record<K, any>> = {
    <D>(defaults: D): propOr_record_101<D, K, T>;
    (_defaults: PH, key: K): propOr_record_011<K, T>;
    <D>(defaults: D, key: K): propOr_record_111<D, K, T>;
};
type propOr_general_001 = {
    <T>(defaults: T): propOr_general_101<T>;
    (_defaults: PH, key: Property): propOr_general_011;
    <T, U>(defaults: T, key: Property): propOr_general_111<T, U>;
};
type propOr_keyof_101<D, T extends {}> = {
    <K extends keyof T>(key: K): propOr_keyof_111<D, T, K>;
};
type propOr_record_101<D, K extends string, T extends Record<K, any>> = {
    (key: K): propOr_record_111<D, K, T>;
};
type propOr_general_101<T> = {
    <U>(key: Property): propOr_general_111<T, U>;
};
type propOr_keyof_011<T extends {}, K extends keyof T> = {
    <D>(defaults: D): propOr_keyof_111<D, T, K>;
};
type propOr_record_011<K extends string, T extends Record<K, any>> = {
    <D>(defaults: D): propOr_record_111<D, K, T>;
};
type propOr_general_011 = {
    <T, U>(defaults: T): propOr_general_111<T, U>;
};
type propOr_keyof_111<D, T extends {}, K extends keyof T> = T[K] | D;
type propOr_record_111<D, K extends string, T extends Record<K, any>> = T[K] | D;
type propOr_general_111<T, U> = T | U;
export = propOr;
