import { CurriedFunction0, CurriedFunction1, CurriedFunction2, CurriedFunction3, CurriedFunction4, CurriedFunction5, CurriedFunction6 } from "./$curriedFunctions";
import { Morphism, Variadic } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const useWith: useWith_00;
type useWith_00 = {
    /**
     * Accepts a function `fn` and a list of transformer functions and returns a
     * new curried function. When the new function is invoked, it calls the
     * function `fn` with parameters consisting of the result of calling each
     * supplied handler on successive arguments to the new function.
     *
     * If more arguments are passed to the returned function than transformer
     * functions, those arguments are passed directly to `fn` as additional
     * parameters. If you expect additional arguments that don't need to be
     * transformed, although you can ignore them, it's best to pass an identity
     * function so that the new function reports the correct arity.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category Function
     * @sig ((x1, x2, ...) -> z) -> [(a -> x1), (b -> x2), ...] -> (a -> b -> ... -> z)
     * @param {Function} fn The function to wrap.
     * @param {Array} transformers A list of transformer functions
     * @return {Function} The wrapped function.
     * @see R.converge
     * @example
     *
     *      R.useWith(Math.pow, [R.identity, R.identity])(3, 4); //=> 81
     *      R.useWith(Math.pow, [R.identity, R.identity])(3)(4); //=> 81
     *      R.useWith(Math.pow, [R.dec, R.inc])(3, 4); //=> 32
     *      R.useWith(Math.pow, [R.dec, R.inc])(3)(4); //=> 32
     * @symb R.useWith(f, [g, h])(a, b) = f(g(a), h(b))
     */
    <R>(after: () => R): useWith_0arity_10<R>;
    <U1, R>(after: (v1: U1) => R): useWith_1arity_10<U1, R>;
    <U1, U2, R>(after: (v1: U1, v2: U2) => R): useWith_2arity_10<U1, U2, R>;
    <U1, U2, U3, R>(after: (v1: U1, v2: U2, v3: U3) => R): useWith_3arity_10<U1, U2, U3, R>;
    <U1, U2, U3, U4, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4) => R): useWith_4arity_10<U1, U2, U3, U4, R>;
    <U1, U2, U3, U4, U5, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5) => R): useWith_5arity_10<U1, U2, U3, U4, U5, R>;
    <U1, U2, U3, U4, U5, U6, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5, v6: U6) => R): useWith_6arity_10<U1, U2, U3, U4, U5, U6, R>;
    <R>(after: Variadic<R>): useWith_variadic_10<R>;
    (_after: PH, fns: never[]): useWith_0arity_01;
    <T1, U1>(_after: PH, fns: [Morphism<T1, U1>]): useWith_1arity_01<T1, U1>;
    <T1, T2, U1, U2>(_after: PH, fns: [Morphism<T1, U1>, Morphism<T2, U2>]): useWith_2arity_01<T1, T2, U1, U2>;
    <T1, T2, T3, U1, U2, U3>(_after: PH, fns: [Morphism<T1, U1>, Morphism<T2, U2>, Morphism<T3, U3>]): useWith_3arity_01<T1, T2, T3, U1, U2, U3>;
    <T1, T2, T3, T4, U1, U2, U3, U4>(_after: PH, fns: [Morphism<T1, U1>, Morphism<T2, U2>, Morphism<T3, U3>, Morphism<T4, U4>]): useWith_4arity_01<T1, T2, T3, T4, U1, U2, U3, U4>;
    <T1, T2, T3, T4, T5, U1, U2, U3, U4, U5>(_after: PH, fns: [Morphism<T1, U1>, Morphism<T2, U2>, Morphism<T3, U3>, Morphism<T4, U4>, Morphism<T5, U5>]): useWith_5arity_01<T1, T2, T3, T4, T5, U1, U2, U3, U4, U5>;
    <T1, T2, T3, T4, T5, T6, U1, U2, U3, U4, U5, U6>(_after: PH, fns: [Morphism<T1, U1>, Morphism<T2, U2>, Morphism<T3, U3>, Morphism<T4, U4>, Morphism<T5, U5>, Morphism<T6, U6>]): useWith_6arity_01<T1, T2, T3, T4, T5, T6, U1, U2, U3, U4, U5, U6>;
    (_after: PH, fns: Function[]): useWith_variadic_01;
    <R>(after: () => R, fns: never[]): useWith_0arity_11<R>;
    <T1, U1, R>(after: (v1: U1) => R, fns: [Morphism<T1, U1>]): useWith_1arity_11<T1, R>;
    <T1, T2, U1, U2, R>(after: (v1: U1, v2: U2) => R, fns: [Morphism<T1, U1>, Morphism<T2, U2>]): useWith_2arity_11<T1, T2, R>;
    <T1, T2, T3, U1, U2, U3, R>(after: (v1: U1, v2: U2, v3: U3) => R, fns: [Morphism<T1, U1>, Morphism<T2, U2>, Morphism<T3, U3>]): useWith_3arity_11<T1, T2, T3, R>;
    <T1, T2, T3, T4, U1, U2, U3, U4, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4) => R, fns: [Morphism<T1, U1>, Morphism<T2, U2>, Morphism<T3, U3>, Morphism<T4, U4>]): useWith_4arity_11<T1, T2, T3, T4, R>;
    <T1, T2, T3, T4, T5, U1, U2, U3, U4, U5, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5) => R, fns: [Morphism<T1, U1>, Morphism<T2, U2>, Morphism<T3, U3>, Morphism<T4, U4>, Morphism<T5, U5>]): useWith_5arity_11<T1, T2, T3, T4, T5, R>;
    <T1, T2, T3, T4, T5, T6, U1, U2, U3, U4, U5, U6, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5, v6: U6) => R, fns: [Morphism<T1, U1>, Morphism<T2, U2>, Morphism<T3, U3>, Morphism<T4, U4>, Morphism<T5, U5>, Morphism<T6, U6>]): useWith_6arity_11<T1, T2, T3, T4, T5, T6, R>;
    <$SEL extends "11", $KIND extends "variadic">(): <R>(after: Variadic<R>, fns: Function[]) => useWith_variadic_11<R>;
    <$SEL extends "11", $KIND extends "6arity">(): <T1, T2, T3, T4, T5, T6, U1, U2, U3, U4, U5, U6, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5, v6: U6) => R, fns: [Morphism<T1, U1>, Morphism<T2, U2>, Morphism<T3, U3>, Morphism<T4, U4>, Morphism<T5, U5>, Morphism<T6, U6>]) => useWith_6arity_11<T1, T2, T3, T4, T5, T6, R>;
    <$SEL extends "11", $KIND extends "5arity">(): <T1, T2, T3, T4, T5, U1, U2, U3, U4, U5, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5) => R, fns: [Morphism<T1, U1>, Morphism<T2, U2>, Morphism<T3, U3>, Morphism<T4, U4>, Morphism<T5, U5>]) => useWith_5arity_11<T1, T2, T3, T4, T5, R>;
    <$SEL extends "11", $KIND extends "4arity">(): <T1, T2, T3, T4, U1, U2, U3, U4, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4) => R, fns: [Morphism<T1, U1>, Morphism<T2, U2>, Morphism<T3, U3>, Morphism<T4, U4>]) => useWith_4arity_11<T1, T2, T3, T4, R>;
    <$SEL extends "11", $KIND extends "3arity">(): <T1, T2, T3, U1, U2, U3, R>(after: (v1: U1, v2: U2, v3: U3) => R, fns: [Morphism<T1, U1>, Morphism<T2, U2>, Morphism<T3, U3>]) => useWith_3arity_11<T1, T2, T3, R>;
    <$SEL extends "11", $KIND extends "2arity">(): <T1, T2, U1, U2, R>(after: (v1: U1, v2: U2) => R, fns: [Morphism<T1, U1>, Morphism<T2, U2>]) => useWith_2arity_11<T1, T2, R>;
    <$SEL extends "11", $KIND extends "1arity">(): <T1, U1, R>(after: (v1: U1) => R, fns: [Morphism<T1, U1>]) => useWith_1arity_11<T1, R>;
    <$SEL extends "11", $KIND extends "0arity">(): <R>(after: () => R, fns: never[]) => useWith_0arity_11<R>;
    <$SEL extends "01", $KIND extends "variadic">(): (_after: PH, fns: Function[]) => useWith_variadic_01;
    <$SEL extends "01", $KIND extends "6arity">(): <T1, T2, T3, T4, T5, T6, U1, U2, U3, U4, U5, U6>(_after: PH, fns: [Morphism<T1, U1>, Morphism<T2, U2>, Morphism<T3, U3>, Morphism<T4, U4>, Morphism<T5, U5>, Morphism<T6, U6>]) => useWith_6arity_01<T1, T2, T3, T4, T5, T6, U1, U2, U3, U4, U5, U6>;
    <$SEL extends "01", $KIND extends "5arity">(): <T1, T2, T3, T4, T5, U1, U2, U3, U4, U5>(_after: PH, fns: [Morphism<T1, U1>, Morphism<T2, U2>, Morphism<T3, U3>, Morphism<T4, U4>, Morphism<T5, U5>]) => useWith_5arity_01<T1, T2, T3, T4, T5, U1, U2, U3, U4, U5>;
    <$SEL extends "01", $KIND extends "4arity">(): <T1, T2, T3, T4, U1, U2, U3, U4>(_after: PH, fns: [Morphism<T1, U1>, Morphism<T2, U2>, Morphism<T3, U3>, Morphism<T4, U4>]) => useWith_4arity_01<T1, T2, T3, T4, U1, U2, U3, U4>;
    <$SEL extends "01", $KIND extends "3arity">(): <T1, T2, T3, U1, U2, U3>(_after: PH, fns: [Morphism<T1, U1>, Morphism<T2, U2>, Morphism<T3, U3>]) => useWith_3arity_01<T1, T2, T3, U1, U2, U3>;
    <$SEL extends "01", $KIND extends "2arity">(): <T1, T2, U1, U2>(_after: PH, fns: [Morphism<T1, U1>, Morphism<T2, U2>]) => useWith_2arity_01<T1, T2, U1, U2>;
    <$SEL extends "01", $KIND extends "1arity">(): <T1, U1>(_after: PH, fns: [Morphism<T1, U1>]) => useWith_1arity_01<T1, U1>;
    <$SEL extends "01", $KIND extends "0arity">(): (_after: PH, fns: never[]) => useWith_0arity_01;
    <$SEL extends "1", $KIND extends "variadic">(): <R>(after: Variadic<R>) => useWith_variadic_10<R>;
    <$SEL extends "1", $KIND extends "6arity">(): <U1, U2, U3, U4, U5, U6, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5, v6: U6) => R) => useWith_6arity_10<U1, U2, U3, U4, U5, U6, R>;
    <$SEL extends "1", $KIND extends "5arity">(): <U1, U2, U3, U4, U5, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5) => R) => useWith_5arity_10<U1, U2, U3, U4, U5, R>;
    <$SEL extends "1", $KIND extends "4arity">(): <U1, U2, U3, U4, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4) => R) => useWith_4arity_10<U1, U2, U3, U4, R>;
    <$SEL extends "1", $KIND extends "3arity">(): <U1, U2, U3, R>(after: (v1: U1, v2: U2, v3: U3) => R) => useWith_3arity_10<U1, U2, U3, R>;
    <$SEL extends "1", $KIND extends "2arity">(): <U1, U2, R>(after: (v1: U1, v2: U2) => R) => useWith_2arity_10<U1, U2, R>;
    <$SEL extends "1", $KIND extends "1arity">(): <U1, R>(after: (v1: U1) => R) => useWith_1arity_10<U1, R>;
    <$SEL extends "1", $KIND extends "0arity">(): <R>(after: () => R) => useWith_0arity_10<R>;
    <R>(after: Variadic<R>, fns: Function[]): useWith_variadic_11<R>;
};
type useWith_0arity_10<R> = {
    (fns: never[]): useWith_0arity_11<R>;
};
type useWith_1arity_10<U1, R> = {
    <T1>(fns: [Morphism<T1, U1>]): useWith_1arity_11<T1, R>;
};
type useWith_2arity_10<U1, U2, R> = {
    <T1, T2>(fns: [Morphism<T1, U1>, Morphism<T2, U2>]): useWith_2arity_11<T1, T2, R>;
};
type useWith_3arity_10<U1, U2, U3, R> = {
    <T1, T2, T3>(fns: [Morphism<T1, U1>, Morphism<T2, U2>, Morphism<T3, U3>]): useWith_3arity_11<T1, T2, T3, R>;
};
type useWith_4arity_10<U1, U2, U3, U4, R> = {
    <T1, T2, T3, T4>(fns: [Morphism<T1, U1>, Morphism<T2, U2>, Morphism<T3, U3>, Morphism<T4, U4>]): useWith_4arity_11<T1, T2, T3, T4, R>;
};
type useWith_5arity_10<U1, U2, U3, U4, U5, R> = {
    <T1, T2, T3, T4, T5>(fns: [Morphism<T1, U1>, Morphism<T2, U2>, Morphism<T3, U3>, Morphism<T4, U4>, Morphism<T5, U5>]): useWith_5arity_11<T1, T2, T3, T4, T5, R>;
};
type useWith_6arity_10<U1, U2, U3, U4, U5, U6, R> = {
    <T1, T2, T3, T4, T5, T6>(fns: [Morphism<T1, U1>, Morphism<T2, U2>, Morphism<T3, U3>, Morphism<T4, U4>, Morphism<T5, U5>, Morphism<T6, U6>]): useWith_6arity_11<T1, T2, T3, T4, T5, T6, R>;
};
type useWith_variadic_10<R> = {
    (fns: Function[]): useWith_variadic_11<R>;
};
type useWith_0arity_01 = {
    <R>(after: () => R): useWith_0arity_11<R>;
};
type useWith_1arity_01<T1, U1> = {
    <R>(after: (v1: U1) => R): useWith_1arity_11<T1, R>;
};
type useWith_2arity_01<T1, T2, U1, U2> = {
    <R>(after: (v1: U1, v2: U2) => R): useWith_2arity_11<T1, T2, R>;
};
type useWith_3arity_01<T1, T2, T3, U1, U2, U3> = {
    <R>(after: (v1: U1, v2: U2, v3: U3) => R): useWith_3arity_11<T1, T2, T3, R>;
};
type useWith_4arity_01<T1, T2, T3, T4, U1, U2, U3, U4> = {
    <R>(after: (v1: U1, v2: U2, v3: U3, v4: U4) => R): useWith_4arity_11<T1, T2, T3, T4, R>;
};
type useWith_5arity_01<T1, T2, T3, T4, T5, U1, U2, U3, U4, U5> = {
    <R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5) => R): useWith_5arity_11<T1, T2, T3, T4, T5, R>;
};
type useWith_6arity_01<T1, T2, T3, T4, T5, T6, U1, U2, U3, U4, U5, U6> = {
    <R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5, v6: U6) => R): useWith_6arity_11<T1, T2, T3, T4, T5, T6, R>;
};
type useWith_variadic_01 = {
    <R>(after: Variadic<R>): useWith_variadic_11<R>;
};
type useWith_0arity_11<R> = CurriedFunction0<R>;
type useWith_1arity_11<T1, R> = CurriedFunction1<T1, R>;
type useWith_2arity_11<T1, T2, R> = CurriedFunction2<T1, T2, R>;
type useWith_3arity_11<T1, T2, T3, R> = CurriedFunction3<T1, T2, T3, R>;
type useWith_4arity_11<T1, T2, T3, T4, R> = CurriedFunction4<T1, T2, T3, T4, R>;
type useWith_5arity_11<T1, T2, T3, T4, T5, R> = CurriedFunction5<T1, T2, T3, T4, T5, R>;
type useWith_6arity_11<T1, T2, T3, T4, T5, T6, R> = CurriedFunction6<T1, T2, T3, T4, T5, T6, R>;
type useWith_variadic_11<R> = Variadic<R>;
export = useWith;
