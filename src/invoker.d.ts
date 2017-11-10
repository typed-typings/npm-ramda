import { CurriedFunction1, CurriedFunction2, CurriedFunction3, CurriedFunction4, CurriedFunction5, CurriedFunction6 } from "./$curriedFunctions";
import { Property, Variadic } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const invoker: invoker_00;
type invoker_00 = {
    /**
     * Turns a named method with a specified arity into a function that can be
     * called directly supplied with arguments and a target object.
     *
     * The returned function is curried and accepts `arity + 1` parameters where
     * the final parameter is the target object.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category Function
     * @sig Number -> String -> (a -> b -> ... -> n -> Object -> *)
     * @param {Number} arity Number of arguments the returned function should take
     *        before the target object.
     * @param {String} method Name of the method to call.
     * @return {Function} A new curried function.
     * @see R.construct
     * @example
     *
     *      var sliceFrom = R.invoker(1, 'slice');
     *      sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
     *      var sliceFrom6 = R.invoker(2, 'slice')(6);
     *      sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
     * @symb R.invoker(0, 'method')(o) = o['method']()
     * @symb R.invoker(1, 'method')(a, o) = o['method'](a)
     * @symb R.invoker(2, 'method')(a, b, o) = o['method'](a, b)
     */
    (arity: 0): invoker_0arity_10;
    (arity: 1): invoker_1arity_10;
    (arity: 2): invoker_2arity_10;
    (arity: 3): invoker_3arity_10;
    (arity: 4): invoker_4arity_10;
    (arity: 5): invoker_5arity_10;
    (arity: number): invoker_variadic_10;
    <N extends string>(_arity: PH, method: N): invoker_01<N>;
    <N extends string, V extends Record<N, Function>, R>(arity: 0, method: N): invoker_0arity_11<N, V, R>;
    <N extends string, V extends Record<N, Function>, T1, R>(arity: 1, method: N): invoker_1arity_11<N, V, T1, R>;
    <N extends string, V extends Record<N, Function>, T1, T2, R>(arity: 2, method: N): invoker_2arity_11<N, V, T1, T2, R>;
    <N extends string, V extends Record<N, Function>, T1, T2, T3, R>(arity: 3, method: N): invoker_3arity_11<N, V, T1, T2, T3, R>;
    <N extends string, V extends Record<N, Function>, T1, T2, T3, T4, R>(arity: 4, method: N): invoker_4arity_11<N, V, T1, T2, T3, T4, R>;
    <N extends string, V extends Record<N, Function>, T1, T2, T3, T4, T5, R>(arity: 5, method: N): invoker_5arity_11<N, V, T1, T2, T3, T4, T5, R>;
    <$SEL extends "11", $KIND extends "variadic">(): <N extends string, R>(arity: number, method: N) => invoker_variadic_11<R>;
    <$SEL extends "11", $KIND extends "5arity">(): <N extends string, V extends Record<N, Function>, T1, T2, T3, T4, T5, R>(arity: 5, method: N) => invoker_5arity_11<N, V, T1, T2, T3, T4, T5, R>;
    <$SEL extends "11", $KIND extends "4arity">(): <N extends string, V extends Record<N, Function>, T1, T2, T3, T4, R>(arity: 4, method: N) => invoker_4arity_11<N, V, T1, T2, T3, T4, R>;
    <$SEL extends "11", $KIND extends "3arity">(): <N extends string, V extends Record<N, Function>, T1, T2, T3, R>(arity: 3, method: N) => invoker_3arity_11<N, V, T1, T2, T3, R>;
    <$SEL extends "11", $KIND extends "2arity">(): <N extends string, V extends Record<N, Function>, T1, T2, R>(arity: 2, method: N) => invoker_2arity_11<N, V, T1, T2, R>;
    <$SEL extends "11", $KIND extends "1arity">(): <N extends string, V extends Record<N, Function>, T1, R>(arity: 1, method: N) => invoker_1arity_11<N, V, T1, R>;
    <$SEL extends "11", $KIND extends "0arity">(): <N extends string, V extends Record<N, Function>, R>(arity: 0, method: N) => invoker_0arity_11<N, V, R>;
    <$SEL extends "01">(): <N extends string>(_arity: PH, method: N) => invoker_01<N>;
    <$SEL extends "1", $KIND extends "variadic">(): (arity: number) => invoker_variadic_10;
    <$SEL extends "1", $KIND extends "5arity">(): (arity: 5) => invoker_5arity_10;
    <$SEL extends "1", $KIND extends "4arity">(): (arity: 4) => invoker_4arity_10;
    <$SEL extends "1", $KIND extends "3arity">(): (arity: 3) => invoker_3arity_10;
    <$SEL extends "1", $KIND extends "2arity">(): (arity: 2) => invoker_2arity_10;
    <$SEL extends "1", $KIND extends "1arity">(): (arity: 1) => invoker_1arity_10;
    <$SEL extends "1", $KIND extends "0arity">(): (arity: 0) => invoker_0arity_10;
    <N extends string, R>(arity: number, method: N): invoker_variadic_11<R>;
};
type invoker_01<N extends string> = {
    <V extends Record<N, Function>, R>(arity: 0): invoker_0arity_11<N, V, R>;
    <V extends Record<N, Function>, T1, R>(arity: 1): invoker_1arity_11<N, V, T1, R>;
    <V extends Record<N, Function>, T1, T2, R>(arity: 2): invoker_2arity_11<N, V, T1, T2, R>;
    <V extends Record<N, Function>, T1, T2, T3, R>(arity: 3): invoker_3arity_11<N, V, T1, T2, T3, R>;
    <V extends Record<N, Function>, T1, T2, T3, T4, R>(arity: 4): invoker_4arity_11<N, V, T1, T2, T3, T4, R>;
    <V extends Record<N, Function>, T1, T2, T3, T4, T5, R>(arity: 5): invoker_5arity_11<N, V, T1, T2, T3, T4, T5, R>;
    <$SEL extends "1", $KIND extends "variadic">(): <R>(arity: number) => invoker_variadic_11<R>;
    <$SEL extends "1", $KIND extends "5arity">(): <V extends Record<N, Function>, T1, T2, T3, T4, T5, R>(arity: 5) => invoker_5arity_11<N, V, T1, T2, T3, T4, T5, R>;
    <$SEL extends "1", $KIND extends "4arity">(): <V extends Record<N, Function>, T1, T2, T3, T4, R>(arity: 4) => invoker_4arity_11<N, V, T1, T2, T3, T4, R>;
    <$SEL extends "1", $KIND extends "3arity">(): <V extends Record<N, Function>, T1, T2, T3, R>(arity: 3) => invoker_3arity_11<N, V, T1, T2, T3, R>;
    <$SEL extends "1", $KIND extends "2arity">(): <V extends Record<N, Function>, T1, T2, R>(arity: 2) => invoker_2arity_11<N, V, T1, T2, R>;
    <$SEL extends "1", $KIND extends "1arity">(): <V extends Record<N, Function>, T1, R>(arity: 1) => invoker_1arity_11<N, V, T1, R>;
    <$SEL extends "1", $KIND extends "0arity">(): <V extends Record<N, Function>, R>(arity: 0) => invoker_0arity_11<N, V, R>;
    <R>(arity: number): invoker_variadic_11<R>;
};
type invoker_0arity_10 = {
    <N extends string, V extends Record<N, Function>, R>(method: N): invoker_0arity_11<N, V, R>;
};
type invoker_1arity_10 = {
    <N extends string, V extends Record<N, Function>, T1, R>(method: N): invoker_1arity_11<N, V, T1, R>;
};
type invoker_2arity_10 = {
    <N extends string, V extends Record<N, Function>, T1, T2, R>(method: N): invoker_2arity_11<N, V, T1, T2, R>;
};
type invoker_3arity_10 = {
    <N extends string, V extends Record<N, Function>, T1, T2, T3, R>(method: N): invoker_3arity_11<N, V, T1, T2, T3, R>;
};
type invoker_4arity_10 = {
    <N extends string, V extends Record<N, Function>, T1, T2, T3, T4, R>(method: N): invoker_4arity_11<N, V, T1, T2, T3, T4, R>;
};
type invoker_5arity_10 = {
    <N extends string, V extends Record<N, Function>, T1, T2, T3, T4, T5, R>(method: N): invoker_5arity_11<N, V, T1, T2, T3, T4, T5, R>;
};
type invoker_variadic_10 = {
    <N extends string, R>(method: N): invoker_variadic_11<R>;
};
type invoker_0arity_11<N extends string, V extends Record<N, Function>, R> = CurriedFunction1<V, R>;
type invoker_1arity_11<N extends string, V extends Record<N, Function>, T1, R> = CurriedFunction2<T1, V, R>;
type invoker_2arity_11<N extends string, V extends Record<N, Function>, T1, T2, R> = CurriedFunction3<T1, T2, V, R>;
type invoker_3arity_11<N extends string, V extends Record<N, Function>, T1, T2, T3, R> = CurriedFunction4<T1, T2, T3, V, R>;
type invoker_4arity_11<N extends string, V extends Record<N, Function>, T1, T2, T3, T4, R> = CurriedFunction5<T1, T2, T3, T4, V, R>;
type invoker_5arity_11<N extends string, V extends Record<N, Function>, T1, T2, T3, T4, T5, R> = CurriedFunction6<T1, T2, T3, T4, T5, V, R>;
type invoker_variadic_11<R> = Variadic<R>;
export = invoker;
