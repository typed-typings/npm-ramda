import { Variadic } from "./$types";
declare const binary: binary_0;
type binary_0 = {
    /**
     * Wraps a function of any arity (including nullary) in a function that accepts
     * exactly 2 parameters. Any extraneous parameters will not be passed to the
     * supplied function.
     *
     * @func
     * @memberOf R
     * @since v0.2.0
     * @category Function
     * @sig (* -> c) -> (a, b -> c)
     * @param {Function} fn The function to wrap.
     * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
     *         arity 2.
     * @see R.nAry, R.unary
     * @example
     *
     *      var takesThreeArgs = function(a, b, c) {
     *        return [a, b, c];
     *      };
     *      takesThreeArgs.length; //=> 3
     *      takesThreeArgs(1, 2, 3); //=> [1, 2, 3]
     *
     *      var takesTwoArgs = R.binary(takesThreeArgs);
     *      takesTwoArgs.length; //=> 2
     *      // Only 2 arguments are passed to the wrapped function
     *      takesTwoArgs(1, 2, 3); //=> [1, 2, undefined]
     * @symb R.binary(f)(a, b, c) = f(a, b)
     */
    <T, U, R>(fn: (a: T, b: U, ...args: any[]) => R): binary_base_1<T, U, R>;
    <$SEL extends "1", $KIND extends "variadic">(): <R>(fn: Variadic<R>) => binary_variadic_1<R>;
    <$SEL extends "1", $KIND extends "base">(): <T, U, R>(fn: (a: T, b: U, ...args: any[]) => R) => binary_base_1<T, U, R>;
    <R>(fn: Variadic<R>): binary_variadic_1<R>;
};
type binary_base_1<T, U, R> = (a: T, b: U) => R;
type binary_variadic_1<R> = (a: any, b: any) => R;
export = binary;
