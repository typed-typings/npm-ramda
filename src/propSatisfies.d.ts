import { Predicate, Property } from "./$types";
/**
 * Returns `true` if the specified object property satisfies the given
 * predicate; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Logic
 * @sig (a -> Boolean) -> String -> {String: a} -> Boolean
 * @param {Function} pred
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.propEq, R.propIs
 * @example
 *
 *      R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
 */
declare const propSatisfies: propSatisfies_000;
type propSatisfies_000 = {
    <T extends {}, K extends keyof T>(fn: Predicate<T[K]>): propSatisfies_keyof_100<T, K>;
    <K extends string, T extends Record<K, any>>(fn: Predicate<T[K]>): propSatisfies_record_100<K, T>;
    <V>(fn: Predicate<V>): propSatisfies_general_100<V>;
    <T extends {}, K extends keyof T>(fn: Predicate<T[K]>, key: K): propSatisfies_keyof_110<T, K>;
    <K extends string, T extends Record<K, any>>(fn: Predicate<T[K]>, key: K): propSatisfies_record_110<K, T>;
    <V>(fn: Predicate<V>, key: Property): propSatisfies_general_110<V>;
    <T extends {}, K extends keyof T>(fn: Predicate<T[K]>, key: K, object: T): propSatisfies_keyof_111;
    <K extends string, T extends Record<K, any>>(fn: Predicate<T[K]>, key: K, object: T): propSatisfies_record_111;
    <V>(fn: Predicate<V>, key: Property, object: {}): propSatisfies_general_111;
};
type propSatisfies_keyof_100<T extends {}, K extends keyof T> = {
    (key: K): propSatisfies_keyof_110<T, K>;
    (key: K, object: T): propSatisfies_keyof_111;
};
type propSatisfies_record_100<K extends string, T extends Record<K, any>> = {
    (key: K): propSatisfies_record_110<K, T>;
    (key: K, object: T): propSatisfies_record_111;
};
type propSatisfies_general_100<V> = {
    (key: Property): propSatisfies_general_110<V>;
    (key: Property, object: {}): propSatisfies_general_111;
};
type propSatisfies_keyof_110<T extends {}, K extends keyof T> = {
    (object: T): propSatisfies_keyof_111;
};
type propSatisfies_record_110<K extends string, T extends Record<K, any>> = {
    (object: T): propSatisfies_record_111;
};
type propSatisfies_general_110<V> = {
    (object: {}): propSatisfies_general_111;
};
type propSatisfies_keyof_111 = boolean;
type propSatisfies_record_111 = boolean;
type propSatisfies_general_111 = boolean;
export = propSatisfies;
