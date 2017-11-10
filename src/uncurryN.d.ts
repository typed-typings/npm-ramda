import { CurriedFunction0, CurriedFunction1, CurriedFunction2, CurriedFunction3, CurriedFunction4, CurriedFunction5, CurriedFunction6 } from "./$curriedFunctions";
import { Variadic } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const uncurryN: uncurryN_00;
type uncurryN_00 = {
    /**
     * Returns a function of arity `n` from a (manually) curried function.
     *
     * @func
     * @memberOf R
     * @since v0.14.0
     * @category Function
     * @sig Number -> (a -> b) -> (a -> c)
     * @param {Number} length The arity for the returned function.
     * @param {Function} fn The function to uncurry.
     * @return {Function} A new function.
     * @see R.curry
     * @example
     *
     *      var addFour = a => b => c => d => a + b + c + d;
     *
     *      var uncurriedAddFour = R.uncurryN(4, addFour);
     *      uncurriedAddFour(1, 2, 3, 4); //=> 10
     */
    (n: 0): uncurryN_0arity_10;
    (n: 1): uncurryN_1arity_10;
    (n: 2): uncurryN_2arity_10;
    (n: 3): uncurryN_3arity_10;
    (n: 4): uncurryN_4arity_10;
    (n: 5): uncurryN_5arity_10;
    (n: 6): uncurryN_6arity_10;
    (n: number): uncurryN_variadic_10;
    (_n: PH, fn: Variadic<any>): uncurryN_01;
    <R = any>(n: 0, fn: Variadic<any>): uncurryN_0arity_11<R>;
    <R = any, T1 = any>(n: 1, fn: Variadic<any>): uncurryN_1arity_11<R, T1>;
    <R = any, T1 = any, T2 = any>(n: 2, fn: Variadic<any>): uncurryN_2arity_11<R, T1, T2>;
    <R = any, T1 = any, T2 = any, T3 = any>(n: 3, fn: Variadic<any>): uncurryN_3arity_11<R, T1, T2, T3>;
    <R = any, T1 = any, T2 = any, T3 = any, T4 = any>(n: 4, fn: Variadic<any>): uncurryN_4arity_11<R, T1, T2, T3, T4>;
    <R = any, T1 = any, T2 = any, T3 = any, T4 = any, T5 = any>(n: 5, fn: Variadic<any>): uncurryN_5arity_11<R, T1, T2, T3, T4, T5>;
    <R = any, T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any>(n: 6, fn: Variadic<any>): uncurryN_6arity_11<R, T1, T2, T3, T4, T5, T6>;
    <$SEL extends "11", $KIND extends "variadic">(): <R = any>(n: number, fn: Variadic<any>) => uncurryN_variadic_11<R>;
    <$SEL extends "11", $KIND extends "6arity">(): <R = any, T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any>(n: 6, fn: Variadic<any>) => uncurryN_6arity_11<R, T1, T2, T3, T4, T5, T6>;
    <$SEL extends "11", $KIND extends "5arity">(): <R = any, T1 = any, T2 = any, T3 = any, T4 = any, T5 = any>(n: 5, fn: Variadic<any>) => uncurryN_5arity_11<R, T1, T2, T3, T4, T5>;
    <$SEL extends "11", $KIND extends "4arity">(): <R = any, T1 = any, T2 = any, T3 = any, T4 = any>(n: 4, fn: Variadic<any>) => uncurryN_4arity_11<R, T1, T2, T3, T4>;
    <$SEL extends "11", $KIND extends "3arity">(): <R = any, T1 = any, T2 = any, T3 = any>(n: 3, fn: Variadic<any>) => uncurryN_3arity_11<R, T1, T2, T3>;
    <$SEL extends "11", $KIND extends "2arity">(): <R = any, T1 = any, T2 = any>(n: 2, fn: Variadic<any>) => uncurryN_2arity_11<R, T1, T2>;
    <$SEL extends "11", $KIND extends "1arity">(): <R = any, T1 = any>(n: 1, fn: Variadic<any>) => uncurryN_1arity_11<R, T1>;
    <$SEL extends "11", $KIND extends "0arity">(): <R = any>(n: 0, fn: Variadic<any>) => uncurryN_0arity_11<R>;
    <$SEL extends "01">(): (_n: PH, fn: Variadic<any>) => uncurryN_01;
    <$SEL extends "1", $KIND extends "variadic">(): (n: number) => uncurryN_variadic_10;
    <$SEL extends "1", $KIND extends "6arity">(): (n: 6) => uncurryN_6arity_10;
    <$SEL extends "1", $KIND extends "5arity">(): (n: 5) => uncurryN_5arity_10;
    <$SEL extends "1", $KIND extends "4arity">(): (n: 4) => uncurryN_4arity_10;
    <$SEL extends "1", $KIND extends "3arity">(): (n: 3) => uncurryN_3arity_10;
    <$SEL extends "1", $KIND extends "2arity">(): (n: 2) => uncurryN_2arity_10;
    <$SEL extends "1", $KIND extends "1arity">(): (n: 1) => uncurryN_1arity_10;
    <$SEL extends "1", $KIND extends "0arity">(): (n: 0) => uncurryN_0arity_10;
    <R = any>(n: number, fn: Variadic<any>): uncurryN_variadic_11<R>;
};
type uncurryN_01 = {
    <R = any>(n: 0): uncurryN_0arity_11<R>;
    <R = any, T1 = any>(n: 1): uncurryN_1arity_11<R, T1>;
    <R = any, T1 = any, T2 = any>(n: 2): uncurryN_2arity_11<R, T1, T2>;
    <R = any, T1 = any, T2 = any, T3 = any>(n: 3): uncurryN_3arity_11<R, T1, T2, T3>;
    <R = any, T1 = any, T2 = any, T3 = any, T4 = any>(n: 4): uncurryN_4arity_11<R, T1, T2, T3, T4>;
    <R = any, T1 = any, T2 = any, T3 = any, T4 = any, T5 = any>(n: 5): uncurryN_5arity_11<R, T1, T2, T3, T4, T5>;
    <R = any, T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any>(n: 6): uncurryN_6arity_11<R, T1, T2, T3, T4, T5, T6>;
    <$SEL extends "1", $KIND extends "variadic">(): <R = any>(n: number) => uncurryN_variadic_11<R>;
    <$SEL extends "1", $KIND extends "6arity">(): <R = any, T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any>(n: 6) => uncurryN_6arity_11<R, T1, T2, T3, T4, T5, T6>;
    <$SEL extends "1", $KIND extends "5arity">(): <R = any, T1 = any, T2 = any, T3 = any, T4 = any, T5 = any>(n: 5) => uncurryN_5arity_11<R, T1, T2, T3, T4, T5>;
    <$SEL extends "1", $KIND extends "4arity">(): <R = any, T1 = any, T2 = any, T3 = any, T4 = any>(n: 4) => uncurryN_4arity_11<R, T1, T2, T3, T4>;
    <$SEL extends "1", $KIND extends "3arity">(): <R = any, T1 = any, T2 = any, T3 = any>(n: 3) => uncurryN_3arity_11<R, T1, T2, T3>;
    <$SEL extends "1", $KIND extends "2arity">(): <R = any, T1 = any, T2 = any>(n: 2) => uncurryN_2arity_11<R, T1, T2>;
    <$SEL extends "1", $KIND extends "1arity">(): <R = any, T1 = any>(n: 1) => uncurryN_1arity_11<R, T1>;
    <$SEL extends "1", $KIND extends "0arity">(): <R = any>(n: 0) => uncurryN_0arity_11<R>;
    <R = any>(n: number): uncurryN_variadic_11<R>;
};
type uncurryN_0arity_10 = {
    <R = any>(fn: Variadic<any>): uncurryN_0arity_11<R>;
};
type uncurryN_1arity_10 = {
    <R = any, T1 = any>(fn: Variadic<any>): uncurryN_1arity_11<R, T1>;
};
type uncurryN_2arity_10 = {
    <R = any, T1 = any, T2 = any>(fn: Variadic<any>): uncurryN_2arity_11<R, T1, T2>;
};
type uncurryN_3arity_10 = {
    <R = any, T1 = any, T2 = any, T3 = any>(fn: Variadic<any>): uncurryN_3arity_11<R, T1, T2, T3>;
};
type uncurryN_4arity_10 = {
    <R = any, T1 = any, T2 = any, T3 = any, T4 = any>(fn: Variadic<any>): uncurryN_4arity_11<R, T1, T2, T3, T4>;
};
type uncurryN_5arity_10 = {
    <R = any, T1 = any, T2 = any, T3 = any, T4 = any, T5 = any>(fn: Variadic<any>): uncurryN_5arity_11<R, T1, T2, T3, T4, T5>;
};
type uncurryN_6arity_10 = {
    <R = any, T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any>(fn: Variadic<any>): uncurryN_6arity_11<R, T1, T2, T3, T4, T5, T6>;
};
type uncurryN_variadic_10 = {
    <R = any>(fn: Variadic<any>): uncurryN_variadic_11<R>;
};
type uncurryN_0arity_11<R = any> = CurriedFunction0<R>;
type uncurryN_1arity_11<R = any, T1 = any> = CurriedFunction1<T1, R>;
type uncurryN_2arity_11<R = any, T1 = any, T2 = any> = CurriedFunction2<T1, T2, R>;
type uncurryN_3arity_11<R = any, T1 = any, T2 = any, T3 = any> = CurriedFunction3<T1, T2, T3, R>;
type uncurryN_4arity_11<R = any, T1 = any, T2 = any, T3 = any, T4 = any> = CurriedFunction4<T1, T2, T3, T4, R>;
type uncurryN_5arity_11<R = any, T1 = any, T2 = any, T3 = any, T4 = any, T5 = any> = CurriedFunction5<T1, T2, T3, T4, T5, R>;
type uncurryN_6arity_11<R = any, T1 = any, T2 = any, T3 = any, T4 = any, T5 = any, T6 = any> = CurriedFunction6<T1, T2, T3, T4, T5, T6, R>;
type uncurryN_variadic_11<R = any> = Variadic<R>;
export = uncurryN;
