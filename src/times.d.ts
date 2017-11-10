import { Morphism } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const times: times_00;
type times_00 = {
    /**
     * Calls an input function `n` times, returning an array containing the results
     * of those function calls.
     *
     * `fn` is passed one argument: The current value of `n`, which begins at `0`
     * and is gradually incremented to `n - 1`.
     *
     * @func
     * @memberOf R
     * @since v0.2.3
     * @category List
     * @sig (Number -> a) -> Number -> [a]
     * @param {Function} fn The function to invoke. Passed one argument, the current value of `n`.
     * @param {Number} n A value between `0` and `n - 1`. Increments after each function call.
     * @return {Array} An array containing the return values of all calls to `fn`.
     * @see R.repeat
     * @example
     *
     *      R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]
     * @symb R.times(f, 0) = []
     * @symb R.times(f, 1) = [f(0)]
     * @symb R.times(f, 2) = [f(0), f(1)]
     */
    <T>(fn: Morphism<number, T>): times_10<T>;
    (_fn: PH, n: number): times_01;
    <$SEL extends "11">(): <T>(fn: Morphism<number, T>, n: number) => times_11<T>;
    <$SEL extends "01">(): (_fn: PH, n: number) => times_01;
    <$SEL extends "1">(): <T>(fn: Morphism<number, T>) => times_10<T>;
    <T>(fn: Morphism<number, T>, n: number): times_11<T>;
};
type times_10<T> = {
    (n: number): times_11<T>;
};
type times_01 = {
    <T>(fn: Morphism<number, T>): times_11<T>;
};
type times_11<T> = T[];
export = times;
