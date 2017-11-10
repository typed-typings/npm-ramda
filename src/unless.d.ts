import { Morphism, Predicate } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const unless: unless_000;
type unless_000 = {
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
    <T, V extends T>(pred: (value: T) => value is V): unless_predicate_100<T, V>;
    <T>(pred: Predicate<T>): unless_general_100<T>;
    <T, U>(_pred: PH, whenFalseFn: Morphism<T, U>): unless_010<T, U>;
    <T, U, V extends T>(pred: (value: T) => value is V, whenFalseFn: Morphism<T, U>): unless_predicate_110<T, U, V>;
    <T, U>(pred: Predicate<T>, whenFalseFn: Morphism<T, U>): unless_general_110<T, U>;
    <T>(_pred: PH, _whenFalseFn: PH, value: T): unless_001<T>;
    <T, U>(_pred: PH, whenFalseFn: Morphism<T, U>, value: T): unless_011<T, U>;
    <T, V extends T>(pred: (value: T) => value is V, _whenFalseFn: PH, value: T): unless_predicate_101<T, V>;
    <T>(pred: Predicate<T>, _whenFalseFn: PH, value: T): unless_general_101<T>;
    <T, U, V extends T>(pred: (value: T) => value is V, whenFalseFn: Morphism<T, U>, value: T): unless_predicate_111<T, U, V>;
    <$SEL extends "111", $KIND extends "general">(): <T, U>(pred: Predicate<T>, whenFalseFn: Morphism<T, U>, value: T) => unless_general_111<T, U>;
    <$SEL extends "111", $KIND extends "predicate">(): <T, U, V extends T>(pred: (value: T) => value is V, whenFalseFn: Morphism<T, U>, value: T) => unless_predicate_111<T, U, V>;
    <$SEL extends "101", $KIND extends "general">(): <T>(pred: Predicate<T>, _whenFalseFn: PH, value: T) => unless_general_101<T>;
    <$SEL extends "101", $KIND extends "predicate">(): <T, V extends T>(pred: (value: T) => value is V, _whenFalseFn: PH, value: T) => unless_predicate_101<T, V>;
    <$SEL extends "011">(): <T, U>(_pred: PH, whenFalseFn: Morphism<T, U>, value: T) => unless_011<T, U>;
    <$SEL extends "001">(): <T>(_pred: PH, _whenFalseFn: PH, value: T) => unless_001<T>;
    <$SEL extends "11", $KIND extends "general">(): <T, U>(pred: Predicate<T>, whenFalseFn: Morphism<T, U>) => unless_general_110<T, U>;
    <$SEL extends "11", $KIND extends "predicate">(): <T, U, V extends T>(pred: (value: T) => value is V, whenFalseFn: Morphism<T, U>) => unless_predicate_110<T, U, V>;
    <$SEL extends "01">(): <T, U>(_pred: PH, whenFalseFn: Morphism<T, U>) => unless_010<T, U>;
    <$SEL extends "1", $KIND extends "general">(): <T>(pred: Predicate<T>) => unless_general_100<T>;
    <$SEL extends "1", $KIND extends "predicate">(): <T, V extends T>(pred: (value: T) => value is V) => unless_predicate_100<T, V>;
    <T, U>(pred: Predicate<T>, whenFalseFn: Morphism<T, U>, value: T): unless_general_111<T, U>;
};
type unless_010<T, U> = {
    <V extends T>(pred: (value: T) => value is V): unless_predicate_110<T, U, V>;
    (pred: Predicate<T>): unless_general_110<T, U>;
    (_pred: PH, value: T): unless_011<T, U>;
    <V extends T>(pred: (value: T) => value is V, value: T): unless_predicate_111<T, U, V>;
    <$SEL extends "11", $KIND extends "general">(): (pred: Predicate<T>, value: T) => unless_general_111<T, U>;
    <$SEL extends "11", $KIND extends "predicate">(): <V extends T>(pred: (value: T) => value is V, value: T) => unless_predicate_111<T, U, V>;
    <$SEL extends "01">(): (_pred: PH, value: T) => unless_011<T, U>;
    <$SEL extends "1", $KIND extends "general">(): (pred: Predicate<T>) => unless_general_110<T, U>;
    <$SEL extends "1", $KIND extends "predicate">(): <V extends T>(pred: (value: T) => value is V) => unless_predicate_110<T, U, V>;
    (pred: Predicate<T>, value: T): unless_general_111<T, U>;
};
type unless_001<T> = {
    <V extends T>(pred: (value: T) => value is V): unless_predicate_101<T, V>;
    (pred: Predicate<T>): unless_general_101<T>;
    <U>(_pred: PH, whenFalseFn: Morphism<T, U>): unless_011<T, U>;
    <U, V extends T>(pred: (value: T) => value is V, whenFalseFn: Morphism<T, U>): unless_predicate_111<T, U, V>;
    <$SEL extends "11", $KIND extends "general">(): <U>(pred: Predicate<T>, whenFalseFn: Morphism<T, U>) => unless_general_111<T, U>;
    <$SEL extends "11", $KIND extends "predicate">(): <U, V extends T>(pred: (value: T) => value is V, whenFalseFn: Morphism<T, U>) => unless_predicate_111<T, U, V>;
    <$SEL extends "01">(): <U>(_pred: PH, whenFalseFn: Morphism<T, U>) => unless_011<T, U>;
    <$SEL extends "1", $KIND extends "general">(): (pred: Predicate<T>) => unless_general_101<T>;
    <$SEL extends "1", $KIND extends "predicate">(): <V extends T>(pred: (value: T) => value is V) => unless_predicate_101<T, V>;
    <U>(pred: Predicate<T>, whenFalseFn: Morphism<T, U>): unless_general_111<T, U>;
};
type unless_011<T, U> = {
    <V extends T>(pred: (value: T) => value is V): unless_predicate_111<T, U, V>;
    <$SEL extends "1", $KIND extends "general">(): (pred: Predicate<T>) => unless_general_111<T, U>;
    <$SEL extends "1", $KIND extends "predicate">(): <V extends T>(pred: (value: T) => value is V) => unless_predicate_111<T, U, V>;
    (pred: Predicate<T>): unless_general_111<T, U>;
};
type unless_predicate_100<T, V extends T> = {
    <U>(whenFalseFn: Morphism<T, U>): unless_predicate_110<T, U, V>;
    (_whenFalseFn: PH, value: T): unless_predicate_101<T, V>;
    <$SEL extends "11">(): <U>(whenFalseFn: Morphism<T, U>, value: T) => unless_predicate_111<T, U, V>;
    <$SEL extends "01">(): (_whenFalseFn: PH, value: T) => unless_predicate_101<T, V>;
    <$SEL extends "1">(): <U>(whenFalseFn: Morphism<T, U>) => unless_predicate_110<T, U, V>;
    <U>(whenFalseFn: Morphism<T, U>, value: T): unless_predicate_111<T, U, V>;
};
type unless_general_100<T> = {
    <U>(whenFalseFn: Morphism<T, U>): unless_general_110<T, U>;
    (_whenFalseFn: PH, value: T): unless_general_101<T>;
    <$SEL extends "11">(): <U>(whenFalseFn: Morphism<T, U>, value: T) => unless_general_111<T, U>;
    <$SEL extends "01">(): (_whenFalseFn: PH, value: T) => unless_general_101<T>;
    <$SEL extends "1">(): <U>(whenFalseFn: Morphism<T, U>) => unless_general_110<T, U>;
    <U>(whenFalseFn: Morphism<T, U>, value: T): unless_general_111<T, U>;
};
type unless_predicate_110<T, U, V extends T> = {
    (value: T): unless_predicate_111<T, U, V>;
};
type unless_general_110<T, U> = {
    (value: T): unless_general_111<T, U>;
};
type unless_predicate_101<T, V extends T> = {
    <U>(whenFalseFn: Morphism<T, U>): unless_predicate_111<T, U, V>;
};
type unless_general_101<T> = {
    <U>(whenFalseFn: Morphism<T, U>): unless_general_111<T, U>;
};
type unless_predicate_111<T, U, V extends T> = V | U;
type unless_general_111<T, U> = T | U;
export = unless;
