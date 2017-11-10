import { Variadic } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const apply: apply_00;
type apply_00 = {
    /**
     * Applies function `fn` to the argument list `args`. This is useful for
     * creating a fixed-arity function from a variadic function. `fn` should be a
     * bound function if context is significant.
     *
     * @func
     * @memberOf R
     * @since v0.7.0
     * @category Function
     * @sig (*... -> a) -> [*] -> a
     * @param {Function} fn The function which will be called with `args`
     * @param {Array} args The arguments to call `fn` with
     * @return {*} result The result, equivalent to `fn(...args)`
     * @see R.call, R.unapply
     * @example
     *
     *      var nums = [1, 2, 3, -99, 42, 6, 7];
     *      R.apply(Math.max, nums); //=> 42
     * @symb R.apply(f, [a, b, c]) = f(a, b, c)
     */
    <T>(fn: Variadic<T>): apply_10<T>;
    (_fn: PH, args: any[]): apply_01;
    <$SEL extends "11">(): <T>(fn: Variadic<T>, args: any[]) => apply_11<T>;
    <$SEL extends "01">(): (_fn: PH, args: any[]) => apply_01;
    <$SEL extends "1">(): <T>(fn: Variadic<T>) => apply_10<T>;
    <T>(fn: Variadic<T>, args: any[]): apply_11<T>;
};
type apply_10<T> = {
    (args: any[]): apply_11<T>;
};
type apply_01 = {
    <T>(fn: Variadic<T>): apply_11<T>;
};
type apply_11<T> = T;
export = apply;
