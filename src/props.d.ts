import { List, Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const props: props_00;
type props_00 = {
    /**
     * Acts as multiple `prop`: array of keys in, array of values out. Preserves
     * order.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category Object
     * @sig [k] -> {k: v} -> [v]
     * @param {Array} ps The property names to fetch
     * @param {Object} obj The object to query
     * @return {Array} The corresponding values or partially applied function.
     * @example
     *
     *      R.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]
     *      R.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]
     *
     *      var fullName = R.compose(R.join(' '), R.props(['first', 'last']));
     *      fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'
     */
    <T extends {
    }, K extends keyof T>(keys: List<K>): props_keyof_10<T, K>;
    <K extends string>(keys: List<K>): props_record_10<K>;
    (keys: Property[]): props_general_10;
    <T extends {
    }>(_keys: PH, object: T): props_keyof_01<T>;
    <K extends string, T extends Record<K, any>>(_keys: PH, object: T): props_record_01<K, T>;
    (_keys: PH, object: {
    }): props_general_01;
    <T extends {
    }, K extends keyof T>(keys: List<K>, object: T): props_keyof_11<T, K>;
    <K extends string, T extends Record<K, any>>(keys: List<K>, object: T): props_record_11<K, T>;
    <$SEL extends "11", $KIND extends "general">(): (keys: Property[], object: {
    }) => props_general_11;
    <$SEL extends "11", $KIND extends "record">(): <K extends string, T extends Record<K, any>>(keys: List<K>, object: T) => props_record_11<K, T>;
    <$SEL extends "11", $KIND extends "keyof">(): <T extends {
    }, K extends keyof T>(keys: List<K>, object: T) => props_keyof_11<T, K>;
    <$SEL extends "01", $KIND extends "general">(): (_keys: PH, object: {
    }) => props_general_01;
    <$SEL extends "01", $KIND extends "record">(): <K extends string, T extends Record<K, any>>(_keys: PH, object: T) => props_record_01<K, T>;
    <$SEL extends "01", $KIND extends "keyof">(): <T extends {
    }>(_keys: PH, object: T) => props_keyof_01<T>;
    <$SEL extends "1", $KIND extends "general">(): (keys: Property[]) => props_general_10;
    <$SEL extends "1", $KIND extends "record">(): <K extends string>(keys: List<K>) => props_record_10<K>;
    <$SEL extends "1", $KIND extends "keyof">(): <T extends {
    }, K extends keyof T>(keys: List<K>) => props_keyof_10<T, K>;
    (keys: Property[], object: {
    }): props_general_11;
};
type props_keyof_10<T extends {
}, K extends keyof T> = {
    (object: T): props_keyof_11<T, K>;
};
type props_record_10<K extends string> = {
    <T extends Record<K, any>>(object: T): props_record_11<K, T>;
};
type props_general_10 = {
    (object: {
    }): props_general_11;
};
type props_keyof_01<T extends {
}> = {
    <K extends keyof T>(keys: List<K>): props_keyof_11<T, K>;
};
type props_record_01<K extends string, T extends Record<K, any>> = {
    (keys: List<K>): props_record_11<K, T>;
};
type props_general_01 = {
    (keys: Property[]): props_general_11;
};
type props_keyof_11<T extends {
}, K extends keyof T> = Array<T[K]>;
type props_record_11<K extends string, T extends Record<K, any>> = Array<T[K]>;
type props_general_11 = any[];
export = props;
