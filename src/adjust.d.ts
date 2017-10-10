import { List, Morphism } from "./$types";
declare const adjust: adjust_000;
type adjust_000 = {
    /**
     * Applies a function to the value at the given index of an array, returning a
     * new copy of the array with the element at the given index replaced with the
     * result of the function application.
     *
     * @func
     * @memberOf R
     * @since v0.14.0
     * @category List
     * @sig (a -> a) -> Number -> [a] -> [a]
     * @param {Function} fn The function to apply.
     * @param {Number} idx The index.
     * @param {Array|Arguments} list An array-like object whose value
     *        at the supplied index will be replaced.
     * @return {Array} A copy of the supplied array-like object with
     *         the element at index `idx` replaced with the value
     *         returned by applying `fn` to the existing element.
     * @see R.update
     * @example
     *
     *      R.adjust(R.add(10), 1, [1, 2, 3]);     //=> [1, 12, 3]
     *      R.adjust(R.add(10))(1)([1, 2, 3]);     //=> [1, 12, 3]
     * @symb R.adjust(f, -1, [a, b]) = [a, f(b)]
     * @symb R.adjust(f, 0, [a, b]) = [f(a), b]
     */
    <T, U>(fn: Morphism<T, U>): adjust_list_100<T, U>;
    <N extends number, X extends [any]>(fn: Morphism<X[N], X[N]>): adjust_tuple_100<N, X>;
    <T, U>(fn: Morphism<T, U>): adjust_general_100<T, U>;
    <T, U>(fn: Morphism<T, U>, index: number): adjust_list_110<T, U>;
    <N extends number, X extends [any]>(fn: Morphism<X[N], X[N]>, index: N): adjust_tuple_110<N, X>;
    <T, U>(fn: Morphism<T, U>, index: number): adjust_general_110<T, U>;
    <T, U>(fn: Morphism<T, U>, index: number, list: List<T>): adjust_list_111<T, U>;
    <N extends number, X extends [any]>(fn: Morphism<X[N], X[N]>, index: N, tuple: X): adjust_tuple_111<X>;
    <$SEL extends "1", $KIND extends "list">(): <T, U>(fn: Morphism<T, U>) => adjust_list_100<T, U>;
    <$SEL extends "1", $KIND extends "tuple">(): <N extends number, X extends [any]>(fn: Morphism<X[N], X[N]>) => adjust_tuple_100<N, X>;
    <$SEL extends "1", $KIND extends "general">(): <T, U>(fn: Morphism<T, U>) => adjust_general_100<T, U>;
    <$SEL extends "11", $KIND extends "list">(): <T, U>(fn: Morphism<T, U>, index: number) => adjust_list_110<T, U>;
    <$SEL extends "11", $KIND extends "tuple">(): <N extends number, X extends [any]>(fn: Morphism<X[N], X[N]>, index: N) => adjust_tuple_110<N, X>;
    <$SEL extends "11", $KIND extends "general">(): <T, U>(fn: Morphism<T, U>, index: number) => adjust_general_110<T, U>;
    <$SEL extends "111", $KIND extends "list">(): <T, U>(fn: Morphism<T, U>, index: number, list: List<T>) => adjust_list_111<T, U>;
    <$SEL extends "111", $KIND extends "tuple">(): <N extends number, X extends [any]>(fn: Morphism<X[N], X[N]>, index: N, tuple: X) => adjust_tuple_111<X>;
    <$SEL extends "111", $KIND extends "general">(): <T, U, X extends [any]>(fn: Morphism<T, U>, index: number, list: List<T> | X) => adjust_general_111<T, U, X>;
    <T, U, X extends [any]>(fn: Morphism<T, U>, index: number, list: List<T> | X): adjust_general_111<T, U, X>;
};
type adjust_list_100<T, U> = {
    (index: number): adjust_list_110<T, U>;
    <$SEL extends "1">(): (index: number) => adjust_list_110<T, U>;
    <$SEL extends "11">(): (index: number, list: List<T>) => adjust_list_111<T, U>;
    (index: number, list: List<T>): adjust_list_111<T, U>;
};
type adjust_tuple_100<N extends number, X extends [any]> = {
    (index: N): adjust_tuple_110<N, X>;
    <$SEL extends "1">(): (index: N) => adjust_tuple_110<N, X>;
    <$SEL extends "11">(): (index: N, tuple: X) => adjust_tuple_111<X>;
    (index: N, tuple: X): adjust_tuple_111<X>;
};
type adjust_general_100<T, U> = {
    (index: number): adjust_general_110<T, U>;
    <$SEL extends "1">(): (index: number) => adjust_general_110<T, U>;
    <$SEL extends "11">(): <X extends [any]>(index: number, list: List<T> | X) => adjust_general_111<T, U, X>;
    <X extends [any]>(index: number, list: List<T> | X): adjust_general_111<T, U, X>;
};
type adjust_list_110<T, U> = {
    (list: List<T>): adjust_list_111<T, U>;
};
type adjust_tuple_110<N extends number, X extends [any]> = {
    (tuple: X): adjust_tuple_111<X>;
};
type adjust_general_110<T, U> = {
    <X extends [any]>(list: List<T> | X): adjust_general_111<T, U, X>;
};
type adjust_list_111<T, U> = Array<T | U>;
type adjust_tuple_111<X extends [any]> = X;
type adjust_general_111<T, U, X extends [any]> = Array<T | U> | X;
export = adjust;
