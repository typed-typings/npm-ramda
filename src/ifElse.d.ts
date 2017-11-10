import { Morphism, Predicate } from "./$types";
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
    <T, U>(pred: Predicate<T>, onTrue: Morphism<T, U>): ifElse_110<T, U>;
    <$SEL extends "111">(): <T, U, V>(pred: Predicate<T>, onTrue: Morphism<T, U>, onFalse: Morphism<T, V>) => ifElse_111<T, U, V>;
    <$SEL extends "11">(): <T, U>(pred: Predicate<T>, onTrue: Morphism<T, U>) => ifElse_110<T, U>;
    <$SEL extends "1">(): <T>(pred: Predicate<T>) => ifElse_100<T>;
    <T, U, V>(pred: Predicate<T>, onTrue: Morphism<T, U>, onFalse: Morphism<T, V>): ifElse_111<T, U, V>;
};
type ifElse_100<T> = {
    <U>(onTrue: Morphism<T, U>): ifElse_110<T, U>;
    <$SEL extends "11">(): <U, V>(onTrue: Morphism<T, U>, onFalse: Morphism<T, V>) => ifElse_111<T, U, V>;
    <$SEL extends "1">(): <U>(onTrue: Morphism<T, U>) => ifElse_110<T, U>;
    <U, V>(onTrue: Morphism<T, U>, onFalse: Morphism<T, V>): ifElse_111<T, U, V>;
};
type ifElse_110<T, U> = {
    <V>(onFalse: Morphism<T, V>): ifElse_111<T, U, V>;
};
type ifElse_111<T, U, V> = Morphism<T, U | V>;
export = ifElse;
