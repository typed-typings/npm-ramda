import { List, Morphism } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const ap: ap_00;
type ap_00 = {
    /**
     * ap applies a list of functions to a list of values.
     *
     * Dispatches to the `ap` method of the second argument, if present. Also
     * treats curried functions as applicatives.
     *
     * @func
     * @memberOf R
     * @since v0.3.0
     * @category Function
     * @sig [a -> b] -> [a] -> [b]
     * @sig Apply f => f (a -> b) -> f a -> f b
     * @sig (a -> b -> c) -> (a -> b) -> (a -> c)
     * @param {*} applyF
     * @param {*} applyX
     * @return {*}
     * @example
     *
     *      R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
     *      R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]
     *
     *      // R.ap can also be used as S combinator
     *      // when only two functions are passed
     *      R.ap(R.concat, R.toUpper)('Ramda') //=> 'RamdaRAMDA'
     * @symb R.ap([f, g], [a, b]) = [f(a), f(b), g(a), g(b)]
     */
    <T, U>(fns: Array<Morphism<T, U>>): ap_10<T, U>;
    <T>(_fns: PH, list: List<T>): ap_01<T>;
    <$SEL extends "11">(): <T, U>(fns: Array<Morphism<T, U>>, list: List<T>) => ap_11<U>;
    <$SEL extends "01">(): <T>(_fns: PH, list: List<T>) => ap_01<T>;
    <$SEL extends "1">(): <T, U>(fns: Array<Morphism<T, U>>) => ap_10<T, U>;
    <T, U>(fns: Array<Morphism<T, U>>, list: List<T>): ap_11<U>;
};
type ap_10<T, U> = {
    (list: List<T>): ap_11<U>;
};
type ap_01<T> = {
    <U>(fns: Array<Morphism<T, U>>): ap_11<U>;
};
type ap_11<U> = U[];
export = ap;
