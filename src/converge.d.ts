import { CurriedFunction1, CurriedFunction2, CurriedFunction3 } from "./$curriedFunctions";
import { List, Variadic } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const converge: converge_00;
type converge_00 = {
    /**
     * Accepts a converging function and a list of branching functions and returns
     * a new function. When invoked, this new function is applied to some
     * arguments, each branching function is applied to those same arguments. The
     * results of each branching function are passed as arguments to the converging
     * function to produce the return value.
     *
     * @func
     * @memberOf R
     * @since v0.4.2
     * @category Function
     * @sig ((x1, x2, ...) -> z) -> [((a, b, ...) -> x1), ((a, b, ...) -> x2), ...] -> (a -> b -> ... -> z)
     * @param {Function} after A function. `after` will be invoked with the return values of
     *        `fn1` and `fn2` as its arguments.
     * @param {Array} functions A list of functions.
     * @return {Function} A new function.
     * @see R.useWith
     * @example
     *
     *      var average = R.converge(R.divide, [R.sum, R.length])
     *      average([1, 2, 3, 4, 5, 6, 7]) //=> 4
     *
     *      var strangeConcat = R.converge(R.concat, [R.toUpper, R.toLower])
     *      strangeConcat("Yodel") //=> "YODELyodel"
     *
     * @symb R.converge(f, [g, h])(a, b) = f(g(a, b), h(a, b))
     */
    <U1, R>(after: (v1: U1) => R): converge_i1f1_10<U1, R>;
    <U1, U2, R>(after: (v1: U1, v2: U2) => R): converge_i1f2_10<U1, U2, R>;
    <U1, U2, U3, R>(after: (v1: U1, v2: U2, v3: U3) => R): converge_i1f3_10<U1, U2, U3, R>;
    <U1, U2, U3, U4, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4) => R): converge_i1f4_10<U1, U2, U3, U4, R>;
    <U1, U2, U3, U4, U5, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5) => R): converge_i1f5_10<U1, U2, U3, U4, U5, R>;
    <U1, U2, U3, U4, U5, U6, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5, v6: U6) => R): converge_i1f6_10<U1, U2, U3, U4, U5, U6, R>;
    <U1, R>(after: (v1: U1) => R): converge_i2f1_10<U1, R>;
    <U1, U2, R>(after: (v1: U1, v2: U2) => R): converge_i2f2_10<U1, U2, R>;
    <U1, U2, U3, R>(after: (v1: U1, v2: U2, v3: U3) => R): converge_i2f3_10<U1, U2, U3, R>;
    <U1, U2, U3, U4, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4) => R): converge_i2f4_10<U1, U2, U3, U4, R>;
    <U1, U2, U3, U4, U5, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5) => R): converge_i2f5_10<U1, U2, U3, U4, U5, R>;
    <U1, U2, U3, U4, U5, U6, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5, v6: U6) => R): converge_i2f6_10<U1, U2, U3, U4, U5, U6, R>;
    <U1, R>(after: (v1: U1) => R): converge_i3f1_10<U1, R>;
    <U1, U2, R>(after: (v1: U1, v2: U2) => R): converge_i3f2_10<U1, U2, R>;
    <U1, U2, U3, R>(after: (v1: U1, v2: U2, v3: U3) => R): converge_i3f3_10<U1, U2, U3, R>;
    <U1, U2, U3, U4, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4) => R): converge_i3f4_10<U1, U2, U3, U4, R>;
    <U1, U2, U3, U4, U5, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5) => R): converge_i3f5_10<U1, U2, U3, U4, U5, R>;
    <U1, U2, U3, U4, U5, U6, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5, v6: U6) => R): converge_i3f6_10<U1, U2, U3, U4, U5, U6, R>;
    <R>(after: Variadic<R>): converge_variadic_10<R>;
    <T1, U1>(_after: PH, fns: [(v1: T1) => U1]): converge_i1f1_01<T1, U1>;
    <T1, U1, U2>(_after: PH, fns: [(v1: T1) => U1, (v1: T1) => U2]): converge_i1f2_01<T1, U1, U2>;
    <T1, U1, U2, U3>(_after: PH, fns: [(v1: T1) => U1, (v1: T1) => U2, (v1: T1) => U3]): converge_i1f3_01<T1, U1, U2, U3>;
    <T1, U1, U2, U3, U4>(_after: PH, fns: [(v1: T1) => U1, (v1: T1) => U2, (v1: T1) => U3, (v1: T1) => U4]): converge_i1f4_01<T1, U1, U2, U3, U4>;
    <T1, U1, U2, U3, U4, U5>(_after: PH, fns: [(v1: T1) => U1, (v1: T1) => U2, (v1: T1) => U3, (v1: T1) => U4, (v1: T1) => U5]): converge_i1f5_01<T1, U1, U2, U3, U4, U5>;
    <T1, U1, U2, U3, U4, U5, U6>(_after: PH, fns: [(v1: T1) => U1, (v1: T1) => U2, (v1: T1) => U3, (v1: T1) => U4, (v1: T1) => U5, (v1: T1) => U6]): converge_i1f6_01<T1, U1, U2, U3, U4, U5, U6>;
    <T1, T2, U1>(_after: PH, fns: [(v1: T1, v2: T2) => U1]): converge_i2f1_01<T1, T2, U1>;
    <T1, T2, U1, U2>(_after: PH, fns: [(v1: T1, v2: T2) => U1, (v1: T1, v2: T2) => U2]): converge_i2f2_01<T1, T2, U1, U2>;
    <T1, T2, U1, U2, U3>(_after: PH, fns: [(v1: T1, v2: T2) => U1, (v1: T1, v2: T2) => U2, (v1: T1, v2: T2) => U3]): converge_i2f3_01<T1, T2, U1, U2, U3>;
    <T1, T2, U1, U2, U3, U4>(_after: PH, fns: [(v1: T1, v2: T2) => U1, (v1: T1, v2: T2) => U2, (v1: T1, v2: T2) => U3, (v1: T1, v2: T2) => U4]): converge_i2f4_01<T1, T2, U1, U2, U3, U4>;
    <T1, T2, U1, U2, U3, U4, U5>(_after: PH, fns: [(v1: T1, v2: T2) => U1, (v1: T1, v2: T2) => U2, (v1: T1, v2: T2) => U3, (v1: T1, v2: T2) => U4, (v1: T1, v2: T2) => U5]): converge_i2f5_01<T1, T2, U1, U2, U3, U4, U5>;
    <T1, T2, U1, U2, U3, U4, U5, U6>(_after: PH, fns: [(v1: T1, v2: T2) => U1, (v1: T1, v2: T2) => U2, (v1: T1, v2: T2) => U3, (v1: T1, v2: T2) => U4, (v1: T1, v2: T2) => U5, (v1: T1, v2: T2) => U6]): converge_i2f6_01<T1, T2, U1, U2, U3, U4, U5, U6>;
    <T1, T2, T3, U1>(_after: PH, fns: [(v1: T1, v2: T2, v3: T3) => U1]): converge_i3f1_01<T1, T2, T3, U1>;
    <T1, T2, T3, U1, U2>(_after: PH, fns: [(v1: T1, v2: T2, v3: T3) => U1, (v1: T1, v2: T2, v3: T3) => U2]): converge_i3f2_01<T1, T2, T3, U1, U2>;
    <T1, T2, T3, U1, U2, U3>(_after: PH, fns: [(v1: T1, v2: T2, v3: T3) => U1, (v1: T1, v2: T2, v3: T3) => U2, (v1: T1, v2: T2, v3: T3) => U3]): converge_i3f3_01<T1, T2, T3, U1, U2, U3>;
    <T1, T2, T3, U1, U2, U3, U4>(_after: PH, fns: [(v1: T1, v2: T2, v3: T3) => U1, (v1: T1, v2: T2, v3: T3) => U2, (v1: T1, v2: T2, v3: T3) => U3, (v1: T1, v2: T2, v3: T3) => U4]): converge_i3f4_01<T1, T2, T3, U1, U2, U3, U4>;
    <T1, T2, T3, U1, U2, U3, U4, U5>(_after: PH, fns: [(v1: T1, v2: T2, v3: T3) => U1, (v1: T1, v2: T2, v3: T3) => U2, (v1: T1, v2: T2, v3: T3) => U3, (v1: T1, v2: T2, v3: T3) => U4, (v1: T1, v2: T2, v3: T3) => U5]): converge_i3f5_01<T1, T2, T3, U1, U2, U3, U4, U5>;
    <T1, T2, T3, U1, U2, U3, U4, U5, U6>(_after: PH, fns: [(v1: T1, v2: T2, v3: T3) => U1, (v1: T1, v2: T2, v3: T3) => U2, (v1: T1, v2: T2, v3: T3) => U3, (v1: T1, v2: T2, v3: T3) => U4, (v1: T1, v2: T2, v3: T3) => U5, (v1: T1, v2: T2, v3: T3) => U6]): converge_i3f6_01<T1, T2, T3, U1, U2, U3, U4, U5, U6>;
    (_after: PH, fns: List<Variadic<any>>): converge_variadic_01;
    <T1, U1, R>(after: (v1: U1) => R, fns: [(v1: T1) => U1]): converge_i1f1_11<T1, R>;
    <T1, U1, U2, R>(after: (v1: U1, v2: U2) => R, fns: [(v1: T1) => U1, (v1: T1) => U2]): converge_i1f2_11<T1, R>;
    <T1, U1, U2, U3, R>(after: (v1: U1, v2: U2, v3: U3) => R, fns: [(v1: T1) => U1, (v1: T1) => U2, (v1: T1) => U3]): converge_i1f3_11<T1, R>;
    <T1, U1, U2, U3, U4, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4) => R, fns: [(v1: T1) => U1, (v1: T1) => U2, (v1: T1) => U3, (v1: T1) => U4]): converge_i1f4_11<T1, R>;
    <T1, U1, U2, U3, U4, U5, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5) => R, fns: [(v1: T1) => U1, (v1: T1) => U2, (v1: T1) => U3, (v1: T1) => U4, (v1: T1) => U5]): converge_i1f5_11<T1, R>;
    <T1, U1, U2, U3, U4, U5, U6, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5, v6: U6) => R, fns: [(v1: T1) => U1, (v1: T1) => U2, (v1: T1) => U3, (v1: T1) => U4, (v1: T1) => U5, (v1: T1) => U6]): converge_i1f6_11<T1, R>;
    <T1, T2, U1, R>(after: (v1: U1) => R, fns: [(v1: T1, v2: T2) => U1]): converge_i2f1_11<T1, T2, R>;
    <T1, T2, U1, U2, R>(after: (v1: U1, v2: U2) => R, fns: [(v1: T1, v2: T2) => U1, (v1: T1, v2: T2) => U2]): converge_i2f2_11<T1, T2, R>;
    <T1, T2, U1, U2, U3, R>(after: (v1: U1, v2: U2, v3: U3) => R, fns: [(v1: T1, v2: T2) => U1, (v1: T1, v2: T2) => U2, (v1: T1, v2: T2) => U3]): converge_i2f3_11<T1, T2, R>;
    <T1, T2, U1, U2, U3, U4, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4) => R, fns: [(v1: T1, v2: T2) => U1, (v1: T1, v2: T2) => U2, (v1: T1, v2: T2) => U3, (v1: T1, v2: T2) => U4]): converge_i2f4_11<T1, T2, R>;
    <T1, T2, U1, U2, U3, U4, U5, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5) => R, fns: [(v1: T1, v2: T2) => U1, (v1: T1, v2: T2) => U2, (v1: T1, v2: T2) => U3, (v1: T1, v2: T2) => U4, (v1: T1, v2: T2) => U5]): converge_i2f5_11<T1, T2, R>;
    <T1, T2, U1, U2, U3, U4, U5, U6, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5, v6: U6) => R, fns: [(v1: T1, v2: T2) => U1, (v1: T1, v2: T2) => U2, (v1: T1, v2: T2) => U3, (v1: T1, v2: T2) => U4, (v1: T1, v2: T2) => U5, (v1: T1, v2: T2) => U6]): converge_i2f6_11<T1, T2, R>;
    <T1, T2, T3, U1, R>(after: (v1: U1) => R, fns: [(v1: T1, v2: T2, v3: T3) => U1]): converge_i3f1_11<T1, T2, T3, R>;
    <T1, T2, T3, U1, U2, R>(after: (v1: U1, v2: U2) => R, fns: [(v1: T1, v2: T2, v3: T3) => U1, (v1: T1, v2: T2, v3: T3) => U2]): converge_i3f2_11<T1, T2, T3, R>;
    <T1, T2, T3, U1, U2, U3, R>(after: (v1: U1, v2: U2, v3: U3) => R, fns: [(v1: T1, v2: T2, v3: T3) => U1, (v1: T1, v2: T2, v3: T3) => U2, (v1: T1, v2: T2, v3: T3) => U3]): converge_i3f3_11<T1, T2, T3, R>;
    <T1, T2, T3, U1, U2, U3, U4, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4) => R, fns: [(v1: T1, v2: T2, v3: T3) => U1, (v1: T1, v2: T2, v3: T3) => U2, (v1: T1, v2: T2, v3: T3) => U3, (v1: T1, v2: T2, v3: T3) => U4]): converge_i3f4_11<T1, T2, T3, R>;
    <T1, T2, T3, U1, U2, U3, U4, U5, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5) => R, fns: [(v1: T1, v2: T2, v3: T3) => U1, (v1: T1, v2: T2, v3: T3) => U2, (v1: T1, v2: T2, v3: T3) => U3, (v1: T1, v2: T2, v3: T3) => U4, (v1: T1, v2: T2, v3: T3) => U5]): converge_i3f5_11<T1, T2, T3, R>;
    <T1, T2, T3, U1, U2, U3, U4, U5, U6, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5, v6: U6) => R, fns: [(v1: T1, v2: T2, v3: T3) => U1, (v1: T1, v2: T2, v3: T3) => U2, (v1: T1, v2: T2, v3: T3) => U3, (v1: T1, v2: T2, v3: T3) => U4, (v1: T1, v2: T2, v3: T3) => U5, (v1: T1, v2: T2, v3: T3) => U6]): converge_i3f6_11<T1, T2, T3, R>;
    <$SEL extends "11", $KIND extends "variadic">(): <R>(after: Variadic<R>, fns: List<Variadic<any>>) => converge_variadic_11<R>;
    <$SEL extends "11", $KIND extends "i3f6">(): <T1, T2, T3, U1, U2, U3, U4, U5, U6, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5, v6: U6) => R, fns: [(v1: T1, v2: T2, v3: T3) => U1, (v1: T1, v2: T2, v3: T3) => U2, (v1: T1, v2: T2, v3: T3) => U3, (v1: T1, v2: T2, v3: T3) => U4, (v1: T1, v2: T2, v3: T3) => U5, (v1: T1, v2: T2, v3: T3) => U6]) => converge_i3f6_11<T1, T2, T3, R>;
    <$SEL extends "11", $KIND extends "i3f5">(): <T1, T2, T3, U1, U2, U3, U4, U5, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5) => R, fns: [(v1: T1, v2: T2, v3: T3) => U1, (v1: T1, v2: T2, v3: T3) => U2, (v1: T1, v2: T2, v3: T3) => U3, (v1: T1, v2: T2, v3: T3) => U4, (v1: T1, v2: T2, v3: T3) => U5]) => converge_i3f5_11<T1, T2, T3, R>;
    <$SEL extends "11", $KIND extends "i3f4">(): <T1, T2, T3, U1, U2, U3, U4, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4) => R, fns: [(v1: T1, v2: T2, v3: T3) => U1, (v1: T1, v2: T2, v3: T3) => U2, (v1: T1, v2: T2, v3: T3) => U3, (v1: T1, v2: T2, v3: T3) => U4]) => converge_i3f4_11<T1, T2, T3, R>;
    <$SEL extends "11", $KIND extends "i3f3">(): <T1, T2, T3, U1, U2, U3, R>(after: (v1: U1, v2: U2, v3: U3) => R, fns: [(v1: T1, v2: T2, v3: T3) => U1, (v1: T1, v2: T2, v3: T3) => U2, (v1: T1, v2: T2, v3: T3) => U3]) => converge_i3f3_11<T1, T2, T3, R>;
    <$SEL extends "11", $KIND extends "i3f2">(): <T1, T2, T3, U1, U2, R>(after: (v1: U1, v2: U2) => R, fns: [(v1: T1, v2: T2, v3: T3) => U1, (v1: T1, v2: T2, v3: T3) => U2]) => converge_i3f2_11<T1, T2, T3, R>;
    <$SEL extends "11", $KIND extends "i3f1">(): <T1, T2, T3, U1, R>(after: (v1: U1) => R, fns: [(v1: T1, v2: T2, v3: T3) => U1]) => converge_i3f1_11<T1, T2, T3, R>;
    <$SEL extends "11", $KIND extends "i2f6">(): <T1, T2, U1, U2, U3, U4, U5, U6, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5, v6: U6) => R, fns: [(v1: T1, v2: T2) => U1, (v1: T1, v2: T2) => U2, (v1: T1, v2: T2) => U3, (v1: T1, v2: T2) => U4, (v1: T1, v2: T2) => U5, (v1: T1, v2: T2) => U6]) => converge_i2f6_11<T1, T2, R>;
    <$SEL extends "11", $KIND extends "i2f5">(): <T1, T2, U1, U2, U3, U4, U5, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5) => R, fns: [(v1: T1, v2: T2) => U1, (v1: T1, v2: T2) => U2, (v1: T1, v2: T2) => U3, (v1: T1, v2: T2) => U4, (v1: T1, v2: T2) => U5]) => converge_i2f5_11<T1, T2, R>;
    <$SEL extends "11", $KIND extends "i2f4">(): <T1, T2, U1, U2, U3, U4, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4) => R, fns: [(v1: T1, v2: T2) => U1, (v1: T1, v2: T2) => U2, (v1: T1, v2: T2) => U3, (v1: T1, v2: T2) => U4]) => converge_i2f4_11<T1, T2, R>;
    <$SEL extends "11", $KIND extends "i2f3">(): <T1, T2, U1, U2, U3, R>(after: (v1: U1, v2: U2, v3: U3) => R, fns: [(v1: T1, v2: T2) => U1, (v1: T1, v2: T2) => U2, (v1: T1, v2: T2) => U3]) => converge_i2f3_11<T1, T2, R>;
    <$SEL extends "11", $KIND extends "i2f2">(): <T1, T2, U1, U2, R>(after: (v1: U1, v2: U2) => R, fns: [(v1: T1, v2: T2) => U1, (v1: T1, v2: T2) => U2]) => converge_i2f2_11<T1, T2, R>;
    <$SEL extends "11", $KIND extends "i2f1">(): <T1, T2, U1, R>(after: (v1: U1) => R, fns: [(v1: T1, v2: T2) => U1]) => converge_i2f1_11<T1, T2, R>;
    <$SEL extends "11", $KIND extends "i1f6">(): <T1, U1, U2, U3, U4, U5, U6, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5, v6: U6) => R, fns: [(v1: T1) => U1, (v1: T1) => U2, (v1: T1) => U3, (v1: T1) => U4, (v1: T1) => U5, (v1: T1) => U6]) => converge_i1f6_11<T1, R>;
    <$SEL extends "11", $KIND extends "i1f5">(): <T1, U1, U2, U3, U4, U5, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5) => R, fns: [(v1: T1) => U1, (v1: T1) => U2, (v1: T1) => U3, (v1: T1) => U4, (v1: T1) => U5]) => converge_i1f5_11<T1, R>;
    <$SEL extends "11", $KIND extends "i1f4">(): <T1, U1, U2, U3, U4, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4) => R, fns: [(v1: T1) => U1, (v1: T1) => U2, (v1: T1) => U3, (v1: T1) => U4]) => converge_i1f4_11<T1, R>;
    <$SEL extends "11", $KIND extends "i1f3">(): <T1, U1, U2, U3, R>(after: (v1: U1, v2: U2, v3: U3) => R, fns: [(v1: T1) => U1, (v1: T1) => U2, (v1: T1) => U3]) => converge_i1f3_11<T1, R>;
    <$SEL extends "11", $KIND extends "i1f2">(): <T1, U1, U2, R>(after: (v1: U1, v2: U2) => R, fns: [(v1: T1) => U1, (v1: T1) => U2]) => converge_i1f2_11<T1, R>;
    <$SEL extends "11", $KIND extends "i1f1">(): <T1, U1, R>(after: (v1: U1) => R, fns: [(v1: T1) => U1]) => converge_i1f1_11<T1, R>;
    <$SEL extends "01", $KIND extends "variadic">(): (_after: PH, fns: List<Variadic<any>>) => converge_variadic_01;
    <$SEL extends "01", $KIND extends "i3f6">(): <T1, T2, T3, U1, U2, U3, U4, U5, U6>(_after: PH, fns: [(v1: T1, v2: T2, v3: T3) => U1, (v1: T1, v2: T2, v3: T3) => U2, (v1: T1, v2: T2, v3: T3) => U3, (v1: T1, v2: T2, v3: T3) => U4, (v1: T1, v2: T2, v3: T3) => U5, (v1: T1, v2: T2, v3: T3) => U6]) => converge_i3f6_01<T1, T2, T3, U1, U2, U3, U4, U5, U6>;
    <$SEL extends "01", $KIND extends "i3f5">(): <T1, T2, T3, U1, U2, U3, U4, U5>(_after: PH, fns: [(v1: T1, v2: T2, v3: T3) => U1, (v1: T1, v2: T2, v3: T3) => U2, (v1: T1, v2: T2, v3: T3) => U3, (v1: T1, v2: T2, v3: T3) => U4, (v1: T1, v2: T2, v3: T3) => U5]) => converge_i3f5_01<T1, T2, T3, U1, U2, U3, U4, U5>;
    <$SEL extends "01", $KIND extends "i3f4">(): <T1, T2, T3, U1, U2, U3, U4>(_after: PH, fns: [(v1: T1, v2: T2, v3: T3) => U1, (v1: T1, v2: T2, v3: T3) => U2, (v1: T1, v2: T2, v3: T3) => U3, (v1: T1, v2: T2, v3: T3) => U4]) => converge_i3f4_01<T1, T2, T3, U1, U2, U3, U4>;
    <$SEL extends "01", $KIND extends "i3f3">(): <T1, T2, T3, U1, U2, U3>(_after: PH, fns: [(v1: T1, v2: T2, v3: T3) => U1, (v1: T1, v2: T2, v3: T3) => U2, (v1: T1, v2: T2, v3: T3) => U3]) => converge_i3f3_01<T1, T2, T3, U1, U2, U3>;
    <$SEL extends "01", $KIND extends "i3f2">(): <T1, T2, T3, U1, U2>(_after: PH, fns: [(v1: T1, v2: T2, v3: T3) => U1, (v1: T1, v2: T2, v3: T3) => U2]) => converge_i3f2_01<T1, T2, T3, U1, U2>;
    <$SEL extends "01", $KIND extends "i3f1">(): <T1, T2, T3, U1>(_after: PH, fns: [(v1: T1, v2: T2, v3: T3) => U1]) => converge_i3f1_01<T1, T2, T3, U1>;
    <$SEL extends "01", $KIND extends "i2f6">(): <T1, T2, U1, U2, U3, U4, U5, U6>(_after: PH, fns: [(v1: T1, v2: T2) => U1, (v1: T1, v2: T2) => U2, (v1: T1, v2: T2) => U3, (v1: T1, v2: T2) => U4, (v1: T1, v2: T2) => U5, (v1: T1, v2: T2) => U6]) => converge_i2f6_01<T1, T2, U1, U2, U3, U4, U5, U6>;
    <$SEL extends "01", $KIND extends "i2f5">(): <T1, T2, U1, U2, U3, U4, U5>(_after: PH, fns: [(v1: T1, v2: T2) => U1, (v1: T1, v2: T2) => U2, (v1: T1, v2: T2) => U3, (v1: T1, v2: T2) => U4, (v1: T1, v2: T2) => U5]) => converge_i2f5_01<T1, T2, U1, U2, U3, U4, U5>;
    <$SEL extends "01", $KIND extends "i2f4">(): <T1, T2, U1, U2, U3, U4>(_after: PH, fns: [(v1: T1, v2: T2) => U1, (v1: T1, v2: T2) => U2, (v1: T1, v2: T2) => U3, (v1: T1, v2: T2) => U4]) => converge_i2f4_01<T1, T2, U1, U2, U3, U4>;
    <$SEL extends "01", $KIND extends "i2f3">(): <T1, T2, U1, U2, U3>(_after: PH, fns: [(v1: T1, v2: T2) => U1, (v1: T1, v2: T2) => U2, (v1: T1, v2: T2) => U3]) => converge_i2f3_01<T1, T2, U1, U2, U3>;
    <$SEL extends "01", $KIND extends "i2f2">(): <T1, T2, U1, U2>(_after: PH, fns: [(v1: T1, v2: T2) => U1, (v1: T1, v2: T2) => U2]) => converge_i2f2_01<T1, T2, U1, U2>;
    <$SEL extends "01", $KIND extends "i2f1">(): <T1, T2, U1>(_after: PH, fns: [(v1: T1, v2: T2) => U1]) => converge_i2f1_01<T1, T2, U1>;
    <$SEL extends "01", $KIND extends "i1f6">(): <T1, U1, U2, U3, U4, U5, U6>(_after: PH, fns: [(v1: T1) => U1, (v1: T1) => U2, (v1: T1) => U3, (v1: T1) => U4, (v1: T1) => U5, (v1: T1) => U6]) => converge_i1f6_01<T1, U1, U2, U3, U4, U5, U6>;
    <$SEL extends "01", $KIND extends "i1f5">(): <T1, U1, U2, U3, U4, U5>(_after: PH, fns: [(v1: T1) => U1, (v1: T1) => U2, (v1: T1) => U3, (v1: T1) => U4, (v1: T1) => U5]) => converge_i1f5_01<T1, U1, U2, U3, U4, U5>;
    <$SEL extends "01", $KIND extends "i1f4">(): <T1, U1, U2, U3, U4>(_after: PH, fns: [(v1: T1) => U1, (v1: T1) => U2, (v1: T1) => U3, (v1: T1) => U4]) => converge_i1f4_01<T1, U1, U2, U3, U4>;
    <$SEL extends "01", $KIND extends "i1f3">(): <T1, U1, U2, U3>(_after: PH, fns: [(v1: T1) => U1, (v1: T1) => U2, (v1: T1) => U3]) => converge_i1f3_01<T1, U1, U2, U3>;
    <$SEL extends "01", $KIND extends "i1f2">(): <T1, U1, U2>(_after: PH, fns: [(v1: T1) => U1, (v1: T1) => U2]) => converge_i1f2_01<T1, U1, U2>;
    <$SEL extends "01", $KIND extends "i1f1">(): <T1, U1>(_after: PH, fns: [(v1: T1) => U1]) => converge_i1f1_01<T1, U1>;
    <$SEL extends "1", $KIND extends "variadic">(): <R>(after: Variadic<R>) => converge_variadic_10<R>;
    <$SEL extends "1", $KIND extends "i3f6">(): <U1, U2, U3, U4, U5, U6, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5, v6: U6) => R) => converge_i3f6_10<U1, U2, U3, U4, U5, U6, R>;
    <$SEL extends "1", $KIND extends "i3f5">(): <U1, U2, U3, U4, U5, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5) => R) => converge_i3f5_10<U1, U2, U3, U4, U5, R>;
    <$SEL extends "1", $KIND extends "i3f4">(): <U1, U2, U3, U4, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4) => R) => converge_i3f4_10<U1, U2, U3, U4, R>;
    <$SEL extends "1", $KIND extends "i3f3">(): <U1, U2, U3, R>(after: (v1: U1, v2: U2, v3: U3) => R) => converge_i3f3_10<U1, U2, U3, R>;
    <$SEL extends "1", $KIND extends "i3f2">(): <U1, U2, R>(after: (v1: U1, v2: U2) => R) => converge_i3f2_10<U1, U2, R>;
    <$SEL extends "1", $KIND extends "i3f1">(): <U1, R>(after: (v1: U1) => R) => converge_i3f1_10<U1, R>;
    <$SEL extends "1", $KIND extends "i2f6">(): <U1, U2, U3, U4, U5, U6, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5, v6: U6) => R) => converge_i2f6_10<U1, U2, U3, U4, U5, U6, R>;
    <$SEL extends "1", $KIND extends "i2f5">(): <U1, U2, U3, U4, U5, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5) => R) => converge_i2f5_10<U1, U2, U3, U4, U5, R>;
    <$SEL extends "1", $KIND extends "i2f4">(): <U1, U2, U3, U4, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4) => R) => converge_i2f4_10<U1, U2, U3, U4, R>;
    <$SEL extends "1", $KIND extends "i2f3">(): <U1, U2, U3, R>(after: (v1: U1, v2: U2, v3: U3) => R) => converge_i2f3_10<U1, U2, U3, R>;
    <$SEL extends "1", $KIND extends "i2f2">(): <U1, U2, R>(after: (v1: U1, v2: U2) => R) => converge_i2f2_10<U1, U2, R>;
    <$SEL extends "1", $KIND extends "i2f1">(): <U1, R>(after: (v1: U1) => R) => converge_i2f1_10<U1, R>;
    <$SEL extends "1", $KIND extends "i1f6">(): <U1, U2, U3, U4, U5, U6, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5, v6: U6) => R) => converge_i1f6_10<U1, U2, U3, U4, U5, U6, R>;
    <$SEL extends "1", $KIND extends "i1f5">(): <U1, U2, U3, U4, U5, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5) => R) => converge_i1f5_10<U1, U2, U3, U4, U5, R>;
    <$SEL extends "1", $KIND extends "i1f4">(): <U1, U2, U3, U4, R>(after: (v1: U1, v2: U2, v3: U3, v4: U4) => R) => converge_i1f4_10<U1, U2, U3, U4, R>;
    <$SEL extends "1", $KIND extends "i1f3">(): <U1, U2, U3, R>(after: (v1: U1, v2: U2, v3: U3) => R) => converge_i1f3_10<U1, U2, U3, R>;
    <$SEL extends "1", $KIND extends "i1f2">(): <U1, U2, R>(after: (v1: U1, v2: U2) => R) => converge_i1f2_10<U1, U2, R>;
    <$SEL extends "1", $KIND extends "i1f1">(): <U1, R>(after: (v1: U1) => R) => converge_i1f1_10<U1, R>;
    <R>(after: Variadic<R>, fns: List<Variadic<any>>): converge_variadic_11<R>;
};
type converge_i1f1_10<U1, R> = {
    <T1>(fns: [(v1: T1) => U1]): converge_i1f1_11<T1, R>;
};
type converge_i1f2_10<U1, U2, R> = {
    <T1>(fns: [(v1: T1) => U1, (v1: T1) => U2]): converge_i1f2_11<T1, R>;
};
type converge_i1f3_10<U1, U2, U3, R> = {
    <T1>(fns: [(v1: T1) => U1, (v1: T1) => U2, (v1: T1) => U3]): converge_i1f3_11<T1, R>;
};
type converge_i1f4_10<U1, U2, U3, U4, R> = {
    <T1>(fns: [(v1: T1) => U1, (v1: T1) => U2, (v1: T1) => U3, (v1: T1) => U4]): converge_i1f4_11<T1, R>;
};
type converge_i1f5_10<U1, U2, U3, U4, U5, R> = {
    <T1>(fns: [(v1: T1) => U1, (v1: T1) => U2, (v1: T1) => U3, (v1: T1) => U4, (v1: T1) => U5]): converge_i1f5_11<T1, R>;
};
type converge_i1f6_10<U1, U2, U3, U4, U5, U6, R> = {
    <T1>(fns: [(v1: T1) => U1, (v1: T1) => U2, (v1: T1) => U3, (v1: T1) => U4, (v1: T1) => U5, (v1: T1) => U6]): converge_i1f6_11<T1, R>;
};
type converge_i2f1_10<U1, R> = {
    <T1, T2>(fns: [(v1: T1, v2: T2) => U1]): converge_i2f1_11<T1, T2, R>;
};
type converge_i2f2_10<U1, U2, R> = {
    <T1, T2>(fns: [(v1: T1, v2: T2) => U1, (v1: T1, v2: T2) => U2]): converge_i2f2_11<T1, T2, R>;
};
type converge_i2f3_10<U1, U2, U3, R> = {
    <T1, T2>(fns: [(v1: T1, v2: T2) => U1, (v1: T1, v2: T2) => U2, (v1: T1, v2: T2) => U3]): converge_i2f3_11<T1, T2, R>;
};
type converge_i2f4_10<U1, U2, U3, U4, R> = {
    <T1, T2>(fns: [(v1: T1, v2: T2) => U1, (v1: T1, v2: T2) => U2, (v1: T1, v2: T2) => U3, (v1: T1, v2: T2) => U4]): converge_i2f4_11<T1, T2, R>;
};
type converge_i2f5_10<U1, U2, U3, U4, U5, R> = {
    <T1, T2>(fns: [(v1: T1, v2: T2) => U1, (v1: T1, v2: T2) => U2, (v1: T1, v2: T2) => U3, (v1: T1, v2: T2) => U4, (v1: T1, v2: T2) => U5]): converge_i2f5_11<T1, T2, R>;
};
type converge_i2f6_10<U1, U2, U3, U4, U5, U6, R> = {
    <T1, T2>(fns: [(v1: T1, v2: T2) => U1, (v1: T1, v2: T2) => U2, (v1: T1, v2: T2) => U3, (v1: T1, v2: T2) => U4, (v1: T1, v2: T2) => U5, (v1: T1, v2: T2) => U6]): converge_i2f6_11<T1, T2, R>;
};
type converge_i3f1_10<U1, R> = {
    <T1, T2, T3>(fns: [(v1: T1, v2: T2, v3: T3) => U1]): converge_i3f1_11<T1, T2, T3, R>;
};
type converge_i3f2_10<U1, U2, R> = {
    <T1, T2, T3>(fns: [(v1: T1, v2: T2, v3: T3) => U1, (v1: T1, v2: T2, v3: T3) => U2]): converge_i3f2_11<T1, T2, T3, R>;
};
type converge_i3f3_10<U1, U2, U3, R> = {
    <T1, T2, T3>(fns: [(v1: T1, v2: T2, v3: T3) => U1, (v1: T1, v2: T2, v3: T3) => U2, (v1: T1, v2: T2, v3: T3) => U3]): converge_i3f3_11<T1, T2, T3, R>;
};
type converge_i3f4_10<U1, U2, U3, U4, R> = {
    <T1, T2, T3>(fns: [(v1: T1, v2: T2, v3: T3) => U1, (v1: T1, v2: T2, v3: T3) => U2, (v1: T1, v2: T2, v3: T3) => U3, (v1: T1, v2: T2, v3: T3) => U4]): converge_i3f4_11<T1, T2, T3, R>;
};
type converge_i3f5_10<U1, U2, U3, U4, U5, R> = {
    <T1, T2, T3>(fns: [(v1: T1, v2: T2, v3: T3) => U1, (v1: T1, v2: T2, v3: T3) => U2, (v1: T1, v2: T2, v3: T3) => U3, (v1: T1, v2: T2, v3: T3) => U4, (v1: T1, v2: T2, v3: T3) => U5]): converge_i3f5_11<T1, T2, T3, R>;
};
type converge_i3f6_10<U1, U2, U3, U4, U5, U6, R> = {
    <T1, T2, T3>(fns: [(v1: T1, v2: T2, v3: T3) => U1, (v1: T1, v2: T2, v3: T3) => U2, (v1: T1, v2: T2, v3: T3) => U3, (v1: T1, v2: T2, v3: T3) => U4, (v1: T1, v2: T2, v3: T3) => U5, (v1: T1, v2: T2, v3: T3) => U6]): converge_i3f6_11<T1, T2, T3, R>;
};
type converge_variadic_10<R> = {
    (fns: List<Variadic<any>>): converge_variadic_11<R>;
};
type converge_i1f1_01<T1, U1> = {
    <R>(after: (v1: U1) => R): converge_i1f1_11<T1, R>;
};
type converge_i1f2_01<T1, U1, U2> = {
    <R>(after: (v1: U1, v2: U2) => R): converge_i1f2_11<T1, R>;
};
type converge_i1f3_01<T1, U1, U2, U3> = {
    <R>(after: (v1: U1, v2: U2, v3: U3) => R): converge_i1f3_11<T1, R>;
};
type converge_i1f4_01<T1, U1, U2, U3, U4> = {
    <R>(after: (v1: U1, v2: U2, v3: U3, v4: U4) => R): converge_i1f4_11<T1, R>;
};
type converge_i1f5_01<T1, U1, U2, U3, U4, U5> = {
    <R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5) => R): converge_i1f5_11<T1, R>;
};
type converge_i1f6_01<T1, U1, U2, U3, U4, U5, U6> = {
    <R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5, v6: U6) => R): converge_i1f6_11<T1, R>;
};
type converge_i2f1_01<T1, T2, U1> = {
    <R>(after: (v1: U1) => R): converge_i2f1_11<T1, T2, R>;
};
type converge_i2f2_01<T1, T2, U1, U2> = {
    <R>(after: (v1: U1, v2: U2) => R): converge_i2f2_11<T1, T2, R>;
};
type converge_i2f3_01<T1, T2, U1, U2, U3> = {
    <R>(after: (v1: U1, v2: U2, v3: U3) => R): converge_i2f3_11<T1, T2, R>;
};
type converge_i2f4_01<T1, T2, U1, U2, U3, U4> = {
    <R>(after: (v1: U1, v2: U2, v3: U3, v4: U4) => R): converge_i2f4_11<T1, T2, R>;
};
type converge_i2f5_01<T1, T2, U1, U2, U3, U4, U5> = {
    <R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5) => R): converge_i2f5_11<T1, T2, R>;
};
type converge_i2f6_01<T1, T2, U1, U2, U3, U4, U5, U6> = {
    <R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5, v6: U6) => R): converge_i2f6_11<T1, T2, R>;
};
type converge_i3f1_01<T1, T2, T3, U1> = {
    <R>(after: (v1: U1) => R): converge_i3f1_11<T1, T2, T3, R>;
};
type converge_i3f2_01<T1, T2, T3, U1, U2> = {
    <R>(after: (v1: U1, v2: U2) => R): converge_i3f2_11<T1, T2, T3, R>;
};
type converge_i3f3_01<T1, T2, T3, U1, U2, U3> = {
    <R>(after: (v1: U1, v2: U2, v3: U3) => R): converge_i3f3_11<T1, T2, T3, R>;
};
type converge_i3f4_01<T1, T2, T3, U1, U2, U3, U4> = {
    <R>(after: (v1: U1, v2: U2, v3: U3, v4: U4) => R): converge_i3f4_11<T1, T2, T3, R>;
};
type converge_i3f5_01<T1, T2, T3, U1, U2, U3, U4, U5> = {
    <R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5) => R): converge_i3f5_11<T1, T2, T3, R>;
};
type converge_i3f6_01<T1, T2, T3, U1, U2, U3, U4, U5, U6> = {
    <R>(after: (v1: U1, v2: U2, v3: U3, v4: U4, v5: U5, v6: U6) => R): converge_i3f6_11<T1, T2, T3, R>;
};
type converge_variadic_01 = {
    <R>(after: Variadic<R>): converge_variadic_11<R>;
};
type converge_i1f1_11<T1, R> = CurriedFunction1<T1, R>;
type converge_i1f2_11<T1, R> = CurriedFunction1<T1, R>;
type converge_i1f3_11<T1, R> = CurriedFunction1<T1, R>;
type converge_i1f4_11<T1, R> = CurriedFunction1<T1, R>;
type converge_i1f5_11<T1, R> = CurriedFunction1<T1, R>;
type converge_i1f6_11<T1, R> = CurriedFunction1<T1, R>;
type converge_i2f1_11<T1, T2, R> = CurriedFunction2<T1, T2, R>;
type converge_i2f2_11<T1, T2, R> = CurriedFunction2<T1, T2, R>;
type converge_i2f3_11<T1, T2, R> = CurriedFunction2<T1, T2, R>;
type converge_i2f4_11<T1, T2, R> = CurriedFunction2<T1, T2, R>;
type converge_i2f5_11<T1, T2, R> = CurriedFunction2<T1, T2, R>;
type converge_i2f6_11<T1, T2, R> = CurriedFunction2<T1, T2, R>;
type converge_i3f1_11<T1, T2, T3, R> = CurriedFunction3<T1, T2, T3, R>;
type converge_i3f2_11<T1, T2, T3, R> = CurriedFunction3<T1, T2, T3, R>;
type converge_i3f3_11<T1, T2, T3, R> = CurriedFunction3<T1, T2, T3, R>;
type converge_i3f4_11<T1, T2, T3, R> = CurriedFunction3<T1, T2, T3, R>;
type converge_i3f5_11<T1, T2, T3, R> = CurriedFunction3<T1, T2, T3, R>;
type converge_i3f6_11<T1, T2, T3, R> = CurriedFunction3<T1, T2, T3, R>;
type converge_variadic_11<R> = Variadic<R>;
export = converge;
