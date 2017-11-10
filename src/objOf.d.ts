import { Placeholder as PH } from "./$placeholder";
declare const objOf: objOf_00;
type objOf_00 = {
    /**
     * Creates an object containing a single key:value pair.
     *
     * @func
     * @memberOf R
     * @since v0.18.0
     * @category Object
     * @sig String -> a -> {String:a}
     * @param {String} key
     * @param {*} val
     * @return {Object}
     * @see R.pair
     * @example
     *
     *      var matchPhrases = R.compose(
     *        R.objOf('must'),
     *        R.map(R.objOf('match_phrase'))
     *      );
     *      matchPhrases(['foo', 'bar', 'baz']); //=> {must: [{match_phrase: 'foo'}, {match_phrase: 'bar'}, {match_phrase: 'baz'}]}
     */
    <K extends string>(key: K): objOf_10<K>;
    <V>(_key: PH, value: V): objOf_01<V>;
    <$SEL extends "11">(): <K extends string, V>(key: K, value: V) => objOf_11<K, V>;
    <$SEL extends "01">(): <V>(_key: PH, value: V) => objOf_01<V>;
    <$SEL extends "1">(): <K extends string>(key: K) => objOf_10<K>;
    <K extends string, V>(key: K, value: V): objOf_11<K, V>;
};
type objOf_10<K extends string> = {
    <V>(value: V): objOf_11<K, V>;
};
type objOf_01<V> = {
    <K extends string>(key: K): objOf_11<K, V>;
};
type objOf_11<K extends string, V> = Record<K, V>;
export = objOf;
