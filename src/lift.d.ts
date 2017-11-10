import { CurriedFunction0, CurriedFunction1, CurriedFunction2, CurriedFunction3, CurriedFunction4, CurriedFunction5, CurriedFunction6 } from "./$curriedFunctions";
import { List, Variadic } from "./$types";
declare const lift: lift_0;
type lift_0 = {
    /**
     * "lifts" a function of arity > 1 so that it may "map over" a list, Function or other
     * object that satisfies the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
     *
     * @func
     * @memberOf R
     * @since v0.7.0
     * @category Function
     * @sig (*... -> *) -> ([*]... -> [*])
     * @param {Function} fn The function to lift into higher context
     * @return {Function} The lifted function.
     * @see R.liftN
     * @example
     *
     *      var madd3 = R.lift((a, b, c) => a + b + c);
     *
     *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
     *
     *      var madd5 = R.lift((a, b, c, d, e) => a + b + c + d + e);
     *
     *      madd5([1,2], [3], [4, 5], [6], [7, 8]); //=> [21, 22, 22, 23, 22, 23, 23, 24]
     */
    <R>(fn: () => R): lift_0arity_1<R>;
    <T1, R>(fn: (v1: T1) => R): lift_1arity_1<T1, R>;
    <T1, T2, R>(fn: (v1: T1, v2: T2) => R): lift_2arity_1<T1, T2, R>;
    <T1, T2, T3, R>(fn: (v1: T1, v2: T2, v3: T3) => R): lift_3arity_1<T1, T2, T3, R>;
    <T1, T2, T3, T4, R>(fn: (v1: T1, v2: T2, v3: T3, v4: T4) => R): lift_4arity_1<T1, T2, T3, T4, R>;
    <T1, T2, T3, T4, T5, R>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => R): lift_5arity_1<T1, T2, T3, T4, T5, R>;
    <T1, T2, T3, T4, T5, T6, R>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R): lift_6arity_1<T1, T2, T3, T4, T5, T6, R>;
    <$SEL extends "1", $KIND extends "variadic">(): <R>(fn: Variadic<R>) => lift_variadic_1<R>;
    <$SEL extends "1", $KIND extends "6arity">(): <T1, T2, T3, T4, T5, T6, R>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R) => lift_6arity_1<T1, T2, T3, T4, T5, T6, R>;
    <$SEL extends "1", $KIND extends "5arity">(): <T1, T2, T3, T4, T5, R>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => R) => lift_5arity_1<T1, T2, T3, T4, T5, R>;
    <$SEL extends "1", $KIND extends "4arity">(): <T1, T2, T3, T4, R>(fn: (v1: T1, v2: T2, v3: T3, v4: T4) => R) => lift_4arity_1<T1, T2, T3, T4, R>;
    <$SEL extends "1", $KIND extends "3arity">(): <T1, T2, T3, R>(fn: (v1: T1, v2: T2, v3: T3) => R) => lift_3arity_1<T1, T2, T3, R>;
    <$SEL extends "1", $KIND extends "2arity">(): <T1, T2, R>(fn: (v1: T1, v2: T2) => R) => lift_2arity_1<T1, T2, R>;
    <$SEL extends "1", $KIND extends "1arity">(): <T1, R>(fn: (v1: T1) => R) => lift_1arity_1<T1, R>;
    <$SEL extends "1", $KIND extends "0arity">(): <R>(fn: () => R) => lift_0arity_1<R>;
    <R>(fn: Variadic<R>): lift_variadic_1<R>;
};
type lift_0arity_1<R> = CurriedFunction0<R[]>;
type lift_1arity_1<T1, R> = CurriedFunction1<List<T1>, R[]>;
type lift_2arity_1<T1, T2, R> = CurriedFunction2<List<T1>, List<T2>, R[]>;
type lift_3arity_1<T1, T2, T3, R> = CurriedFunction3<List<T1>, List<T2>, List<T3>, R[]>;
type lift_4arity_1<T1, T2, T3, T4, R> = CurriedFunction4<List<T1>, List<T2>, List<T3>, List<T4>, R[]>;
type lift_5arity_1<T1, T2, T3, T4, T5, R> = CurriedFunction5<List<T1>, List<T2>, List<T3>, List<T4>, List<T5>, R[]>;
type lift_6arity_1<T1, T2, T3, T4, T5, T6, R> = CurriedFunction6<List<T1>, List<T2>, List<T3>, List<T4>, List<T5>, List<T6>, R[]>;
type lift_variadic_1<R> = Variadic<R[]>;
export = lift;
