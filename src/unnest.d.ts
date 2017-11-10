import { List } from "./$types";
declare const unnest: unnest_0;
type unnest_0 = {
    /**
     * Shorthand for `R.chain(R.identity)`, which removes one level of nesting from
     * any [Chain](https://github.com/fantasyland/fantasy-land#chain).
     *
     * @func
     * @memberOf R
     * @since v0.3.0
     * @category List
     * @sig Chain c => c (c a) -> c a
     * @param {*} list
     * @return {*}
     * @see R.flatten, R.chain
     * @example
     *
     *      R.unnest([1, [2], [[3]]]); //=> [1, 2, [3]]
     *      R.unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]
     */
    <T>(list: List<List<T>>): unnest_deep_1<T>;
    <T>(list: List<T>): unnest_shallow_1<T>;
    <$SEL extends "1", $KIND extends "mixed">(): <T>(list: List<List<T>> | List<T>) => unnest_mixed_1<T>;
    <$SEL extends "1", $KIND extends "shallow">(): <T>(list: List<T>) => unnest_shallow_1<T>;
    <$SEL extends "1", $KIND extends "deep">(): <T>(list: List<List<T>>) => unnest_deep_1<T>;
    <T>(list: List<List<T>> | List<T>): unnest_mixed_1<T>;
};
type unnest_deep_1<T> = T[];
type unnest_shallow_1<T> = T[];
type unnest_mixed_1<T> = T[];
export = unnest;
