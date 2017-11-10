import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const innerJoin: innerJoin_000;
type innerJoin_000 = {
    /**
     * Takes a predicate `pred`, a list `xs`, and a list `ys`, and returns a list
     * `xs'` comprising each of the elements of `xs` which is equal to one or more
     * elements of `ys` according to `pred`.
     *
     * `pred` must be a binary function expecting an element from each list.
     *
     * `xs`, `ys`, and `xs'` are treated as sets, semantically, so ordering should
     * not be significant, but since `xs'` is ordered the implementation guarantees
     * that its values are in the same order as they appear in `xs`. Duplicates are
     * not removed, so `xs'` may contain duplicates if `xs` contains duplicates.
     *
     * @func
     * @memberOf R
     * @since v0.24.0
     * @category Relation
     * @sig ((a, b) -> Boolean) -> [a] -> [b] -> [a]
     * @param {Function} pred
     * @param {Array} xs
     * @param {Array} ys
     * @return {Array}
     * @see R.intersection
     * @example
     *
     *      R.innerJoin(
     *        (record, id) => record.id === id,
     *        [{id: 824, name: 'Richie Furay'},
     *         {id: 956, name: 'Dewey Martin'},
     *         {id: 313, name: 'Bruce Palmer'},
     *         {id: 456, name: 'Stephen Stills'},
     *         {id: 177, name: 'Neil Young'}],
     *        [177, 456, 999]
     *      );
     *      //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
     */
    <T, U>(pred: (a: T, b: U) => boolean): innerJoin_100<T, U>;
    <T>(_pred: PH, xs: List<T>): innerJoin_010<T>;
    <T, U>(pred: (a: T, b: U) => boolean, xs: List<T>): innerJoin_110<T, U>;
    <U>(_pred: PH, _xs: PH, ys: List<U>): innerJoin_001<U>;
    <T, U>(_pred: PH, xs: List<T>, ys: List<U>): innerJoin_011<T, U>;
    <T, U>(pred: (a: T, b: U) => boolean, _xs: PH, ys: List<U>): innerJoin_101<T, U>;
    <$SEL extends "111">(): <T, U>(pred: (a: T, b: U) => boolean, xs: List<T>, ys: List<U>) => innerJoin_111<T>;
    <$SEL extends "101">(): <T, U>(pred: (a: T, b: U) => boolean, _xs: PH, ys: List<U>) => innerJoin_101<T, U>;
    <$SEL extends "011">(): <T, U>(_pred: PH, xs: List<T>, ys: List<U>) => innerJoin_011<T, U>;
    <$SEL extends "001">(): <U>(_pred: PH, _xs: PH, ys: List<U>) => innerJoin_001<U>;
    <$SEL extends "11">(): <T, U>(pred: (a: T, b: U) => boolean, xs: List<T>) => innerJoin_110<T, U>;
    <$SEL extends "01">(): <T>(_pred: PH, xs: List<T>) => innerJoin_010<T>;
    <$SEL extends "1">(): <T, U>(pred: (a: T, b: U) => boolean) => innerJoin_100<T, U>;
    <T, U>(pred: (a: T, b: U) => boolean, xs: List<T>, ys: List<U>): innerJoin_111<T>;
};
type innerJoin_100<T, U> = {
    (xs: List<T>): innerJoin_110<T, U>;
    (_xs: PH, ys: List<U>): innerJoin_101<T, U>;
    <$SEL extends "11">(): (xs: List<T>, ys: List<U>) => innerJoin_111<T>;
    <$SEL extends "01">(): (_xs: PH, ys: List<U>) => innerJoin_101<T, U>;
    <$SEL extends "1">(): (xs: List<T>) => innerJoin_110<T, U>;
    (xs: List<T>, ys: List<U>): innerJoin_111<T>;
};
type innerJoin_010<T> = {
    <U>(pred: (a: T, b: U) => boolean): innerJoin_110<T, U>;
    <U>(_pred: PH, ys: List<U>): innerJoin_011<T, U>;
    <$SEL extends "11">(): <U>(pred: (a: T, b: U) => boolean, ys: List<U>) => innerJoin_111<T>;
    <$SEL extends "01">(): <U>(_pred: PH, ys: List<U>) => innerJoin_011<T, U>;
    <$SEL extends "1">(): <U>(pred: (a: T, b: U) => boolean) => innerJoin_110<T, U>;
    <U>(pred: (a: T, b: U) => boolean, ys: List<U>): innerJoin_111<T>;
};
type innerJoin_110<T, U> = {
    (ys: List<U>): innerJoin_111<T>;
};
type innerJoin_001<U> = {
    <T>(pred: (a: T, b: U) => boolean): innerJoin_101<T, U>;
    <T>(_pred: PH, xs: List<T>): innerJoin_011<T, U>;
    <$SEL extends "11">(): <T>(pred: (a: T, b: U) => boolean, xs: List<T>) => innerJoin_111<T>;
    <$SEL extends "01">(): <T>(_pred: PH, xs: List<T>) => innerJoin_011<T, U>;
    <$SEL extends "1">(): <T>(pred: (a: T, b: U) => boolean) => innerJoin_101<T, U>;
    <T>(pred: (a: T, b: U) => boolean, xs: List<T>): innerJoin_111<T>;
};
type innerJoin_101<T, U> = {
    (xs: List<T>): innerJoin_111<T>;
};
type innerJoin_011<T, U> = {
    (pred: (a: T, b: U) => boolean): innerJoin_111<T>;
};
type innerJoin_111<T> = T[];
export = innerJoin;
