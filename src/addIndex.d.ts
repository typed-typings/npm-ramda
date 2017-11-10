import { CurriedFunction2, CurriedFunction3, CurriedFunction4, CurriedFunction5, CurriedFunction6 } from "./$curriedFunctions";
import { Variadic } from "./$types";
declare const addIndex: addIndex_0;
type addIndex_0 = {
    /**
     * Creates a new list iteration function from an existing one by adding two new
     * parameters to its callback function: the current index, and the entire list.
     *
     * This would turn, for instance, [`R.map`](#map) function into one that
     * more closely resembles `Array.prototype.map`. Note that this will only work
     * for functions in which the iteration callback function is the first
     * parameter, and where the list is the last parameter. (This latter might be
     * unimportant if the list parameter is not used.)
     *
     * @func
     * @memberOf R
     * @since v0.15.0
     * @category Function
     * @category List
     * @sig ((a ... -> b) ... -> [a] -> *) -> (a ..., Int, [a] -> b) ... -> [a] -> *)
     * @param {Function} fn A list iteration function that does not pass index or list to its callback
     * @return {Function} An altered list iteration function that passes (item, index, list) to its callback
     * @example
     *
     *      var mapIndexed = R.addIndex(R.map);
     *      mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
     *      //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
     */
    <T1, U, V, R>(iterFn: (fn: (v1: T1) => U, target: V) => R): addIndex_v1x0_1<T1, U, V, R>;
    <T1, U, P1, V, R>(iterFn: (fn: (v1: T1) => U, x1: P1, target: V) => R): addIndex_v1x1_1<T1, U, P1, V, R>;
    <T1, U, P1, P2, V, R>(iterFn: (fn: (v1: T1) => U, x1: P1, x2: P2, target: V) => R): addIndex_v1x2_1<T1, U, P1, P2, V, R>;
    <T1, U, P1, P2, P3, V, R>(iterFn: (fn: (v1: T1) => U, x1: P1, x2: P2, x3: P3, target: V) => R): addIndex_v1x3_1<T1, U, P1, P2, P3, V, R>;
    <T1, U, P1, P2, P3, P4, V, R>(iterFn: (fn: (v1: T1) => U, x1: P1, x2: P2, x3: P3, x4: P4, target: V) => R): addIndex_v1x4_1<T1, U, P1, P2, P3, P4, V, R>;
    <T1, T2, U, V, R>(iterFn: (fn: (v1: T1, v2: T2) => U, target: V) => R): addIndex_v2x0_1<T1, T2, U, V, R>;
    <T1, T2, U, P1, V, R>(iterFn: (fn: (v1: T1, v2: T2) => U, x1: P1, target: V) => R): addIndex_v2x1_1<T1, T2, U, P1, V, R>;
    <T1, T2, U, P1, P2, V, R>(iterFn: (fn: (v1: T1, v2: T2) => U, x1: P1, x2: P2, target: V) => R): addIndex_v2x2_1<T1, T2, U, P1, P2, V, R>;
    <T1, T2, U, P1, P2, P3, V, R>(iterFn: (fn: (v1: T1, v2: T2) => U, x1: P1, x2: P2, x3: P3, target: V) => R): addIndex_v2x3_1<T1, T2, U, P1, P2, P3, V, R>;
    <T1, T2, U, P1, P2, P3, P4, V, R>(iterFn: (fn: (v1: T1, v2: T2) => U, x1: P1, x2: P2, x3: P3, x4: P4, target: V) => R): addIndex_v2x4_1<T1, T2, U, P1, P2, P3, P4, V, R>;
    <T1, T2, T3, U, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3) => U, target: V) => R): addIndex_v3x0_1<T1, T2, T3, U, V, R>;
    <T1, T2, T3, U, P1, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3) => U, x1: P1, target: V) => R): addIndex_v3x1_1<T1, T2, T3, U, P1, V, R>;
    <T1, T2, T3, U, P1, P2, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3) => U, x1: P1, x2: P2, target: V) => R): addIndex_v3x2_1<T1, T2, T3, U, P1, P2, V, R>;
    <T1, T2, T3, U, P1, P2, P3, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3) => U, x1: P1, x2: P2, x3: P3, target: V) => R): addIndex_v3x3_1<T1, T2, T3, U, P1, P2, P3, V, R>;
    <T1, T2, T3, U, P1, P2, P3, P4, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3) => U, x1: P1, x2: P2, x3: P3, x4: P4, target: V) => R): addIndex_v3x4_1<T1, T2, T3, U, P1, P2, P3, P4, V, R>;
    <T1, T2, T3, T4, U, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3, v4: T4) => U, target: V) => R): addIndex_v4x0_1<T1, T2, T3, T4, U, V, R>;
    <T1, T2, T3, T4, U, P1, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3, v4: T4) => U, x1: P1, target: V) => R): addIndex_v4x1_1<T1, T2, T3, T4, U, P1, V, R>;
    <T1, T2, T3, T4, U, P1, P2, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3, v4: T4) => U, x1: P1, x2: P2, target: V) => R): addIndex_v4x2_1<T1, T2, T3, T4, U, P1, P2, V, R>;
    <T1, T2, T3, T4, U, P1, P2, P3, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3, v4: T4) => U, x1: P1, x2: P2, x3: P3, target: V) => R): addIndex_v4x3_1<T1, T2, T3, T4, U, P1, P2, P3, V, R>;
    <T1, T2, T3, T4, U, P1, P2, P3, P4, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3, v4: T4) => U, x1: P1, x2: P2, x3: P3, x4: P4, target: V) => R): addIndex_v4x4_1<T1, T2, T3, T4, U, P1, P2, P3, P4, V, R>;
    <T1, T2, T3, T4, T5, U, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => U, target: V) => R): addIndex_v5x0_1<T1, T2, T3, T4, T5, U, V, R>;
    <T1, T2, T3, T4, T5, U, P1, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => U, x1: P1, target: V) => R): addIndex_v5x1_1<T1, T2, T3, T4, T5, U, P1, V, R>;
    <T1, T2, T3, T4, T5, U, P1, P2, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => U, x1: P1, x2: P2, target: V) => R): addIndex_v5x2_1<T1, T2, T3, T4, T5, U, P1, P2, V, R>;
    <T1, T2, T3, T4, T5, U, P1, P2, P3, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => U, x1: P1, x2: P2, x3: P3, target: V) => R): addIndex_v5x3_1<T1, T2, T3, T4, T5, U, P1, P2, P3, V, R>;
    <T1, T2, T3, T4, T5, U, P1, P2, P3, P4, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => U, x1: P1, x2: P2, x3: P3, x4: P4, target: V) => R): addIndex_v5x4_1<T1, T2, T3, T4, T5, U, P1, P2, P3, P4, V, R>;
    <T1, T2, T3, T4, T5, T6, U, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => U, target: V) => R): addIndex_v6x0_1<T1, T2, T3, T4, T5, T6, U, V, R>;
    <T1, T2, T3, T4, T5, T6, U, P1, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => U, x1: P1, target: V) => R): addIndex_v6x1_1<T1, T2, T3, T4, T5, T6, U, P1, V, R>;
    <T1, T2, T3, T4, T5, T6, U, P1, P2, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => U, x1: P1, x2: P2, target: V) => R): addIndex_v6x2_1<T1, T2, T3, T4, T5, T6, U, P1, P2, V, R>;
    <T1, T2, T3, T4, T5, T6, U, P1, P2, P3, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => U, x1: P1, x2: P2, x3: P3, target: V) => R): addIndex_v6x3_1<T1, T2, T3, T4, T5, T6, U, P1, P2, P3, V, R>;
    <T1, T2, T3, T4, T5, T6, U, P1, P2, P3, P4, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => U, x1: P1, x2: P2, x3: P3, x4: P4, target: V) => R): addIndex_v6x4_1<T1, T2, T3, T4, T5, T6, U, P1, P2, P3, P4, V, R>;
    <$SEL extends "1", $KIND extends "variadic">(): <U, V, R>(iterFn: (fn: Variadic<U>, target: V) => R) => addIndex_variadic_1<U, V, R>;
    <$SEL extends "1", $KIND extends "v6x4">(): <T1, T2, T3, T4, T5, T6, U, P1, P2, P3, P4, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => U, x1: P1, x2: P2, x3: P3, x4: P4, target: V) => R) => addIndex_v6x4_1<T1, T2, T3, T4, T5, T6, U, P1, P2, P3, P4, V, R>;
    <$SEL extends "1", $KIND extends "v6x3">(): <T1, T2, T3, T4, T5, T6, U, P1, P2, P3, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => U, x1: P1, x2: P2, x3: P3, target: V) => R) => addIndex_v6x3_1<T1, T2, T3, T4, T5, T6, U, P1, P2, P3, V, R>;
    <$SEL extends "1", $KIND extends "v6x2">(): <T1, T2, T3, T4, T5, T6, U, P1, P2, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => U, x1: P1, x2: P2, target: V) => R) => addIndex_v6x2_1<T1, T2, T3, T4, T5, T6, U, P1, P2, V, R>;
    <$SEL extends "1", $KIND extends "v6x1">(): <T1, T2, T3, T4, T5, T6, U, P1, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => U, x1: P1, target: V) => R) => addIndex_v6x1_1<T1, T2, T3, T4, T5, T6, U, P1, V, R>;
    <$SEL extends "1", $KIND extends "v6x0">(): <T1, T2, T3, T4, T5, T6, U, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => U, target: V) => R) => addIndex_v6x0_1<T1, T2, T3, T4, T5, T6, U, V, R>;
    <$SEL extends "1", $KIND extends "v5x4">(): <T1, T2, T3, T4, T5, U, P1, P2, P3, P4, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => U, x1: P1, x2: P2, x3: P3, x4: P4, target: V) => R) => addIndex_v5x4_1<T1, T2, T3, T4, T5, U, P1, P2, P3, P4, V, R>;
    <$SEL extends "1", $KIND extends "v5x3">(): <T1, T2, T3, T4, T5, U, P1, P2, P3, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => U, x1: P1, x2: P2, x3: P3, target: V) => R) => addIndex_v5x3_1<T1, T2, T3, T4, T5, U, P1, P2, P3, V, R>;
    <$SEL extends "1", $KIND extends "v5x2">(): <T1, T2, T3, T4, T5, U, P1, P2, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => U, x1: P1, x2: P2, target: V) => R) => addIndex_v5x2_1<T1, T2, T3, T4, T5, U, P1, P2, V, R>;
    <$SEL extends "1", $KIND extends "v5x1">(): <T1, T2, T3, T4, T5, U, P1, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => U, x1: P1, target: V) => R) => addIndex_v5x1_1<T1, T2, T3, T4, T5, U, P1, V, R>;
    <$SEL extends "1", $KIND extends "v5x0">(): <T1, T2, T3, T4, T5, U, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => U, target: V) => R) => addIndex_v5x0_1<T1, T2, T3, T4, T5, U, V, R>;
    <$SEL extends "1", $KIND extends "v4x4">(): <T1, T2, T3, T4, U, P1, P2, P3, P4, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3, v4: T4) => U, x1: P1, x2: P2, x3: P3, x4: P4, target: V) => R) => addIndex_v4x4_1<T1, T2, T3, T4, U, P1, P2, P3, P4, V, R>;
    <$SEL extends "1", $KIND extends "v4x3">(): <T1, T2, T3, T4, U, P1, P2, P3, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3, v4: T4) => U, x1: P1, x2: P2, x3: P3, target: V) => R) => addIndex_v4x3_1<T1, T2, T3, T4, U, P1, P2, P3, V, R>;
    <$SEL extends "1", $KIND extends "v4x2">(): <T1, T2, T3, T4, U, P1, P2, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3, v4: T4) => U, x1: P1, x2: P2, target: V) => R) => addIndex_v4x2_1<T1, T2, T3, T4, U, P1, P2, V, R>;
    <$SEL extends "1", $KIND extends "v4x1">(): <T1, T2, T3, T4, U, P1, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3, v4: T4) => U, x1: P1, target: V) => R) => addIndex_v4x1_1<T1, T2, T3, T4, U, P1, V, R>;
    <$SEL extends "1", $KIND extends "v4x0">(): <T1, T2, T3, T4, U, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3, v4: T4) => U, target: V) => R) => addIndex_v4x0_1<T1, T2, T3, T4, U, V, R>;
    <$SEL extends "1", $KIND extends "v3x4">(): <T1, T2, T3, U, P1, P2, P3, P4, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3) => U, x1: P1, x2: P2, x3: P3, x4: P4, target: V) => R) => addIndex_v3x4_1<T1, T2, T3, U, P1, P2, P3, P4, V, R>;
    <$SEL extends "1", $KIND extends "v3x3">(): <T1, T2, T3, U, P1, P2, P3, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3) => U, x1: P1, x2: P2, x3: P3, target: V) => R) => addIndex_v3x3_1<T1, T2, T3, U, P1, P2, P3, V, R>;
    <$SEL extends "1", $KIND extends "v3x2">(): <T1, T2, T3, U, P1, P2, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3) => U, x1: P1, x2: P2, target: V) => R) => addIndex_v3x2_1<T1, T2, T3, U, P1, P2, V, R>;
    <$SEL extends "1", $KIND extends "v3x1">(): <T1, T2, T3, U, P1, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3) => U, x1: P1, target: V) => R) => addIndex_v3x1_1<T1, T2, T3, U, P1, V, R>;
    <$SEL extends "1", $KIND extends "v3x0">(): <T1, T2, T3, U, V, R>(iterFn: (fn: (v1: T1, v2: T2, v3: T3) => U, target: V) => R) => addIndex_v3x0_1<T1, T2, T3, U, V, R>;
    <$SEL extends "1", $KIND extends "v2x4">(): <T1, T2, U, P1, P2, P3, P4, V, R>(iterFn: (fn: (v1: T1, v2: T2) => U, x1: P1, x2: P2, x3: P3, x4: P4, target: V) => R) => addIndex_v2x4_1<T1, T2, U, P1, P2, P3, P4, V, R>;
    <$SEL extends "1", $KIND extends "v2x3">(): <T1, T2, U, P1, P2, P3, V, R>(iterFn: (fn: (v1: T1, v2: T2) => U, x1: P1, x2: P2, x3: P3, target: V) => R) => addIndex_v2x3_1<T1, T2, U, P1, P2, P3, V, R>;
    <$SEL extends "1", $KIND extends "v2x2">(): <T1, T2, U, P1, P2, V, R>(iterFn: (fn: (v1: T1, v2: T2) => U, x1: P1, x2: P2, target: V) => R) => addIndex_v2x2_1<T1, T2, U, P1, P2, V, R>;
    <$SEL extends "1", $KIND extends "v2x1">(): <T1, T2, U, P1, V, R>(iterFn: (fn: (v1: T1, v2: T2) => U, x1: P1, target: V) => R) => addIndex_v2x1_1<T1, T2, U, P1, V, R>;
    <$SEL extends "1", $KIND extends "v2x0">(): <T1, T2, U, V, R>(iterFn: (fn: (v1: T1, v2: T2) => U, target: V) => R) => addIndex_v2x0_1<T1, T2, U, V, R>;
    <$SEL extends "1", $KIND extends "v1x4">(): <T1, U, P1, P2, P3, P4, V, R>(iterFn: (fn: (v1: T1) => U, x1: P1, x2: P2, x3: P3, x4: P4, target: V) => R) => addIndex_v1x4_1<T1, U, P1, P2, P3, P4, V, R>;
    <$SEL extends "1", $KIND extends "v1x3">(): <T1, U, P1, P2, P3, V, R>(iterFn: (fn: (v1: T1) => U, x1: P1, x2: P2, x3: P3, target: V) => R) => addIndex_v1x3_1<T1, U, P1, P2, P3, V, R>;
    <$SEL extends "1", $KIND extends "v1x2">(): <T1, U, P1, P2, V, R>(iterFn: (fn: (v1: T1) => U, x1: P1, x2: P2, target: V) => R) => addIndex_v1x2_1<T1, U, P1, P2, V, R>;
    <$SEL extends "1", $KIND extends "v1x1">(): <T1, U, P1, V, R>(iterFn: (fn: (v1: T1) => U, x1: P1, target: V) => R) => addIndex_v1x1_1<T1, U, P1, V, R>;
    <$SEL extends "1", $KIND extends "v1x0">(): <T1, U, V, R>(iterFn: (fn: (v1: T1) => U, target: V) => R) => addIndex_v1x0_1<T1, U, V, R>;
    <U, V, R>(iterFn: (fn: Variadic<U>, target: V) => R): addIndex_variadic_1<U, V, R>;
};
type addIndex_v1x0_1<T1, U, V, R> = CurriedFunction2<((v1: T1, index: number, target: V) => U), V, R>;
type addIndex_v1x1_1<T1, U, P1, V, R> = CurriedFunction3<((v1: T1, index: number, target: V) => U), P1, V, R>;
type addIndex_v1x2_1<T1, U, P1, P2, V, R> = CurriedFunction4<((v1: T1, index: number, target: V) => U), P1, P2, V, R>;
type addIndex_v1x3_1<T1, U, P1, P2, P3, V, R> = CurriedFunction5<((v1: T1, index: number, target: V) => U), P1, P2, P3, V, R>;
type addIndex_v1x4_1<T1, U, P1, P2, P3, P4, V, R> = CurriedFunction6<((v1: T1, index: number, target: V) => U), P1, P2, P3, P4, V, R>;
type addIndex_v2x0_1<T1, T2, U, V, R> = CurriedFunction2<((v1: T1, v2: T2, index: number, target: V) => U), V, R>;
type addIndex_v2x1_1<T1, T2, U, P1, V, R> = CurriedFunction3<((v1: T1, v2: T2, index: number, target: V) => U), P1, V, R>;
type addIndex_v2x2_1<T1, T2, U, P1, P2, V, R> = CurriedFunction4<((v1: T1, v2: T2, index: number, target: V) => U), P1, P2, V, R>;
type addIndex_v2x3_1<T1, T2, U, P1, P2, P3, V, R> = CurriedFunction5<((v1: T1, v2: T2, index: number, target: V) => U), P1, P2, P3, V, R>;
type addIndex_v2x4_1<T1, T2, U, P1, P2, P3, P4, V, R> = CurriedFunction6<((v1: T1, v2: T2, index: number, target: V) => U), P1, P2, P3, P4, V, R>;
type addIndex_v3x0_1<T1, T2, T3, U, V, R> = CurriedFunction2<((v1: T1, v2: T2, v3: T3, index: number, target: V) => U), V, R>;
type addIndex_v3x1_1<T1, T2, T3, U, P1, V, R> = CurriedFunction3<((v1: T1, v2: T2, v3: T3, index: number, target: V) => U), P1, V, R>;
type addIndex_v3x2_1<T1, T2, T3, U, P1, P2, V, R> = CurriedFunction4<((v1: T1, v2: T2, v3: T3, index: number, target: V) => U), P1, P2, V, R>;
type addIndex_v3x3_1<T1, T2, T3, U, P1, P2, P3, V, R> = CurriedFunction5<((v1: T1, v2: T2, v3: T3, index: number, target: V) => U), P1, P2, P3, V, R>;
type addIndex_v3x4_1<T1, T2, T3, U, P1, P2, P3, P4, V, R> = CurriedFunction6<((v1: T1, v2: T2, v3: T3, index: number, target: V) => U), P1, P2, P3, P4, V, R>;
type addIndex_v4x0_1<T1, T2, T3, T4, U, V, R> = CurriedFunction2<((v1: T1, v2: T2, v3: T3, v4: T4, index: number, target: V) => U), V, R>;
type addIndex_v4x1_1<T1, T2, T3, T4, U, P1, V, R> = CurriedFunction3<((v1: T1, v2: T2, v3: T3, v4: T4, index: number, target: V) => U), P1, V, R>;
type addIndex_v4x2_1<T1, T2, T3, T4, U, P1, P2, V, R> = CurriedFunction4<((v1: T1, v2: T2, v3: T3, v4: T4, index: number, target: V) => U), P1, P2, V, R>;
type addIndex_v4x3_1<T1, T2, T3, T4, U, P1, P2, P3, V, R> = CurriedFunction5<((v1: T1, v2: T2, v3: T3, v4: T4, index: number, target: V) => U), P1, P2, P3, V, R>;
type addIndex_v4x4_1<T1, T2, T3, T4, U, P1, P2, P3, P4, V, R> = CurriedFunction6<((v1: T1, v2: T2, v3: T3, v4: T4, index: number, target: V) => U), P1, P2, P3, P4, V, R>;
type addIndex_v5x0_1<T1, T2, T3, T4, T5, U, V, R> = CurriedFunction2<((v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, index: number, target: V) => U), V, R>;
type addIndex_v5x1_1<T1, T2, T3, T4, T5, U, P1, V, R> = CurriedFunction3<((v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, index: number, target: V) => U), P1, V, R>;
type addIndex_v5x2_1<T1, T2, T3, T4, T5, U, P1, P2, V, R> = CurriedFunction4<((v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, index: number, target: V) => U), P1, P2, V, R>;
type addIndex_v5x3_1<T1, T2, T3, T4, T5, U, P1, P2, P3, V, R> = CurriedFunction5<((v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, index: number, target: V) => U), P1, P2, P3, V, R>;
type addIndex_v5x4_1<T1, T2, T3, T4, T5, U, P1, P2, P3, P4, V, R> = CurriedFunction6<((v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, index: number, target: V) => U), P1, P2, P3, P4, V, R>;
type addIndex_v6x0_1<T1, T2, T3, T4, T5, T6, U, V, R> = CurriedFunction2<((v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, index: number, target: V) => U), V, R>;
type addIndex_v6x1_1<T1, T2, T3, T4, T5, T6, U, P1, V, R> = CurriedFunction3<((v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, index: number, target: V) => U), P1, V, R>;
type addIndex_v6x2_1<T1, T2, T3, T4, T5, T6, U, P1, P2, V, R> = CurriedFunction4<((v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, index: number, target: V) => U), P1, P2, V, R>;
type addIndex_v6x3_1<T1, T2, T3, T4, T5, T6, U, P1, P2, P3, V, R> = CurriedFunction5<((v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, index: number, target: V) => U), P1, P2, P3, V, R>;
type addIndex_v6x4_1<T1, T2, T3, T4, T5, T6, U, P1, P2, P3, P4, V, R> = CurriedFunction6<((v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, index: number, target: V) => U), P1, P2, P3, P4, V, R>;
type addIndex_variadic_1<U, V, R> = CurriedFunction2<Variadic<U>, V, R>;
export = addIndex;
