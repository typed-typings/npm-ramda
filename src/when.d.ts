import { Morphism, Predicate } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const when: when_000;
type when_000 = {
    /**
     * Tests the final argument by passing it to the given predicate function. If
     * the predicate is satisfied, the function will return the result of calling
     * the `whenTrueFn` function with the same argument. If the predicate is not
     * satisfied, the argument is returned as is.
     *
     * @func
     * @memberOf R
     * @since v0.18.0
     * @category Logic
     * @sig (a -> Boolean) -> (a -> a) -> a -> a
     * @param {Function} pred       A predicate function
     * @param {Function} whenTrueFn A function to invoke when the `condition`
     *                              evaluates to a truthy value.
     * @param {*}        x          An object to test with the `pred` function and
     *                              pass to `whenTrueFn` if necessary.
     * @return {*} Either `x` or the result of applying `x` to `whenTrueFn`.
     * @see R.ifElse, R.unless
     * @example
     *
     *      // truncate :: String -> String
     *      var truncate = R.when(
     *        R.propSatisfies(R.gt(R.__, 10), 'length'),
     *        R.pipe(R.take(10), R.append('…'), R.join(''))
     *      );
     *      truncate('12345');         //=> '12345'
     *      truncate('0123456789ABC'); //=> '0123456789…'
     */
    <T>(pred: Predicate<T>): when_100<T>;
    <T, U>(_pred: PH, whenTrueFn: Morphism<T, U>): when_010<T, U>;
    <T, U>(pred: Predicate<T>, whenTrueFn: Morphism<T, U>): when_110<T, U>;
    <T>(_pred: PH, _whenTrueFn: PH, value: T): when_001<T>;
    <T, U>(_pred: PH, whenTrueFn: Morphism<T, U>, value: T): when_011<T, U>;
    <T>(pred: Predicate<T>, _whenTrueFn: PH, value: T): when_101<T>;
    <$SEL extends "111">(): <T, U>(pred: Predicate<T>, whenTrueFn: Morphism<T, U>, value: T) => when_111<T, U>;
    <$SEL extends "101">(): <T>(pred: Predicate<T>, _whenTrueFn: PH, value: T) => when_101<T>;
    <$SEL extends "011">(): <T, U>(_pred: PH, whenTrueFn: Morphism<T, U>, value: T) => when_011<T, U>;
    <$SEL extends "001">(): <T>(_pred: PH, _whenTrueFn: PH, value: T) => when_001<T>;
    <$SEL extends "11">(): <T, U>(pred: Predicate<T>, whenTrueFn: Morphism<T, U>) => when_110<T, U>;
    <$SEL extends "01">(): <T, U>(_pred: PH, whenTrueFn: Morphism<T, U>) => when_010<T, U>;
    <$SEL extends "1">(): <T>(pred: Predicate<T>) => when_100<T>;
    <T, U>(pred: Predicate<T>, whenTrueFn: Morphism<T, U>, value: T): when_111<T, U>;
};
type when_100<T> = {
    <U>(whenTrueFn: Morphism<T, U>): when_110<T, U>;
    (_whenTrueFn: PH, value: T): when_101<T>;
    <$SEL extends "11">(): <U>(whenTrueFn: Morphism<T, U>, value: T) => when_111<T, U>;
    <$SEL extends "01">(): (_whenTrueFn: PH, value: T) => when_101<T>;
    <$SEL extends "1">(): <U>(whenTrueFn: Morphism<T, U>) => when_110<T, U>;
    <U>(whenTrueFn: Morphism<T, U>, value: T): when_111<T, U>;
};
type when_010<T, U> = {
    (pred: Predicate<T>): when_110<T, U>;
    (_pred: PH, value: T): when_011<T, U>;
    <$SEL extends "11">(): (pred: Predicate<T>, value: T) => when_111<T, U>;
    <$SEL extends "01">(): (_pred: PH, value: T) => when_011<T, U>;
    <$SEL extends "1">(): (pred: Predicate<T>) => when_110<T, U>;
    (pred: Predicate<T>, value: T): when_111<T, U>;
};
type when_110<T, U> = {
    (value: T): when_111<T, U>;
};
type when_001<T> = {
    (pred: Predicate<T>): when_101<T>;
    <U>(_pred: PH, whenTrueFn: Morphism<T, U>): when_011<T, U>;
    <$SEL extends "11">(): <U>(pred: Predicate<T>, whenTrueFn: Morphism<T, U>) => when_111<T, U>;
    <$SEL extends "01">(): <U>(_pred: PH, whenTrueFn: Morphism<T, U>) => when_011<T, U>;
    <$SEL extends "1">(): (pred: Predicate<T>) => when_101<T>;
    <U>(pred: Predicate<T>, whenTrueFn: Morphism<T, U>): when_111<T, U>;
};
type when_101<T> = {
    <U>(whenTrueFn: Morphism<T, U>): when_111<T, U>;
};
type when_011<T, U> = {
    (pred: Predicate<T>): when_111<T, U>;
};
type when_111<T, U> = T | U;
export = when;
