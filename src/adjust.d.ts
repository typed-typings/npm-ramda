import { List, Morphism } from "./$types";
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
declare const adjust: adjust_000;
type adjust_000 = {
    <T, U>(fn: Morphism<T, U>): adjust_100<T, U>;
    <T, U>(fn: Morphism<T, U>, index: number): adjust_110<T, U>;
    <$SEL extends "1">(): <T, U>(fn: Morphism<T, U>) => adjust_100<T, U>;
    <$SEL extends "11">(): <T, U>(fn: Morphism<T, U>, index: number) => adjust_110<T, U>;
    <$SEL extends "111">(): <T, U>(fn: Morphism<T, U>, index: number, list: List<T>) => adjust_111<T, U>;
    <T, U>(fn: Morphism<T, U>, index: number, list: List<T>): adjust_111<T, U>;
};
type adjust_100<T, U> = {
    (index: number): adjust_110<T, U>;
    <$SEL extends "1">(): (index: number) => adjust_110<T, U>;
    <$SEL extends "11">(): (index: number, list: List<T>) => adjust_111<T, U>;
    (index: number, list: List<T>): adjust_111<T, U>;
};
type adjust_010 = {
    <T, U>(fn: Morphism<T, U>): adjust_110<T, U>;
    <$SEL extends "1">(): <T, U>(fn: Morphism<T, U>) => adjust_110<T, U>;
    <$SEL extends "11">(): <T, U>(fn: Morphism<T, U>, list: List<T>) => adjust_111<T, U>;
    <T, U>(fn: Morphism<T, U>, list: List<T>): adjust_111<T, U>;
};
type adjust_110<T, U> = {
    (list: List<T>): adjust_111<T, U>;
};
type adjust_001<T> = {
    <U>(fn: Morphism<T, U>): adjust_101<T, U>;
    <$SEL extends "1">(): <U>(fn: Morphism<T, U>) => adjust_101<T, U>;
    <$SEL extends "11">(): <U>(fn: Morphism<T, U>, index: number) => adjust_111<T, U>;
    <U>(fn: Morphism<T, U>, index: number): adjust_111<T, U>;
};
type adjust_101<T, U> = {
    (index: number): adjust_111<T, U>;
};
type adjust_011<T> = {
    <U>(fn: Morphism<T, U>): adjust_111<T, U>;
};
type adjust_111<T, U> = Array<T | U>;
export = adjust;
