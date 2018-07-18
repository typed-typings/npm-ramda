import { ManualLens, PseudoLens } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const view: view_00;
type view_00 = {
    /**
     * Returns a "view" of the given data structure, determined by the given lens.
     * The lens's focus determines which portion of the data structure is visible.
     *
     * @func
     * @memberOf R
     * @since v0.16.0
     * @category Object
     * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
     * @sig Lens s a -> s -> a
     * @param {Lens} lens
     * @param {*} x
     * @return {*}
     * @see R.prop, R.lensIndex, R.lensProp
     * @example
     *
     *      var xLens = R.lensProp('x');
     *
     *      R.view(xLens, {x: 1, y: 2});  //=> 1
     *      R.view(xLens, {x: 4, y: 2});  //=> 4
     */
    <N extends number>(lens: PseudoLens<N>): view_number_10<N>;
    <K extends string>(lens: PseudoLens<K>): view_string_10<K>;
    <T, U>(lens: ManualLens<T, U>): view_manual_10<T, U>;
    <X, V>(lens: PseudoLens<any> | ManualLens<X, V>): view_general_10<X, V>;
    <U extends {
        [index: number]: any;
    }>(_lens: PH, target: U): view_number_01<U>;
    <K extends string, U extends Record<K, any>>(_lens: PH, target: U): view_string_01<K, U>;
    <U>(_lens: PH, target: U): view_manual_01<U>;
    <V>(_lens: PH, target: V): view_general_01<V>;
    <N extends number, U extends {
        [index: number]: any;
    }>(lens: PseudoLens<N>, target: U): view_number_11<N, U>;
    <K extends string, U extends Record<K, any>>(lens: PseudoLens<K>, target: U): view_string_11<K, U>;
    <T, U>(lens: ManualLens<T, U>, target: U): view_manual_11<T>;
    <$SEL extends "11", $KIND extends "general">(): <X, V>(lens: PseudoLens<any> | ManualLens<X, V>, target: V) => view_general_11<X, V>;
    <$SEL extends "11", $KIND extends "manual">(): <T, U>(lens: ManualLens<T, U>, target: U) => view_manual_11<T>;
    <$SEL extends "11", $KIND extends "string">(): <K extends string, U extends Record<K, any>>(lens: PseudoLens<K>, target: U) => view_string_11<K, U>;
    <$SEL extends "11", $KIND extends "number">(): <N extends number, U extends {
        [index: number]: any;
    }>(lens: PseudoLens<N>, target: U) => view_number_11<N, U>;
    <$SEL extends "01", $KIND extends "general">(): <V>(_lens: PH, target: V) => view_general_01<V>;
    <$SEL extends "01", $KIND extends "manual">(): <U>(_lens: PH, target: U) => view_manual_01<U>;
    <$SEL extends "01", $KIND extends "string">(): <K extends string, U extends Record<K, any>>(_lens: PH, target: U) => view_string_01<K, U>;
    <$SEL extends "01", $KIND extends "number">(): <U extends {
        [index: number]: any;
    }>(_lens: PH, target: U) => view_number_01<U>;
    <$SEL extends "1", $KIND extends "general">(): <X, V>(lens: PseudoLens<any> | ManualLens<X, V>) => view_general_10<X, V>;
    <$SEL extends "1", $KIND extends "manual">(): <T, U>(lens: ManualLens<T, U>) => view_manual_10<T, U>;
    <$SEL extends "1", $KIND extends "string">(): <K extends string>(lens: PseudoLens<K>) => view_string_10<K>;
    <$SEL extends "1", $KIND extends "number">(): <N extends number>(lens: PseudoLens<N>) => view_number_10<N>;
    <X, V>(lens: PseudoLens<any> | ManualLens<X, V>, target: V): view_general_11<X, V>;
};
type view_number_10<N extends number> = {
    <U extends {
        [index: number]: any;
    }>(target: U): view_number_11<N, U>;
};
type view_string_10<K extends string> = {
    <U extends Record<K, any>>(target: U): view_string_11<K, U>;
};
type view_manual_10<T, U> = {
    (target: U): view_manual_11<T>;
};
type view_general_10<X, V> = {
    (target: V): view_general_11<X, V>;
};
type view_number_01<U extends {
    [index: number]: any;
}> = {
    <N extends number>(lens: PseudoLens<N>): view_number_11<N, U>;
};
type view_string_01<K extends string, U extends Record<K, any>> = {
    (lens: PseudoLens<K>): view_string_11<K, U>;
};
type view_manual_01<U> = {
    <T>(lens: ManualLens<T, U>): view_manual_11<T>;
};
type view_general_01<V> = {
    <X>(lens: PseudoLens<any> | ManualLens<X, V>): view_general_11<X, V>;
};
type view_number_11<N extends number, U extends {
    [index: number]: any;
}> = U[N];
type view_string_11<K extends string, U extends Record<K, any>> = U[K];
type view_manual_11<T> = T;
type view_general_11<X, V> = X | V[any];
export = view;
