import { Predicate, Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const propSatisfies: propSatisfies_000;
type propSatisfies_000 = {
    /**
     * Returns `true` if the specified object property satisfies the given
     * predicate; `false` otherwise. You can test multiple properties with
     * [`R.where`](#where).
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
     * @see R.where, R.propEq, R.propIs
     * @example
     *
     *      R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
     */
    <T extends {
    }, K extends keyof T>(fn: Predicate<T[K]>): propSatisfies_keyof_100<T, K>;
    <K extends string, T extends Record<K, any>>(fn: Predicate<T[K]>): propSatisfies_record_100<K, T>;
    <V>(fn: Predicate<V>): propSatisfies_general_100<V>;
    <T extends {
    }, K extends keyof T>(_fn: PH, key: K): propSatisfies_keyof_010<T, K>;
    <K extends string>(_fn: PH, key: K): propSatisfies_record_010<K>;
    (_fn: PH, key: Property): propSatisfies_general_010;
    <T extends {
    }, K extends keyof T>(fn: Predicate<T[K]>, key: K): propSatisfies_keyof_110<T, K>;
    <K extends string, T extends Record<K, any>>(fn: Predicate<T[K]>, key: K): propSatisfies_record_110<K, T>;
    <V>(fn: Predicate<V>, key: Property): propSatisfies_general_110<V>;
    <T extends {
    }>(_fn: PH, _key: PH, object: T): propSatisfies_keyof_001<T>;
    <K extends string, T extends Record<K, any>>(_fn: PH, _key: PH, object: T): propSatisfies_record_001<K, T>;
    (_fn: PH, _key: PH, object: {
    }): propSatisfies_general_001;
    <T extends {
    }, K extends keyof T>(_fn: PH, key: K, object: T): propSatisfies_keyof_011<T, K>;
    <K extends string, T extends Record<K, any>>(_fn: PH, key: K, object: T): propSatisfies_record_011<K, T>;
    (_fn: PH, key: Property, object: {
    }): propSatisfies_general_011;
    <T extends {
    }, K extends keyof T>(fn: Predicate<T[K]>, _key: PH, object: T): propSatisfies_keyof_101<T, K>;
    <K extends string, T extends Record<K, any>>(fn: Predicate<T[K]>, _key: PH, object: T): propSatisfies_record_101<K, T>;
    <V>(fn: Predicate<V>, _key: PH, object: {
    }): propSatisfies_general_101<V>;
    <T extends {
    }, K extends keyof T>(fn: Predicate<T[K]>, key: K, object: T): propSatisfies_keyof_111;
    <K extends string, T extends Record<K, any>>(fn: Predicate<T[K]>, key: K, object: T): propSatisfies_record_111;
    <$SEL extends "111", $KIND extends "general">(): <V>(fn: Predicate<V>, key: Property, object: {
    }) => propSatisfies_general_111;
    <$SEL extends "111", $KIND extends "record">(): <K extends string, T extends Record<K, any>>(fn: Predicate<T[K]>, key: K, object: T) => propSatisfies_record_111;
    <$SEL extends "111", $KIND extends "keyof">(): <T extends {
    }, K extends keyof T>(fn: Predicate<T[K]>, key: K, object: T) => propSatisfies_keyof_111;
    <$SEL extends "101", $KIND extends "general">(): <V>(fn: Predicate<V>, _key: PH, object: {
    }) => propSatisfies_general_101<V>;
    <$SEL extends "101", $KIND extends "record">(): <K extends string, T extends Record<K, any>>(fn: Predicate<T[K]>, _key: PH, object: T) => propSatisfies_record_101<K, T>;
    <$SEL extends "101", $KIND extends "keyof">(): <T extends {
    }, K extends keyof T>(fn: Predicate<T[K]>, _key: PH, object: T) => propSatisfies_keyof_101<T, K>;
    <$SEL extends "011", $KIND extends "general">(): (_fn: PH, key: Property, object: {
    }) => propSatisfies_general_011;
    <$SEL extends "011", $KIND extends "record">(): <K extends string, T extends Record<K, any>>(_fn: PH, key: K, object: T) => propSatisfies_record_011<K, T>;
    <$SEL extends "011", $KIND extends "keyof">(): <T extends {
    }, K extends keyof T>(_fn: PH, key: K, object: T) => propSatisfies_keyof_011<T, K>;
    <$SEL extends "001", $KIND extends "general">(): (_fn: PH, _key: PH, object: {
    }) => propSatisfies_general_001;
    <$SEL extends "001", $KIND extends "record">(): <K extends string, T extends Record<K, any>>(_fn: PH, _key: PH, object: T) => propSatisfies_record_001<K, T>;
    <$SEL extends "001", $KIND extends "keyof">(): <T extends {
    }>(_fn: PH, _key: PH, object: T) => propSatisfies_keyof_001<T>;
    <$SEL extends "11", $KIND extends "general">(): <V>(fn: Predicate<V>, key: Property) => propSatisfies_general_110<V>;
    <$SEL extends "11", $KIND extends "record">(): <K extends string, T extends Record<K, any>>(fn: Predicate<T[K]>, key: K) => propSatisfies_record_110<K, T>;
    <$SEL extends "11", $KIND extends "keyof">(): <T extends {
    }, K extends keyof T>(fn: Predicate<T[K]>, key: K) => propSatisfies_keyof_110<T, K>;
    <$SEL extends "01", $KIND extends "general">(): (_fn: PH, key: Property) => propSatisfies_general_010;
    <$SEL extends "01", $KIND extends "record">(): <K extends string>(_fn: PH, key: K) => propSatisfies_record_010<K>;
    <$SEL extends "01", $KIND extends "keyof">(): <T extends {
    }, K extends keyof T>(_fn: PH, key: K) => propSatisfies_keyof_010<T, K>;
    <$SEL extends "1", $KIND extends "general">(): <V>(fn: Predicate<V>) => propSatisfies_general_100<V>;
    <$SEL extends "1", $KIND extends "record">(): <K extends string, T extends Record<K, any>>(fn: Predicate<T[K]>) => propSatisfies_record_100<K, T>;
    <$SEL extends "1", $KIND extends "keyof">(): <T extends {
    }, K extends keyof T>(fn: Predicate<T[K]>) => propSatisfies_keyof_100<T, K>;
    <V>(fn: Predicate<V>, key: Property, object: {
    }): propSatisfies_general_111;
};
type propSatisfies_keyof_100<T extends {
}, K extends keyof T> = {
    (key: K): propSatisfies_keyof_110<T, K>;
    (_key: PH, object: T): propSatisfies_keyof_101<T, K>;
    <$SEL extends "11">(): (key: K, object: T) => propSatisfies_keyof_111;
    <$SEL extends "01">(): (_key: PH, object: T) => propSatisfies_keyof_101<T, K>;
    <$SEL extends "1">(): (key: K) => propSatisfies_keyof_110<T, K>;
    (key: K, object: T): propSatisfies_keyof_111;
};
type propSatisfies_record_100<K extends string, T extends Record<K, any>> = {
    (key: K): propSatisfies_record_110<K, T>;
    (_key: PH, object: T): propSatisfies_record_101<K, T>;
    <$SEL extends "11">(): (key: K, object: T) => propSatisfies_record_111;
    <$SEL extends "01">(): (_key: PH, object: T) => propSatisfies_record_101<K, T>;
    <$SEL extends "1">(): (key: K) => propSatisfies_record_110<K, T>;
    (key: K, object: T): propSatisfies_record_111;
};
type propSatisfies_general_100<V> = {
    (key: Property): propSatisfies_general_110<V>;
    (_key: PH, object: {
    }): propSatisfies_general_101<V>;
    <$SEL extends "11">(): (key: Property, object: {
    }) => propSatisfies_general_111;
    <$SEL extends "01">(): (_key: PH, object: {
    }) => propSatisfies_general_101<V>;
    <$SEL extends "1">(): (key: Property) => propSatisfies_general_110<V>;
    (key: Property, object: {
    }): propSatisfies_general_111;
};
type propSatisfies_keyof_010<T extends {
}, K extends keyof T> = {
    (fn: Predicate<T[K]>): propSatisfies_keyof_110<T, K>;
    (_fn: PH, object: T): propSatisfies_keyof_011<T, K>;
    <$SEL extends "11">(): (fn: Predicate<T[K]>, object: T) => propSatisfies_keyof_111;
    <$SEL extends "01">(): (_fn: PH, object: T) => propSatisfies_keyof_011<T, K>;
    <$SEL extends "1">(): (fn: Predicate<T[K]>) => propSatisfies_keyof_110<T, K>;
    (fn: Predicate<T[K]>, object: T): propSatisfies_keyof_111;
};
type propSatisfies_record_010<K extends string> = {
    <T extends Record<K, any>>(fn: Predicate<T[K]>): propSatisfies_record_110<K, T>;
    <T extends Record<K, any>>(_fn: PH, object: T): propSatisfies_record_011<K, T>;
    <$SEL extends "11">(): <T extends Record<K, any>>(fn: Predicate<T[K]>, object: T) => propSatisfies_record_111;
    <$SEL extends "01">(): <T extends Record<K, any>>(_fn: PH, object: T) => propSatisfies_record_011<K, T>;
    <$SEL extends "1">(): <T extends Record<K, any>>(fn: Predicate<T[K]>) => propSatisfies_record_110<K, T>;
    <T extends Record<K, any>>(fn: Predicate<T[K]>, object: T): propSatisfies_record_111;
};
type propSatisfies_general_010 = {
    <V>(fn: Predicate<V>): propSatisfies_general_110<V>;
    (_fn: PH, object: {
    }): propSatisfies_general_011;
    <$SEL extends "11">(): <V>(fn: Predicate<V>, object: {
    }) => propSatisfies_general_111;
    <$SEL extends "01">(): (_fn: PH, object: {
    }) => propSatisfies_general_011;
    <$SEL extends "1">(): <V>(fn: Predicate<V>) => propSatisfies_general_110<V>;
    <V>(fn: Predicate<V>, object: {
    }): propSatisfies_general_111;
};
type propSatisfies_keyof_110<T extends {
}, K extends keyof T> = {
    (object: T): propSatisfies_keyof_111;
};
type propSatisfies_record_110<K extends string, T extends Record<K, any>> = {
    (object: T): propSatisfies_record_111;
};
type propSatisfies_general_110<V> = {
    (object: {
    }): propSatisfies_general_111;
};
type propSatisfies_keyof_001<T extends {
}> = {
    <K extends keyof T>(fn: Predicate<T[K]>): propSatisfies_keyof_101<T, K>;
    <K extends keyof T>(_fn: PH, key: K): propSatisfies_keyof_011<T, K>;
    <$SEL extends "11">(): <K extends keyof T>(fn: Predicate<T[K]>, key: K) => propSatisfies_keyof_111;
    <$SEL extends "01">(): <K extends keyof T>(_fn: PH, key: K) => propSatisfies_keyof_011<T, K>;
    <$SEL extends "1">(): <K extends keyof T>(fn: Predicate<T[K]>) => propSatisfies_keyof_101<T, K>;
    <K extends keyof T>(fn: Predicate<T[K]>, key: K): propSatisfies_keyof_111;
};
type propSatisfies_record_001<K extends string, T extends Record<K, any>> = {
    (fn: Predicate<T[K]>): propSatisfies_record_101<K, T>;
    (_fn: PH, key: K): propSatisfies_record_011<K, T>;
    <$SEL extends "11">(): (fn: Predicate<T[K]>, key: K) => propSatisfies_record_111;
    <$SEL extends "01">(): (_fn: PH, key: K) => propSatisfies_record_011<K, T>;
    <$SEL extends "1">(): (fn: Predicate<T[K]>) => propSatisfies_record_101<K, T>;
    (fn: Predicate<T[K]>, key: K): propSatisfies_record_111;
};
type propSatisfies_general_001 = {
    <V>(fn: Predicate<V>): propSatisfies_general_101<V>;
    (_fn: PH, key: Property): propSatisfies_general_011;
    <$SEL extends "11">(): <V>(fn: Predicate<V>, key: Property) => propSatisfies_general_111;
    <$SEL extends "01">(): (_fn: PH, key: Property) => propSatisfies_general_011;
    <$SEL extends "1">(): <V>(fn: Predicate<V>) => propSatisfies_general_101<V>;
    <V>(fn: Predicate<V>, key: Property): propSatisfies_general_111;
};
type propSatisfies_keyof_101<T extends {
}, K extends keyof T> = {
    (key: K): propSatisfies_keyof_111;
};
type propSatisfies_record_101<K extends string, T extends Record<K, any>> = {
    (key: K): propSatisfies_record_111;
};
type propSatisfies_general_101<V> = {
    (key: Property): propSatisfies_general_111;
};
type propSatisfies_keyof_011<T extends {
}, K extends keyof T> = {
    (fn: Predicate<T[K]>): propSatisfies_keyof_111;
};
type propSatisfies_record_011<K extends string, T extends Record<K, any>> = {
    (fn: Predicate<T[K]>): propSatisfies_record_111;
};
type propSatisfies_general_011 = {
    <V>(fn: Predicate<V>): propSatisfies_general_111;
};
type propSatisfies_keyof_111 = boolean;
type propSatisfies_record_111 = boolean;
type propSatisfies_general_111 = boolean;
export = propSatisfies;
