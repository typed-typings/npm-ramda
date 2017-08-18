import { Morphism, Predicate } from "./$types";
/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is not satisfied, the function will return the result of
 * calling the `whenFalseFn` function with the same argument. If the predicate
 * is satisfied, the argument is returned as is.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred        A predicate function
 * @param {Function} whenFalseFn A function to invoke when the `pred` evaluates
 *                               to a falsy value.
 * @param {*}        x           An object to test with the `pred` function and
 *                               pass to `whenFalseFn` if necessary.
 * @return {*} Either `x` or the result of applying `x` to `whenFalseFn`.
 * @see R.ifElse, R.when
 * @example
 *
 *      let safeInc = R.unless(R.isNil, R.inc);
 *      safeInc(null); //=> null
 *      safeInc(1); //=> 2
 */
declare const unless: unless_000;
type unless_000 = {
    <T, V extends T>(pred: (value: T) => value is V): unless_predicate_100<T, V>;
    <T>(pred: Predicate<T>): unless_general_100<T>;
    <T, U, V extends T>(pred: (value: T) => value is V, whenFalseFn: Morphism<T, U>): unless_predicate_110<T, U, V>;
    <T, U>(pred: Predicate<T>, whenFalseFn: Morphism<T, U>): unless_general_110<T, U>;
    <T, U, V extends T>(pred: (value: T) => value is V, whenFalseFn: Morphism<T, U>, value: T): unless_predicate_111<T, U, V>;
    <$SEL extends "1", $KIND extends "predicate">(): <T, V extends T>(pred: (value: T) => value is V) => unless_predicate_100<T, V>;
    <$SEL extends "1", $KIND extends "general">(): <T>(pred: Predicate<T>) => unless_general_100<T>;
    <$SEL extends "11", $KIND extends "predicate">(): <T, U, V extends T>(pred: (value: T) => value is V, whenFalseFn: Morphism<T, U>) => unless_predicate_110<T, U, V>;
    <$SEL extends "11", $KIND extends "general">(): <T, U>(pred: Predicate<T>, whenFalseFn: Morphism<T, U>) => unless_general_110<T, U>;
    <$SEL extends "111", $KIND extends "predicate">(): <T, U, V extends T>(pred: (value: T) => value is V, whenFalseFn: Morphism<T, U>, value: T) => unless_predicate_111<T, U, V>;
    <$SEL extends "111", $KIND extends "general">(): <T, U>(pred: Predicate<T>, whenFalseFn: Morphism<T, U>, value: T) => unless_general_111<T, U>;
    <T, U>(pred: Predicate<T>, whenFalseFn: Morphism<T, U>, value: T): unless_general_111<T, U>;
};
type unless_predicate_100<T, V extends T> = {
    <U>(whenFalseFn: Morphism<T, U>): unless_predicate_110<T, U, V>;
    <$SEL extends "1">(): <U>(whenFalseFn: Morphism<T, U>) => unless_predicate_110<T, U, V>;
    <$SEL extends "11">(): <U>(whenFalseFn: Morphism<T, U>, value: T) => unless_predicate_111<T, U, V>;
    <U>(whenFalseFn: Morphism<T, U>, value: T): unless_predicate_111<T, U, V>;
};
type unless_general_100<T> = {
    <U>(whenFalseFn: Morphism<T, U>): unless_general_110<T, U>;
    <$SEL extends "1">(): <U>(whenFalseFn: Morphism<T, U>) => unless_general_110<T, U>;
    <$SEL extends "11">(): <U>(whenFalseFn: Morphism<T, U>, value: T) => unless_general_111<T, U>;
    <U>(whenFalseFn: Morphism<T, U>, value: T): unless_general_111<T, U>;
};
type unless_predicate_110<T, U, V extends T> = {
    (value: T): unless_predicate_111<T, U, V>;
};
type unless_general_110<T, U> = {
    (value: T): unless_general_111<T, U>;
};
type unless_predicate_111<T, U, V extends T> = V | U;
type unless_general_111<T, U> = T | U;
export = unless;
