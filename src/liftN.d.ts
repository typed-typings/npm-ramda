import { CurriedFunction0, CurriedFunction1, CurriedFunction2, CurriedFunction3, CurriedFunction4, CurriedFunction5, CurriedFunction6 } from "./$curriedFunctions";
import { List, Variadic } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const liftN: liftN_00;
type liftN_00 = {
    /**
     * "lifts" a function to be the specified arity, so that it may "map over" that
     * many lists, Functions or other objects that satisfy the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
     *
     * @func
     * @memberOf R
     * @since v0.7.0
     * @category Function
     * @sig Number -> (*... -> *) -> ([*]... -> [*])
     * @param {Function} fn The function to lift into higher context
     * @return {Function} The lifted function.
     * @see R.lift, R.ap
     * @example
     *
     *      var madd3 = R.liftN(3, (...args) => R.sum(args));
     *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
     */
    (n: 0): liftN_0arity_10;
    (n: 1): liftN_1arity_10;
    (n: 2): liftN_2arity_10;
    (n: 3): liftN_3arity_10;
    (n: 4): liftN_4arity_10;
    (n: 5): liftN_5arity_10;
    (n: 6): liftN_6arity_10;
    (n: number): liftN_variadic_10;
    <R>(_n: PH, fn: (...args: any[]) => R): liftN_0arity_01<R>;
    <T1, R>(_n: PH, fn: (v1: T1, ...args: any[]) => R): liftN_1arity_01<T1, R>;
    <T1, T2, R>(_n: PH, fn: (v1: T1, v2: T2, ...args: any[]) => R): liftN_2arity_01<T1, T2, R>;
    <T1, T2, T3, R>(_n: PH, fn: (v1: T1, v2: T2, v3: T3, ...args: any[]) => R): liftN_3arity_01<T1, T2, T3, R>;
    <T1, T2, T3, T4, R>(_n: PH, fn: (v1: T1, v2: T2, v3: T3, v4: T4, ...args: any[]) => R): liftN_4arity_01<T1, T2, T3, T4, R>;
    <T1, T2, T3, T4, T5, R>(_n: PH, fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, ...args: any[]) => R): liftN_5arity_01<T1, T2, T3, T4, T5, R>;
    <T1, T2, T3, T4, T5, T6, R>(_n: PH, fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, ...args: any[]) => R): liftN_6arity_01<T1, T2, T3, T4, T5, T6, R>;
    <R>(_n: PH, fn: Variadic<R>): liftN_variadic_01<R>;
    <R>(n: 0, fn: (...args: any[]) => R): liftN_0arity_11<R>;
    <T1, R>(n: 1, fn: (v1: T1, ...args: any[]) => R): liftN_1arity_11<T1, R>;
    <T1, T2, R>(n: 2, fn: (v1: T1, v2: T2, ...args: any[]) => R): liftN_2arity_11<T1, T2, R>;
    <T1, T2, T3, R>(n: 3, fn: (v1: T1, v2: T2, v3: T3, ...args: any[]) => R): liftN_3arity_11<T1, T2, T3, R>;
    <T1, T2, T3, T4, R>(n: 4, fn: (v1: T1, v2: T2, v3: T3, v4: T4, ...args: any[]) => R): liftN_4arity_11<T1, T2, T3, T4, R>;
    <T1, T2, T3, T4, T5, R>(n: 5, fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, ...args: any[]) => R): liftN_5arity_11<T1, T2, T3, T4, T5, R>;
    <T1, T2, T3, T4, T5, T6, R>(n: 6, fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, ...args: any[]) => R): liftN_6arity_11<T1, T2, T3, T4, T5, T6, R>;
    <$SEL extends "11", $KIND extends "variadic">(): <R>(n: number, fn: Variadic<R>) => liftN_variadic_11<R>;
    <$SEL extends "11", $KIND extends "6arity">(): <T1, T2, T3, T4, T5, T6, R>(n: 6, fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, ...args: any[]) => R) => liftN_6arity_11<T1, T2, T3, T4, T5, T6, R>;
    <$SEL extends "11", $KIND extends "5arity">(): <T1, T2, T3, T4, T5, R>(n: 5, fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, ...args: any[]) => R) => liftN_5arity_11<T1, T2, T3, T4, T5, R>;
    <$SEL extends "11", $KIND extends "4arity">(): <T1, T2, T3, T4, R>(n: 4, fn: (v1: T1, v2: T2, v3: T3, v4: T4, ...args: any[]) => R) => liftN_4arity_11<T1, T2, T3, T4, R>;
    <$SEL extends "11", $KIND extends "3arity">(): <T1, T2, T3, R>(n: 3, fn: (v1: T1, v2: T2, v3: T3, ...args: any[]) => R) => liftN_3arity_11<T1, T2, T3, R>;
    <$SEL extends "11", $KIND extends "2arity">(): <T1, T2, R>(n: 2, fn: (v1: T1, v2: T2, ...args: any[]) => R) => liftN_2arity_11<T1, T2, R>;
    <$SEL extends "11", $KIND extends "1arity">(): <T1, R>(n: 1, fn: (v1: T1, ...args: any[]) => R) => liftN_1arity_11<T1, R>;
    <$SEL extends "11", $KIND extends "0arity">(): <R>(n: 0, fn: (...args: any[]) => R) => liftN_0arity_11<R>;
    <$SEL extends "01", $KIND extends "variadic">(): <R>(_n: PH, fn: Variadic<R>) => liftN_variadic_01<R>;
    <$SEL extends "01", $KIND extends "6arity">(): <T1, T2, T3, T4, T5, T6, R>(_n: PH, fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, ...args: any[]) => R) => liftN_6arity_01<T1, T2, T3, T4, T5, T6, R>;
    <$SEL extends "01", $KIND extends "5arity">(): <T1, T2, T3, T4, T5, R>(_n: PH, fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, ...args: any[]) => R) => liftN_5arity_01<T1, T2, T3, T4, T5, R>;
    <$SEL extends "01", $KIND extends "4arity">(): <T1, T2, T3, T4, R>(_n: PH, fn: (v1: T1, v2: T2, v3: T3, v4: T4, ...args: any[]) => R) => liftN_4arity_01<T1, T2, T3, T4, R>;
    <$SEL extends "01", $KIND extends "3arity">(): <T1, T2, T3, R>(_n: PH, fn: (v1: T1, v2: T2, v3: T3, ...args: any[]) => R) => liftN_3arity_01<T1, T2, T3, R>;
    <$SEL extends "01", $KIND extends "2arity">(): <T1, T2, R>(_n: PH, fn: (v1: T1, v2: T2, ...args: any[]) => R) => liftN_2arity_01<T1, T2, R>;
    <$SEL extends "01", $KIND extends "1arity">(): <T1, R>(_n: PH, fn: (v1: T1, ...args: any[]) => R) => liftN_1arity_01<T1, R>;
    <$SEL extends "01", $KIND extends "0arity">(): <R>(_n: PH, fn: (...args: any[]) => R) => liftN_0arity_01<R>;
    <$SEL extends "1", $KIND extends "variadic">(): (n: number) => liftN_variadic_10;
    <$SEL extends "1", $KIND extends "6arity">(): (n: 6) => liftN_6arity_10;
    <$SEL extends "1", $KIND extends "5arity">(): (n: 5) => liftN_5arity_10;
    <$SEL extends "1", $KIND extends "4arity">(): (n: 4) => liftN_4arity_10;
    <$SEL extends "1", $KIND extends "3arity">(): (n: 3) => liftN_3arity_10;
    <$SEL extends "1", $KIND extends "2arity">(): (n: 2) => liftN_2arity_10;
    <$SEL extends "1", $KIND extends "1arity">(): (n: 1) => liftN_1arity_10;
    <$SEL extends "1", $KIND extends "0arity">(): (n: 0) => liftN_0arity_10;
    <R>(n: number, fn: Variadic<R>): liftN_variadic_11<R>;
};
type liftN_0arity_10 = {
    <R>(fn: (...args: any[]) => R): liftN_0arity_11<R>;
};
type liftN_1arity_10 = {
    <T1, R>(fn: (v1: T1, ...args: any[]) => R): liftN_1arity_11<T1, R>;
};
type liftN_2arity_10 = {
    <T1, T2, R>(fn: (v1: T1, v2: T2, ...args: any[]) => R): liftN_2arity_11<T1, T2, R>;
};
type liftN_3arity_10 = {
    <T1, T2, T3, R>(fn: (v1: T1, v2: T2, v3: T3, ...args: any[]) => R): liftN_3arity_11<T1, T2, T3, R>;
};
type liftN_4arity_10 = {
    <T1, T2, T3, T4, R>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, ...args: any[]) => R): liftN_4arity_11<T1, T2, T3, T4, R>;
};
type liftN_5arity_10 = {
    <T1, T2, T3, T4, T5, R>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, ...args: any[]) => R): liftN_5arity_11<T1, T2, T3, T4, T5, R>;
};
type liftN_6arity_10 = {
    <T1, T2, T3, T4, T5, T6, R>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, ...args: any[]) => R): liftN_6arity_11<T1, T2, T3, T4, T5, T6, R>;
};
type liftN_variadic_10 = {
    <R>(fn: Variadic<R>): liftN_variadic_11<R>;
};
type liftN_0arity_01<R> = {
    (n: 0): liftN_0arity_11<R>;
};
type liftN_1arity_01<T1, R> = {
    (n: 1): liftN_1arity_11<T1, R>;
};
type liftN_2arity_01<T1, T2, R> = {
    (n: 2): liftN_2arity_11<T1, T2, R>;
};
type liftN_3arity_01<T1, T2, T3, R> = {
    (n: 3): liftN_3arity_11<T1, T2, T3, R>;
};
type liftN_4arity_01<T1, T2, T3, T4, R> = {
    (n: 4): liftN_4arity_11<T1, T2, T3, T4, R>;
};
type liftN_5arity_01<T1, T2, T3, T4, T5, R> = {
    (n: 5): liftN_5arity_11<T1, T2, T3, T4, T5, R>;
};
type liftN_6arity_01<T1, T2, T3, T4, T5, T6, R> = {
    (n: 6): liftN_6arity_11<T1, T2, T3, T4, T5, T6, R>;
};
type liftN_variadic_01<R> = {
    (n: number): liftN_variadic_11<R>;
};
type liftN_0arity_11<R> = CurriedFunction0<R[]>;
type liftN_1arity_11<T1, R> = CurriedFunction1<List<T1>, R[]>;
type liftN_2arity_11<T1, T2, R> = CurriedFunction2<List<T1>, List<T2>, R[]>;
type liftN_3arity_11<T1, T2, T3, R> = CurriedFunction3<List<T1>, List<T2>, List<T3>, R[]>;
type liftN_4arity_11<T1, T2, T3, T4, R> = CurriedFunction4<List<T1>, List<T2>, List<T3>, List<T4>, R[]>;
type liftN_5arity_11<T1, T2, T3, T4, T5, R> = CurriedFunction5<List<T1>, List<T2>, List<T3>, List<T4>, List<T5>, R[]>;
type liftN_6arity_11<T1, T2, T3, T4, T5, T6, R> = CurriedFunction6<List<T1>, List<T2>, List<T3>, List<T4>, List<T5>, List<T6>, R[]>;
type liftN_variadic_11<R> = Variadic<R[]>;
export = liftN;
