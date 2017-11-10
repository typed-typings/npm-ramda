import { KeyValuePair, Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const pair: pair_00;
type pair_00 = {
    /**
     * Takes two arguments, `fst` and `snd`, and returns `[fst, snd]`.
     *
     * @func
     * @memberOf R
     * @since v0.18.0
     * @category List
     * @sig a -> b -> (a,b)
     * @param {*} fst
     * @param {*} snd
     * @return {Array}
     * @see R.objOf, R.of
     * @example
     *
     *      R.pair('foo', 'bar'); //=> ['foo', 'bar']
     */
    <K extends Property>(key: K): pair_10<K>;
    <V>(_key: PH, value: V): pair_01<V>;
    <$SEL extends "11">(): <K extends Property, V>(key: K, value: V) => pair_11<K, V>;
    <$SEL extends "01">(): <V>(_key: PH, value: V) => pair_01<V>;
    <$SEL extends "1">(): <K extends Property>(key: K) => pair_10<K>;
    <K extends Property, V>(key: K, value: V): pair_11<K, V>;
};
type pair_10<K extends Property> = {
    <V>(value: V): pair_11<K, V>;
};
type pair_01<V> = {
    <K extends Property>(key: K): pair_11<K, V>;
};
type pair_11<K extends Property, V> = KeyValuePair<K, V>;
export = pair;
