import { Variadic } from "./$types";
declare const unary: unary_0;
type unary_0 = {
    /**
     * Wraps a function of any arity (including nullary) in a function that accepts
     * exactly 1 parameter. Any extraneous parameters will not be passed to the
     * supplied function.
     *
     * @func
     * @memberOf R
     * @since v0.2.0
     * @category Function
     * @sig (* -> b) -> (a -> b)
     * @param {Function} fn The function to wrap.
     * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
     *         arity 1.
     * @see R.binary, R.nAry
     * @example
     *
     *      var takesTwoArgs = function(a, b) {
     *        return [a, b];
     *      };
     *      takesTwoArgs.length; //=> 2
     *      takesTwoArgs(1, 2); //=> [1, 2]
     *
     *      var takesOneArg = R.unary(takesTwoArgs);
     *      takesOneArg.length; //=> 1
     *      // Only 1 argument is passed to the wrapped function
     *      takesOneArg(1, 2); //=> [1, undefined]
     * @symb R.unary(f)(a, b, c) = f(a)
     */
    <T, R>(fn: (a: T, ...args: any[]) => R): unary_base_1<T, R>;
    <$SEL extends "1", $KIND extends "variadic">(): <R>(fn: Variadic<R>) => unary_variadic_1<R>;
    <$SEL extends "1", $KIND extends "base">(): <T, R>(fn: (a: T, ...args: any[]) => R) => unary_base_1<T, R>;
    <R>(fn: Variadic<R>): unary_variadic_1<R>;
};
type unary_base_1<T, R> = (a: T) => R;
type unary_variadic_1<R> = (a: any) => R;
export = unary;
