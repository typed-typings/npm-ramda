import { List, Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const pick: pick_00;
type pick_00 = {
    /**
     * Returns a partial copy of an object containing only the keys specified. If
     * the key does not exist, the property is ignored.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category Object
     * @sig [k] -> {k: v} -> {k: v}
     * @param {Array} names an array of String property names to copy onto a new object
     * @param {Object} obj The object to copy from
     * @return {Object} A new object with only properties from `names` on it.
     * @see R.omit, R.props
     * @example
     *
     *      R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
     *      R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
     */
    <T extends {
    }, K extends keyof T>(keys: List<K>): pick_keyof_10<T, K>;
    <V extends string>(keys: List<V>): pick_record_10<V>;
    (keys: List<Property>): pick_general_10;
    <T extends {
    }>(_keys: PH, object: T): pick_keyof_01<T>;
    <U extends Record<V, any>, V extends string>(_keys: PH, object: U): pick_record_01<U, V>;
    <T extends {
    }>(_keys: PH, object: T): pick_general_01<T>;
    <T extends {
    }, K extends keyof T>(keys: List<K>, object: T): pick_keyof_11<T, K>;
    <U extends Record<V, any>, V extends string>(keys: List<V>, object: U): pick_record_11<U, V>;
    <$SEL extends "11", $KIND extends "general">(): <T extends {
    }>(keys: List<Property>, object: T) => pick_general_11<T>;
    <$SEL extends "11", $KIND extends "record">(): <U extends Record<V, any>, V extends string>(keys: List<V>, object: U) => pick_record_11<U, V>;
    <$SEL extends "11", $KIND extends "keyof">(): <T extends {
    }, K extends keyof T>(keys: List<K>, object: T) => pick_keyof_11<T, K>;
    <$SEL extends "01", $KIND extends "general">(): <T extends {
    }>(_keys: PH, object: T) => pick_general_01<T>;
    <$SEL extends "01", $KIND extends "record">(): <U extends Record<V, any>, V extends string>(_keys: PH, object: U) => pick_record_01<U, V>;
    <$SEL extends "01", $KIND extends "keyof">(): <T extends {
    }>(_keys: PH, object: T) => pick_keyof_01<T>;
    <$SEL extends "1", $KIND extends "general">(): (keys: List<Property>) => pick_general_10;
    <$SEL extends "1", $KIND extends "record">(): <V extends string>(keys: List<V>) => pick_record_10<V>;
    <$SEL extends "1", $KIND extends "keyof">(): <T extends {
    }, K extends keyof T>(keys: List<K>) => pick_keyof_10<T, K>;
    <T extends {
    }>(keys: List<Property>, object: T): pick_general_11<T>;
};
type pick_keyof_10<T extends {
}, K extends keyof T> = {
    (object: T): pick_keyof_11<T, K>;
};
type pick_record_10<V extends string> = {
    <U extends Record<V, any>>(object: U): pick_record_11<U, V>;
};
type pick_general_10 = {
    <T extends {
    }>(object: T): pick_general_11<T>;
};
type pick_keyof_01<T extends {
}> = {
    <K extends keyof T>(keys: List<K>): pick_keyof_11<T, K>;
};
type pick_record_01<U extends Record<V, any>, V extends string> = {
    (keys: List<V>): pick_record_11<U, V>;
};
type pick_general_01<T extends {
}> = {
    (keys: List<Property>): pick_general_11<T>;
};
type pick_keyof_11<T extends {
}, K extends keyof T> = Pick<T, K>;
type pick_record_11<U extends Record<V, any>, V extends string> = Pick<U, V>;
type pick_general_11<T extends {
}> = Partial<T>;
export = pick;
