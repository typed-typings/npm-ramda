import { CurriedFunction0, CurriedFunction1, CurriedFunction2, CurriedFunction3, CurriedFunction4, CurriedFunction5, CurriedFunction6 } from "./$curriedFunctions";
import { Variadic } from "./$types";
declare const curry: curry_0;
type curry_0 = {
    /**
     * Returns a curried equivalent of the provided function. The curried function
     * has two unusual capabilities. First, its arguments needn't be provided one
     * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
     * following are equivalent:
     *
     *   - `g(1)(2)(3)`
     *   - `g(1)(2, 3)`
     *   - `g(1, 2)(3)`
     *   - `g(1, 2, 3)`
     *
     * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
     * "gaps", allowing partial application of any combination of arguments,
     * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
     * the following are equivalent:
     *
     *   - `g(1, 2, 3)`
     *   - `g(_, 2, 3)(1)`
     *   - `g(_, _, 3)(1)(2)`
     *   - `g(_, _, 3)(1, 2)`
     *   - `g(_, 2)(1)(3)`
     *   - `g(_, 2)(1, 3)`
     *   - `g(_, 2)(_, 3)(1)`
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category Function
     * @sig (* -> a) -> (* -> a)
     * @param {Function} fn The function to curry.
     * @return {Function} A new, curried function.
     * @see R.curryN
     * @example
     *
     *      var addFourNumbers = (a, b, c, d) => a + b + c + d;
     *
     *      var curriedAddFourNumbers = R.curry(addFourNumbers);
     *      var f = curriedAddFourNumbers(1, 2);
     *      var g = f(3);
     *      g(4); //=> 10
     */
    <R>(fn: () => R): curry_0arity_1<R>;
    <T1, R>(fn: (v1: T1) => R): curry_1arity_1<T1, R>;
    <T1, T2, R>(fn: (v1: T1, v2: T2) => R): curry_2arity_1<T1, T2, R>;
    <T1, T2, T3, R>(fn: (v1: T1, v2: T2, v3: T3) => R): curry_3arity_1<T1, T2, T3, R>;
    <T1, T2, T3, T4, R>(fn: (v1: T1, v2: T2, v3: T3, v4: T4) => R): curry_4arity_1<T1, T2, T3, T4, R>;
    <T1, T2, T3, T4, T5, R>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => R): curry_5arity_1<T1, T2, T3, T4, T5, R>;
    <T1, T2, T3, T4, T5, T6, R>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R): curry_6arity_1<T1, T2, T3, T4, T5, T6, R>;
    <$SEL extends "1", $KIND extends "variadic">(): <R>(fn: Variadic<R>) => curry_variadic_1<R>;
    <$SEL extends "1", $KIND extends "6arity">(): <T1, T2, T3, T4, T5, T6, R>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R) => curry_6arity_1<T1, T2, T3, T4, T5, T6, R>;
    <$SEL extends "1", $KIND extends "5arity">(): <T1, T2, T3, T4, T5, R>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => R) => curry_5arity_1<T1, T2, T3, T4, T5, R>;
    <$SEL extends "1", $KIND extends "4arity">(): <T1, T2, T3, T4, R>(fn: (v1: T1, v2: T2, v3: T3, v4: T4) => R) => curry_4arity_1<T1, T2, T3, T4, R>;
    <$SEL extends "1", $KIND extends "3arity">(): <T1, T2, T3, R>(fn: (v1: T1, v2: T2, v3: T3) => R) => curry_3arity_1<T1, T2, T3, R>;
    <$SEL extends "1", $KIND extends "2arity">(): <T1, T2, R>(fn: (v1: T1, v2: T2) => R) => curry_2arity_1<T1, T2, R>;
    <$SEL extends "1", $KIND extends "1arity">(): <T1, R>(fn: (v1: T1) => R) => curry_1arity_1<T1, R>;
    <$SEL extends "1", $KIND extends "0arity">(): <R>(fn: () => R) => curry_0arity_1<R>;
    <R>(fn: Variadic<R>): curry_variadic_1<R>;
};
type curry_0arity_1<R> = CurriedFunction0<R>;
type curry_1arity_1<T1, R> = CurriedFunction1<T1, R>;
type curry_2arity_1<T1, T2, R> = CurriedFunction2<T1, T2, R>;
type curry_3arity_1<T1, T2, T3, R> = CurriedFunction3<T1, T2, T3, R>;
type curry_4arity_1<T1, T2, T3, T4, R> = CurriedFunction4<T1, T2, T3, T4, R>;
type curry_5arity_1<T1, T2, T3, T4, T5, R> = CurriedFunction5<T1, T2, T3, T4, T5, R>;
type curry_6arity_1<T1, T2, T3, T4, T5, T6, R> = CurriedFunction6<T1, T2, T3, T4, T5, T6, R>;
type curry_variadic_1<R> = Variadic<R>;
export = curry;
