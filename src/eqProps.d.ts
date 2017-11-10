import { Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const eqProps: eqProps_000;
type eqProps_000 = {
    /**
     * Reports whether two objects have the same value, in [`R.equals`](#equals)
     * terms, for the specified property. Useful as a curried predicate.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category Object
     * @sig k -> {k: v} -> {k: v} -> Boolean
     * @param {String} prop The name of the property to compare
     * @param {Object} obj1
     * @param {Object} obj2
     * @return {Boolean}
     *
     * @example
     *
     *      var o1 = { a: 1, b: 2, c: 3, d: 4 };
     *      var o2 = { a: 10, b: 20, c: 3, d: 40 };
     *      R.eqProps('a', o1, o2); //=> false
     *      R.eqProps('c', o1, o2); //=> true
     */
    (property: Property): eqProps_100;
    <T>(_property: PH, a: T): eqProps_010<T>;
    <T>(property: Property, a: T): eqProps_110<T>;
    <T>(_property: PH, _a: PH, b: T): eqProps_001<T>;
    <T>(_property: PH, a: T, b: T): eqProps_011<T>;
    <T>(property: Property, _a: PH, b: T): eqProps_101<T>;
    <$SEL extends "111">(): <T>(property: Property, a: T, b: T) => eqProps_111;
    <$SEL extends "101">(): <T>(property: Property, _a: PH, b: T) => eqProps_101<T>;
    <$SEL extends "011">(): <T>(_property: PH, a: T, b: T) => eqProps_011<T>;
    <$SEL extends "001">(): <T>(_property: PH, _a: PH, b: T) => eqProps_001<T>;
    <$SEL extends "11">(): <T>(property: Property, a: T) => eqProps_110<T>;
    <$SEL extends "01">(): <T>(_property: PH, a: T) => eqProps_010<T>;
    <$SEL extends "1">(): (property: Property) => eqProps_100;
    <T>(property: Property, a: T, b: T): eqProps_111;
};
type eqProps_100 = {
    <T>(a: T): eqProps_110<T>;
    <T>(_a: PH, b: T): eqProps_101<T>;
    <$SEL extends "11">(): <T>(a: T, b: T) => eqProps_111;
    <$SEL extends "01">(): <T>(_a: PH, b: T) => eqProps_101<T>;
    <$SEL extends "1">(): <T>(a: T) => eqProps_110<T>;
    <T>(a: T, b: T): eqProps_111;
};
type eqProps_010<T> = {
    (property: Property): eqProps_110<T>;
    (_property: PH, b: T): eqProps_011<T>;
    <$SEL extends "11">(): (property: Property, b: T) => eqProps_111;
    <$SEL extends "01">(): (_property: PH, b: T) => eqProps_011<T>;
    <$SEL extends "1">(): (property: Property) => eqProps_110<T>;
    (property: Property, b: T): eqProps_111;
};
type eqProps_110<T> = {
    (b: T): eqProps_111;
};
type eqProps_001<T> = {
    (property: Property): eqProps_101<T>;
    (_property: PH, a: T): eqProps_011<T>;
    <$SEL extends "11">(): (property: Property, a: T) => eqProps_111;
    <$SEL extends "01">(): (_property: PH, a: T) => eqProps_011<T>;
    <$SEL extends "1">(): (property: Property) => eqProps_101<T>;
    (property: Property, a: T): eqProps_111;
};
type eqProps_101<T> = {
    (a: T): eqProps_111;
};
type eqProps_011<T> = {
    (property: Property): eqProps_111;
};
type eqProps_111 = boolean;
export = eqProps;
