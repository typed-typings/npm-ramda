import { List, Reduced } from "./$types";
declare const reduceWhile: reduceWhile_0000;
type reduceWhile_0000 = {
    /**
     * Like [`reduce`](#reduce), `reduceWhile` returns a single item by iterating
     * through the list, successively calling the iterator function. `reduceWhile`
     * also takes a predicate that is evaluated before each step. If the predicate
     * returns `false`, it "short-circuits" the iteration and returns the current
     * value of the accumulator.
     *
     * @func
     * @memberOf R
     * @since v0.22.0
     * @category List
     * @sig ((a, b) -> Boolean) -> ((a, b) -> a) -> a -> [b] -> a
     * @param {Function} pred The predicate. It is passed the accumulator and the
     *        current element.
     * @param {Function} fn The iterator function. Receives two values, the
     *        accumulator and the current element.
     * @param {*} a The accumulator value.
     * @param {Array} list The list to iterate over.
     * @return {*} The final, accumulated value.
     * @see R.reduce, R.reduced
     * @example
     *
     *      var isOdd = (acc, x) => x % 2 === 1;
     *      var xs = [1, 3, 5, 60, 777, 800];
     *      R.reduceWhile(isOdd, R.add, 0, xs); //=> 9
     *
     *      var ys = [2, 4, 6]
     *      R.reduceWhile(isOdd, R.add, 111, ys); //=> 111
     */
    <T, U>(pred: (accumulator: U, value: T) => boolean): reduceWhile_1000<T, U>;
    <T, U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_1100<T, U>;
    <T, U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): reduceWhile_1110<T, U>;
    <$SEL extends "1111">(): <T, U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, values: List<T>) => reduceWhile_1111<U>;
    <$SEL extends "111">(): <T, U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U) => reduceWhile_1110<T, U>;
    <$SEL extends "11">(): <T, U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U) => reduceWhile_1100<T, U>;
    <$SEL extends "1">(): <T, U>(pred: (accumulator: U, value: T) => boolean) => reduceWhile_1000<T, U>;
    <T, U>(pred: (accumulator: U, value: T) => boolean, fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, values: List<T>): reduceWhile_1111<U>;
};
type reduceWhile_1000<T, U> = {
    (fn: (accumulator: U, value: T) => Reduced<U> | U): reduceWhile_1100<T, U>;
    (fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): reduceWhile_1110<T, U>;
    <$SEL extends "111">(): (fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, values: List<T>) => reduceWhile_1111<U>;
    <$SEL extends "11">(): (fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U) => reduceWhile_1110<T, U>;
    <$SEL extends "1">(): (fn: (accumulator: U, value: T) => Reduced<U> | U) => reduceWhile_1100<T, U>;
    (fn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, values: List<T>): reduceWhile_1111<U>;
};
type reduceWhile_1100<T, U> = {
    (initial: U): reduceWhile_1110<T, U>;
    <$SEL extends "11">(): (initial: U, values: List<T>) => reduceWhile_1111<U>;
    <$SEL extends "1">(): (initial: U) => reduceWhile_1110<T, U>;
    (initial: U, values: List<T>): reduceWhile_1111<U>;
};
type reduceWhile_1110<T, U> = {
    (values: List<T>): reduceWhile_1111<U>;
};
type reduceWhile_1111<U> = U;
export = reduceWhile;
