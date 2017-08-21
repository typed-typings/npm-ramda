import { Constructor, Property } from "./$types";
declare const propIs: propIs_000;
type propIs_000 = {
    /**
     * Returns `true` if the specified object property is of the given type;
     * `false` otherwise.
     *
     * @func
     * @memberOf R
     * @since v0.16.0
     * @category Type
     * @sig Type -> String -> Object -> Boolean
     * @param {Function} type
     * @param {String} name
     * @param {*} obj
     * @return {Boolean}
     * @see R.is, R.propSatisfies
     * @example
     *
     *      R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
     *      R.propIs(Number, 'x', {x: 'foo'});    //=> false
     *      R.propIs(Number, 'x', {});            //=> false
     */
    <T>(constructor: Constructor<T>): propIs_guard_100<T>;
    (constructor: Constructor<any>): propIs_general_100;
    <T, K extends string>(constructor: Constructor<T>, key: K): propIs_guard_110<T, K>;
    (constructor: Constructor<any>, key: Property): propIs_general_110;
    <T, U extends {}, K extends string>(constructor: Constructor<T>, key: K, object: U): object is U & Record<K, T>;
    <$SEL extends "1", $KIND extends "guard">(): <T>(constructor: Constructor<T>) => propIs_guard_100<T>;
    <$SEL extends "1", $KIND extends "general">(): (constructor: Constructor<any>) => propIs_general_100;
    <$SEL extends "11", $KIND extends "guard">(): <T, K extends string>(constructor: Constructor<T>, key: K) => propIs_guard_110<T, K>;
    <$SEL extends "11", $KIND extends "general">(): (constructor: Constructor<any>, key: Property) => propIs_general_110;
    <$SEL extends "111", $KIND extends "guard">(): <T, U extends {}, K extends string>(constructor: Constructor<T>, key: K, object: U) => object is U & Record<K, T>;
    <$SEL extends "111", $KIND extends "general">(): (constructor: Constructor<any>, key: Property, object: {}) => propIs_general_111;
    (constructor: Constructor<any>, key: Property, object: {}): propIs_general_111;
};
type propIs_guard_100<T> = {
    <K extends string>(key: K): propIs_guard_110<T, K>;
    <$SEL extends "1">(): <K extends string>(key: K) => propIs_guard_110<T, K>;
    <$SEL extends "11">(): <U extends {}, K extends string>(key: K, object: U) => object is U & Record<K, T>;
    <U extends {}, K extends string>(key: K, object: U): object is U & Record<K, T>;
};
type propIs_general_100 = {
    (key: Property): propIs_general_110;
    <$SEL extends "1">(): (key: Property) => propIs_general_110;
    <$SEL extends "11">(): (key: Property, object: {}) => propIs_general_111;
    (key: Property, object: {}): propIs_general_111;
};
type propIs_guard_110<T, K extends string> = {
    <U extends {}>(object: U): object is U & Record<K, T>;
};
type propIs_general_110 = {
    (object: {}): propIs_general_111;
};
type propIs_guard_111<T, U extends {}, K extends string> = boolean;
type propIs_general_111 = boolean;
export = propIs;
