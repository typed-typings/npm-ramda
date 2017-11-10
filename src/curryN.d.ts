import { CurriedFunction0, CurriedFunction1, CurriedFunction2, CurriedFunction3, CurriedFunction4, CurriedFunction5, CurriedFunction6 } from "./$curriedFunctions";
import { Variadic } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const curryN: curryN_00;
type curryN_00 = {
    /**
     * Returns a curried equivalent of the provided function, with the specified
     * arity. The curried function has two unusual capabilities. First, its
     * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
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
     * @since v0.5.0
     * @category Function
     * @sig Number -> (* -> a) -> (* -> a)
     * @param {Number} length The arity for the returned function.
     * @param {Function} fn The function to curry.
     * @return {Function} A new, curried function.
     * @see R.curry
     * @example
     *
     *      var sumArgs = (...args) => R.sum(args);
     *
     *      var curriedAddFourNumbers = R.curryN(4, sumArgs);
     *      var f = curriedAddFourNumbers(1, 2);
     *      var g = f(3);
     *      g(4); //=> 10
     */
    (n: 0): curryN_0arity_10;
    (n: 1): curryN_1arity_10;
    (n: 2): curryN_2arity_10;
    (n: 3): curryN_3arity_10;
    (n: 4): curryN_4arity_10;
    (n: 5): curryN_5arity_10;
    (n: 6): curryN_6arity_10;
    (n: number): curryN_variadic_10;
    <R>(_n: PH, fn: (...args: any[]) => R): curryN_0arity_01<R>;
    <T1, R>(_n: PH, fn: (v1: T1, ...args: any[]) => R): curryN_1arity_01<T1, R>;
    <T1, T2, R>(_n: PH, fn: (v1: T1, v2: T2, ...args: any[]) => R): curryN_2arity_01<T1, T2, R>;
    <T1, T2, T3, R>(_n: PH, fn: (v1: T1, v2: T2, v3: T3, ...args: any[]) => R): curryN_3arity_01<T1, T2, T3, R>;
    <T1, T2, T3, T4, R>(_n: PH, fn: (v1: T1, v2: T2, v3: T3, v4: T4, ...args: any[]) => R): curryN_4arity_01<T1, T2, T3, T4, R>;
    <T1, T2, T3, T4, T5, R>(_n: PH, fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, ...args: any[]) => R): curryN_5arity_01<T1, T2, T3, T4, T5, R>;
    <T1, T2, T3, T4, T5, T6, R>(_n: PH, fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, ...args: any[]) => R): curryN_6arity_01<T1, T2, T3, T4, T5, T6, R>;
    <R>(_n: PH, fn: Variadic<R>): curryN_variadic_01<R>;
    <R>(n: 0, fn: (...args: any[]) => R): curryN_0arity_11<R>;
    <T1, R>(n: 1, fn: (v1: T1, ...args: any[]) => R): curryN_1arity_11<T1, R>;
    <T1, T2, R>(n: 2, fn: (v1: T1, v2: T2, ...args: any[]) => R): curryN_2arity_11<T1, T2, R>;
    <T1, T2, T3, R>(n: 3, fn: (v1: T1, v2: T2, v3: T3, ...args: any[]) => R): curryN_3arity_11<T1, T2, T3, R>;
    <T1, T2, T3, T4, R>(n: 4, fn: (v1: T1, v2: T2, v3: T3, v4: T4, ...args: any[]) => R): curryN_4arity_11<T1, T2, T3, T4, R>;
    <T1, T2, T3, T4, T5, R>(n: 5, fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, ...args: any[]) => R): curryN_5arity_11<T1, T2, T3, T4, T5, R>;
    <T1, T2, T3, T4, T5, T6, R>(n: 6, fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, ...args: any[]) => R): curryN_6arity_11<T1, T2, T3, T4, T5, T6, R>;
    <$SEL extends "11", $KIND extends "variadic">(): <R>(n: number, fn: Variadic<R>) => curryN_variadic_11<R>;
    <$SEL extends "11", $KIND extends "6arity">(): <T1, T2, T3, T4, T5, T6, R>(n: 6, fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, ...args: any[]) => R) => curryN_6arity_11<T1, T2, T3, T4, T5, T6, R>;
    <$SEL extends "11", $KIND extends "5arity">(): <T1, T2, T3, T4, T5, R>(n: 5, fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, ...args: any[]) => R) => curryN_5arity_11<T1, T2, T3, T4, T5, R>;
    <$SEL extends "11", $KIND extends "4arity">(): <T1, T2, T3, T4, R>(n: 4, fn: (v1: T1, v2: T2, v3: T3, v4: T4, ...args: any[]) => R) => curryN_4arity_11<T1, T2, T3, T4, R>;
    <$SEL extends "11", $KIND extends "3arity">(): <T1, T2, T3, R>(n: 3, fn: (v1: T1, v2: T2, v3: T3, ...args: any[]) => R) => curryN_3arity_11<T1, T2, T3, R>;
    <$SEL extends "11", $KIND extends "2arity">(): <T1, T2, R>(n: 2, fn: (v1: T1, v2: T2, ...args: any[]) => R) => curryN_2arity_11<T1, T2, R>;
    <$SEL extends "11", $KIND extends "1arity">(): <T1, R>(n: 1, fn: (v1: T1, ...args: any[]) => R) => curryN_1arity_11<T1, R>;
    <$SEL extends "11", $KIND extends "0arity">(): <R>(n: 0, fn: (...args: any[]) => R) => curryN_0arity_11<R>;
    <$SEL extends "01", $KIND extends "variadic">(): <R>(_n: PH, fn: Variadic<R>) => curryN_variadic_01<R>;
    <$SEL extends "01", $KIND extends "6arity">(): <T1, T2, T3, T4, T5, T6, R>(_n: PH, fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, ...args: any[]) => R) => curryN_6arity_01<T1, T2, T3, T4, T5, T6, R>;
    <$SEL extends "01", $KIND extends "5arity">(): <T1, T2, T3, T4, T5, R>(_n: PH, fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, ...args: any[]) => R) => curryN_5arity_01<T1, T2, T3, T4, T5, R>;
    <$SEL extends "01", $KIND extends "4arity">(): <T1, T2, T3, T4, R>(_n: PH, fn: (v1: T1, v2: T2, v3: T3, v4: T4, ...args: any[]) => R) => curryN_4arity_01<T1, T2, T3, T4, R>;
    <$SEL extends "01", $KIND extends "3arity">(): <T1, T2, T3, R>(_n: PH, fn: (v1: T1, v2: T2, v3: T3, ...args: any[]) => R) => curryN_3arity_01<T1, T2, T3, R>;
    <$SEL extends "01", $KIND extends "2arity">(): <T1, T2, R>(_n: PH, fn: (v1: T1, v2: T2, ...args: any[]) => R) => curryN_2arity_01<T1, T2, R>;
    <$SEL extends "01", $KIND extends "1arity">(): <T1, R>(_n: PH, fn: (v1: T1, ...args: any[]) => R) => curryN_1arity_01<T1, R>;
    <$SEL extends "01", $KIND extends "0arity">(): <R>(_n: PH, fn: (...args: any[]) => R) => curryN_0arity_01<R>;
    <$SEL extends "1", $KIND extends "variadic">(): (n: number) => curryN_variadic_10;
    <$SEL extends "1", $KIND extends "6arity">(): (n: 6) => curryN_6arity_10;
    <$SEL extends "1", $KIND extends "5arity">(): (n: 5) => curryN_5arity_10;
    <$SEL extends "1", $KIND extends "4arity">(): (n: 4) => curryN_4arity_10;
    <$SEL extends "1", $KIND extends "3arity">(): (n: 3) => curryN_3arity_10;
    <$SEL extends "1", $KIND extends "2arity">(): (n: 2) => curryN_2arity_10;
    <$SEL extends "1", $KIND extends "1arity">(): (n: 1) => curryN_1arity_10;
    <$SEL extends "1", $KIND extends "0arity">(): (n: 0) => curryN_0arity_10;
    <R>(n: number, fn: Variadic<R>): curryN_variadic_11<R>;
};
type curryN_0arity_10 = {
    <R>(fn: (...args: any[]) => R): curryN_0arity_11<R>;
};
type curryN_1arity_10 = {
    <T1, R>(fn: (v1: T1, ...args: any[]) => R): curryN_1arity_11<T1, R>;
};
type curryN_2arity_10 = {
    <T1, T2, R>(fn: (v1: T1, v2: T2, ...args: any[]) => R): curryN_2arity_11<T1, T2, R>;
};
type curryN_3arity_10 = {
    <T1, T2, T3, R>(fn: (v1: T1, v2: T2, v3: T3, ...args: any[]) => R): curryN_3arity_11<T1, T2, T3, R>;
};
type curryN_4arity_10 = {
    <T1, T2, T3, T4, R>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, ...args: any[]) => R): curryN_4arity_11<T1, T2, T3, T4, R>;
};
type curryN_5arity_10 = {
    <T1, T2, T3, T4, T5, R>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, ...args: any[]) => R): curryN_5arity_11<T1, T2, T3, T4, T5, R>;
};
type curryN_6arity_10 = {
    <T1, T2, T3, T4, T5, T6, R>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, ...args: any[]) => R): curryN_6arity_11<T1, T2, T3, T4, T5, T6, R>;
};
type curryN_variadic_10 = {
    <R>(fn: Variadic<R>): curryN_variadic_11<R>;
};
type curryN_0arity_01<R> = {
    (n: 0): curryN_0arity_11<R>;
};
type curryN_1arity_01<T1, R> = {
    (n: 1): curryN_1arity_11<T1, R>;
};
type curryN_2arity_01<T1, T2, R> = {
    (n: 2): curryN_2arity_11<T1, T2, R>;
};
type curryN_3arity_01<T1, T2, T3, R> = {
    (n: 3): curryN_3arity_11<T1, T2, T3, R>;
};
type curryN_4arity_01<T1, T2, T3, T4, R> = {
    (n: 4): curryN_4arity_11<T1, T2, T3, T4, R>;
};
type curryN_5arity_01<T1, T2, T3, T4, T5, R> = {
    (n: 5): curryN_5arity_11<T1, T2, T3, T4, T5, R>;
};
type curryN_6arity_01<T1, T2, T3, T4, T5, T6, R> = {
    (n: 6): curryN_6arity_11<T1, T2, T3, T4, T5, T6, R>;
};
type curryN_variadic_01<R> = {
    (n: number): curryN_variadic_11<R>;
};
type curryN_0arity_11<R> = CurriedFunction0<R>;
type curryN_1arity_11<T1, R> = CurriedFunction1<T1, R>;
type curryN_2arity_11<T1, T2, R> = CurriedFunction2<T1, T2, R>;
type curryN_3arity_11<T1, T2, T3, R> = CurriedFunction3<T1, T2, T3, R>;
type curryN_4arity_11<T1, T2, T3, T4, R> = CurriedFunction4<T1, T2, T3, T4, R>;
type curryN_5arity_11<T1, T2, T3, T4, T5, R> = CurriedFunction5<T1, T2, T3, T4, T5, R>;
type curryN_6arity_11<T1, T2, T3, T4, T5, T6, R> = CurriedFunction6<T1, T2, T3, T4, T5, T6, R>;
type curryN_variadic_11<R> = Variadic<R>;
export = curryN;
