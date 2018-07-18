import { List, Morphism, Tuple } from "./$types";
import { Placeholder as PH } from "./$placeholder";
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
    <N extends number, X extends Tuple>(fn: Morphism<X[N], X[N]>): adjust_tuple_100<N, X>;
    <T, U>(fn: Morphism<T, U>): adjust_general_100<T, U>;
    (_fn: PH, index: number): adjust_list_010;
    <N extends number>(_fn: PH, index: N): adjust_tuple_010<N>;
    (_fn: PH, index: number): adjust_general_010;
    <T, U>(fn: Morphism<T, U>, index: number): adjust_list_110<T, U>;
    <N extends number, X extends Tuple>(fn: Morphism<X[N], X[N]>, index: N): adjust_tuple_110<N, X>;
    <T, U>(fn: Morphism<T, U>, index: number): adjust_general_110<T, U>;
    <T>(_fn: PH, _index: PH, list: List<T>): adjust_list_001<T>;
    <X extends Tuple>(_fn: PH, _index: PH, tuple: X): adjust_tuple_001<X>;
    <T, X extends Tuple>(_fn: PH, _index: PH, list: List<T> | X): adjust_general_001<T, X>;
    <T>(_fn: PH, index: number, list: List<T>): adjust_list_011<T>;
    <N extends number, X extends Tuple>(_fn: PH, index: N, tuple: X): adjust_tuple_011<N, X>;
    <T, X extends Tuple>(_fn: PH, index: number, list: List<T> | X): adjust_general_011<T, X>;
    <T, U>(fn: Morphism<T, U>, _index: PH, list: List<T>): adjust_list_101<T, U>;
    <N extends number, X extends Tuple>(fn: Morphism<X[N], X[N]>, _index: PH, tuple: X): adjust_tuple_101<N, X>;
    <T, U, X extends Tuple>(fn: Morphism<T, U>, _index: PH, list: List<T> | X): adjust_general_101<T, U, X>;
    <T, U>(fn: Morphism<T, U>, index: number, list: List<T>): adjust_list_111<T, U>;
    <N extends number, X extends Tuple>(fn: Morphism<X[N], X[N]>, index: N, tuple: X): adjust_tuple_111<X>;
    <$SEL extends "111", $KIND extends "general">(): <T, U, X extends Tuple>(fn: Morphism<T, U>, index: number, list: List<T> | X) => adjust_general_111<T, U, X>;
    <$SEL extends "111", $KIND extends "tuple">(): <N extends number, X extends Tuple>(fn: Morphism<X[N], X[N]>, index: N, tuple: X) => adjust_tuple_111<X>;
    <$SEL extends "111", $KIND extends "list">(): <T, U>(fn: Morphism<T, U>, index: number, list: List<T>) => adjust_list_111<T, U>;
    <$SEL extends "101", $KIND extends "general">(): <T, U, X extends Tuple>(fn: Morphism<T, U>, _index: PH, list: List<T> | X) => adjust_general_101<T, U, X>;
    <$SEL extends "101", $KIND extends "tuple">(): <N extends number, X extends Tuple>(fn: Morphism<X[N], X[N]>, _index: PH, tuple: X) => adjust_tuple_101<N, X>;
    <$SEL extends "101", $KIND extends "list">(): <T, U>(fn: Morphism<T, U>, _index: PH, list: List<T>) => adjust_list_101<T, U>;
    <$SEL extends "011", $KIND extends "general">(): <T, X extends Tuple>(_fn: PH, index: number, list: List<T> | X) => adjust_general_011<T, X>;
    <$SEL extends "011", $KIND extends "tuple">(): <N extends number, X extends Tuple>(_fn: PH, index: N, tuple: X) => adjust_tuple_011<N, X>;
    <$SEL extends "011", $KIND extends "list">(): <T>(_fn: PH, index: number, list: List<T>) => adjust_list_011<T>;
    <$SEL extends "001", $KIND extends "general">(): <T, X extends Tuple>(_fn: PH, _index: PH, list: List<T> | X) => adjust_general_001<T, X>;
    <$SEL extends "001", $KIND extends "tuple">(): <X extends Tuple>(_fn: PH, _index: PH, tuple: X) => adjust_tuple_001<X>;
    <$SEL extends "001", $KIND extends "list">(): <T>(_fn: PH, _index: PH, list: List<T>) => adjust_list_001<T>;
    <$SEL extends "11", $KIND extends "general">(): <T, U>(fn: Morphism<T, U>, index: number) => adjust_general_110<T, U>;
    <$SEL extends "11", $KIND extends "tuple">(): <N extends number, X extends Tuple>(fn: Morphism<X[N], X[N]>, index: N) => adjust_tuple_110<N, X>;
    <$SEL extends "11", $KIND extends "list">(): <T, U>(fn: Morphism<T, U>, index: number) => adjust_list_110<T, U>;
    <$SEL extends "01", $KIND extends "general">(): (_fn: PH, index: number) => adjust_general_010;
    <$SEL extends "01", $KIND extends "tuple">(): <N extends number>(_fn: PH, index: N) => adjust_tuple_010<N>;
    <$SEL extends "01", $KIND extends "list">(): (_fn: PH, index: number) => adjust_list_010;
    <$SEL extends "1", $KIND extends "general">(): <T, U>(fn: Morphism<T, U>) => adjust_general_100<T, U>;
    <$SEL extends "1", $KIND extends "tuple">(): <N extends number, X extends Tuple>(fn: Morphism<X[N], X[N]>) => adjust_tuple_100<N, X>;
    <$SEL extends "1", $KIND extends "list">(): <T, U>(fn: Morphism<T, U>) => adjust_list_100<T, U>;
    <T, U, X extends Tuple>(fn: Morphism<T, U>, index: number, list: List<T> | X): adjust_general_111<T, U, X>;
};
type adjust_list_100<T, U> = {
    (index: number): adjust_list_110<T, U>;
    (_index: PH, list: List<T>): adjust_list_101<T, U>;
    <$SEL extends "11">(): (index: number, list: List<T>) => adjust_list_111<T, U>;
    <$SEL extends "01">(): (_index: PH, list: List<T>) => adjust_list_101<T, U>;
    <$SEL extends "1">(): (index: number) => adjust_list_110<T, U>;
    (index: number, list: List<T>): adjust_list_111<T, U>;
};
type adjust_tuple_100<N extends number, X extends Tuple> = {
    (index: N): adjust_tuple_110<N, X>;
    (_index: PH, tuple: X): adjust_tuple_101<N, X>;
    <$SEL extends "11">(): (index: N, tuple: X) => adjust_tuple_111<X>;
    <$SEL extends "01">(): (_index: PH, tuple: X) => adjust_tuple_101<N, X>;
    <$SEL extends "1">(): (index: N) => adjust_tuple_110<N, X>;
    (index: N, tuple: X): adjust_tuple_111<X>;
};
type adjust_general_100<T, U> = {
    (index: number): adjust_general_110<T, U>;
    <X extends Tuple>(_index: PH, list: List<T> | X): adjust_general_101<T, U, X>;
    <$SEL extends "11">(): <X extends Tuple>(index: number, list: List<T> | X) => adjust_general_111<T, U, X>;
    <$SEL extends "01">(): <X extends Tuple>(_index: PH, list: List<T> | X) => adjust_general_101<T, U, X>;
    <$SEL extends "1">(): (index: number) => adjust_general_110<T, U>;
    <X extends Tuple>(index: number, list: List<T> | X): adjust_general_111<T, U, X>;
};
type adjust_list_010 = {
    <T, U>(fn: Morphism<T, U>): adjust_list_110<T, U>;
    <T>(_fn: PH, list: List<T>): adjust_list_011<T>;
    <$SEL extends "11">(): <T, U>(fn: Morphism<T, U>, list: List<T>) => adjust_list_111<T, U>;
    <$SEL extends "01">(): <T>(_fn: PH, list: List<T>) => adjust_list_011<T>;
    <$SEL extends "1">(): <T, U>(fn: Morphism<T, U>) => adjust_list_110<T, U>;
    <T, U>(fn: Morphism<T, U>, list: List<T>): adjust_list_111<T, U>;
};
type adjust_tuple_010<N extends number> = {
    <X extends Tuple>(fn: Morphism<X[N], X[N]>): adjust_tuple_110<N, X>;
    <X extends Tuple>(_fn: PH, tuple: X): adjust_tuple_011<N, X>;
    <$SEL extends "11">(): <X extends Tuple>(fn: Morphism<X[N], X[N]>, tuple: X) => adjust_tuple_111<X>;
    <$SEL extends "01">(): <X extends Tuple>(_fn: PH, tuple: X) => adjust_tuple_011<N, X>;
    <$SEL extends "1">(): <X extends Tuple>(fn: Morphism<X[N], X[N]>) => adjust_tuple_110<N, X>;
    <X extends Tuple>(fn: Morphism<X[N], X[N]>, tuple: X): adjust_tuple_111<X>;
};
type adjust_general_010 = {
    <T, U>(fn: Morphism<T, U>): adjust_general_110<T, U>;
    <T, X extends Tuple>(_fn: PH, list: List<T> | X): adjust_general_011<T, X>;
    <$SEL extends "11">(): <T, U, X extends Tuple>(fn: Morphism<T, U>, list: List<T> | X) => adjust_general_111<T, U, X>;
    <$SEL extends "01">(): <T, X extends Tuple>(_fn: PH, list: List<T> | X) => adjust_general_011<T, X>;
    <$SEL extends "1">(): <T, U>(fn: Morphism<T, U>) => adjust_general_110<T, U>;
    <T, U, X extends Tuple>(fn: Morphism<T, U>, list: List<T> | X): adjust_general_111<T, U, X>;
};
type adjust_list_110<T, U> = {
    (list: List<T>): adjust_list_111<T, U>;
};
type adjust_tuple_110<N extends number, X extends Tuple> = {
    (tuple: X): adjust_tuple_111<X>;
};
type adjust_general_110<T, U> = {
    <X extends Tuple>(list: List<T> | X): adjust_general_111<T, U, X>;
};
type adjust_list_001<T> = {
    <U>(fn: Morphism<T, U>): adjust_list_101<T, U>;
    (_fn: PH, index: number): adjust_list_011<T>;
    <$SEL extends "11">(): <U>(fn: Morphism<T, U>, index: number) => adjust_list_111<T, U>;
    <$SEL extends "01">(): (_fn: PH, index: number) => adjust_list_011<T>;
    <$SEL extends "1">(): <U>(fn: Morphism<T, U>) => adjust_list_101<T, U>;
    <U>(fn: Morphism<T, U>, index: number): adjust_list_111<T, U>;
};
type adjust_tuple_001<X extends Tuple> = {
    <N extends number>(fn: Morphism<X[N], X[N]>): adjust_tuple_101<N, X>;
    <N extends number>(_fn: PH, index: N): adjust_tuple_011<N, X>;
    <$SEL extends "11">(): <N extends number>(fn: Morphism<X[N], X[N]>, index: N) => adjust_tuple_111<X>;
    <$SEL extends "01">(): <N extends number>(_fn: PH, index: N) => adjust_tuple_011<N, X>;
    <$SEL extends "1">(): <N extends number>(fn: Morphism<X[N], X[N]>) => adjust_tuple_101<N, X>;
    <N extends number>(fn: Morphism<X[N], X[N]>, index: N): adjust_tuple_111<X>;
};
type adjust_general_001<T, X extends Tuple> = {
    <U>(fn: Morphism<T, U>): adjust_general_101<T, U, X>;
    (_fn: PH, index: number): adjust_general_011<T, X>;
    <$SEL extends "11">(): <U>(fn: Morphism<T, U>, index: number) => adjust_general_111<T, U, X>;
    <$SEL extends "01">(): (_fn: PH, index: number) => adjust_general_011<T, X>;
    <$SEL extends "1">(): <U>(fn: Morphism<T, U>) => adjust_general_101<T, U, X>;
    <U>(fn: Morphism<T, U>, index: number): adjust_general_111<T, U, X>;
};
type adjust_list_101<T, U> = {
    (index: number): adjust_list_111<T, U>;
};
type adjust_tuple_101<N extends number, X extends Tuple> = {
    (index: N): adjust_tuple_111<X>;
};
type adjust_general_101<T, U, X extends Tuple> = {
    (index: number): adjust_general_111<T, U, X>;
};
type adjust_list_011<T> = {
    <U>(fn: Morphism<T, U>): adjust_list_111<T, U>;
};
type adjust_tuple_011<N extends number, X extends Tuple> = {
    (fn: Morphism<X[N], X[N]>): adjust_tuple_111<X>;
};
type adjust_general_011<T, X extends Tuple> = {
    <U>(fn: Morphism<T, U>): adjust_general_111<T, U, X>;
};
type adjust_list_111<T, U> = Array<T | U>;
type adjust_tuple_111<X extends Tuple> = X;
type adjust_general_111<T, U, X extends Tuple> = Array<T | U> | X;
export = adjust;
