import { Dictionary, KeyValuePair, List, Property } from "./$types";
declare const fromPairs: fromPairs_0;
type fromPairs_0 = {
    /**
     * Creates a new object from a list key-value pairs. If a key appears in
     * multiple pairs, the rightmost pair is included in the object.
     *
     * @func
     * @memberOf R
     * @since v0.3.0
     * @category List
     * @sig [[k,v]] -> {k: v}
     * @param {Array} pairs An array of two-element arrays that will be the keys and values of the output object.
     * @return {Object} The object made by pairing up `keys` and `values`.
     * @see R.toPairs, R.pair
     * @example
     *
     *      R.fromPairs([['a', 1], ['b', 2], ['c', 3]]); //=> {a: 1, b: 2, c: 3}
     */
    <T>(pairs: List<KeyValuePair<Property, T>>): fromPairs_1<T>;
};
type fromPairs_1<T> = Dictionary<T>;
export = fromPairs;
