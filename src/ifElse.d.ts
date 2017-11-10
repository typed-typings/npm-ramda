import { Morphism, Predicate } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const ifElse: ifElse_000;
type ifElse_000 = {
    /**
     * Creates a function that will process either the `onTrue` or the `onFalse`
     * function depending upon the result of the `condition` predicate.
     *
     * @func
     * @memberOf R
     * @since v0.8.0
     * @category Logic
     * @sig (*... -> Boolean) -> (*... -> *) -> (*... -> *) -> (*... -> *)
     * @param {Function} condition A predicate function
     * @param {Function} onTrue A function to invoke when the `condition` evaluates to a truthy value.
     * @param {Function} onFalse A function to invoke when the `condition` evaluates to a falsy value.
     * @return {Function} A new unary function that will process either the `onTrue` or the `onFalse`
     *                    function depending upon the result of the `condition` predicate.
     * @see R.unless, R.when
     * @example
     *
     *      var incCount = R.ifElse(
     *        R.has('count'),
     *        R.over(R.lensProp('count'), R.inc),
     *        R.assoc('count', 1)
     *      );
     *      incCount({});           //=> { count: 1 }
     *      incCount({ count: 1 }); //=> { count: 2 }
     */
    <T>(pred: Predicate<T>): ifElse_100<T>;
    <T, U>(_pred: PH, onTrue: Morphism<T, U>): ifElse_010<T, U>;
    <T, U>(pred: Predicate<T>, onTrue: Morphism<T, U>): ifElse_110<T, U>;
    <T, V>(_pred: PH, _onTrue: PH, onFalse: Morphism<T, V>): ifElse_001<T, V>;
    <T, U, V>(_pred: PH, onTrue: Morphism<T, U>, onFalse: Morphism<T, V>): ifElse_011<T, U, V>;
    <T, V>(pred: Predicate<T>, _onTrue: PH, onFalse: Morphism<T, V>): ifElse_101<T, V>;
    <$SEL extends "111">(): <T, U, V>(pred: Predicate<T>, onTrue: Morphism<T, U>, onFalse: Morphism<T, V>) => ifElse_111<T, U, V>;
    <$SEL extends "101">(): <T, V>(pred: Predicate<T>, _onTrue: PH, onFalse: Morphism<T, V>) => ifElse_101<T, V>;
    <$SEL extends "011">(): <T, U, V>(_pred: PH, onTrue: Morphism<T, U>, onFalse: Morphism<T, V>) => ifElse_011<T, U, V>;
    <$SEL extends "001">(): <T, V>(_pred: PH, _onTrue: PH, onFalse: Morphism<T, V>) => ifElse_001<T, V>;
    <$SEL extends "11">(): <T, U>(pred: Predicate<T>, onTrue: Morphism<T, U>) => ifElse_110<T, U>;
    <$SEL extends "01">(): <T, U>(_pred: PH, onTrue: Morphism<T, U>) => ifElse_010<T, U>;
    <$SEL extends "1">(): <T>(pred: Predicate<T>) => ifElse_100<T>;
    <T, U, V>(pred: Predicate<T>, onTrue: Morphism<T, U>, onFalse: Morphism<T, V>): ifElse_111<T, U, V>;
};
type ifElse_100<T> = {
    <U>(onTrue: Morphism<T, U>): ifElse_110<T, U>;
    <V>(_onTrue: PH, onFalse: Morphism<T, V>): ifElse_101<T, V>;
    <$SEL extends "11">(): <U, V>(onTrue: Morphism<T, U>, onFalse: Morphism<T, V>) => ifElse_111<T, U, V>;
    <$SEL extends "01">(): <V>(_onTrue: PH, onFalse: Morphism<T, V>) => ifElse_101<T, V>;
    <$SEL extends "1">(): <U>(onTrue: Morphism<T, U>) => ifElse_110<T, U>;
    <U, V>(onTrue: Morphism<T, U>, onFalse: Morphism<T, V>): ifElse_111<T, U, V>;
};
type ifElse_010<T, U> = {
    (pred: Predicate<T>): ifElse_110<T, U>;
    <V>(_pred: PH, onFalse: Morphism<T, V>): ifElse_011<T, U, V>;
    <$SEL extends "11">(): <V>(pred: Predicate<T>, onFalse: Morphism<T, V>) => ifElse_111<T, U, V>;
    <$SEL extends "01">(): <V>(_pred: PH, onFalse: Morphism<T, V>) => ifElse_011<T, U, V>;
    <$SEL extends "1">(): (pred: Predicate<T>) => ifElse_110<T, U>;
    <V>(pred: Predicate<T>, onFalse: Morphism<T, V>): ifElse_111<T, U, V>;
};
type ifElse_110<T, U> = {
    <V>(onFalse: Morphism<T, V>): ifElse_111<T, U, V>;
};
type ifElse_001<T, V> = {
    (pred: Predicate<T>): ifElse_101<T, V>;
    <U>(_pred: PH, onTrue: Morphism<T, U>): ifElse_011<T, U, V>;
    <$SEL extends "11">(): <U>(pred: Predicate<T>, onTrue: Morphism<T, U>) => ifElse_111<T, U, V>;
    <$SEL extends "01">(): <U>(_pred: PH, onTrue: Morphism<T, U>) => ifElse_011<T, U, V>;
    <$SEL extends "1">(): (pred: Predicate<T>) => ifElse_101<T, V>;
    <U>(pred: Predicate<T>, onTrue: Morphism<T, U>): ifElse_111<T, U, V>;
};
type ifElse_101<T, V> = {
    <U>(onTrue: Morphism<T, U>): ifElse_111<T, U, V>;
};
type ifElse_011<T, U, V> = {
    (pred: Predicate<T>): ifElse_111<T, U, V>;
};
type ifElse_111<T, U, V> = Morphism<T, U | V>;
export = ifElse;
