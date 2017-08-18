import { NumberToString } from "./$operation";
import { ManualLens, PseudoLens } from "./$types";
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
declare const view: view_00;
type view_00 = {
    <N extends number>(lens: PseudoLens<N>): view_number_10<N>;
    <K extends string>(lens: PseudoLens<K>): view_string_10<K>;
    <T, U>(lens: ManualLens<T, U>): view_manual_10<T, U>;
    <X, V>(lens: PseudoLens<any> | ManualLens<X, V>): view_general_10<X, V>;
    <N extends number, U extends {
            [index: number]: any;
        }>(lens: PseudoLens<N>, target: U): view_number_11<N, U>;
    <K extends string, U extends Record<K, any>>(lens: PseudoLens<K>, target: U): view_string_11<K, U>;
    <T, U>(lens: ManualLens<T, U>, target: U): view_manual_11<T>;
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
type view_number_11<N extends number, U extends {
        [index: number]: any;
    }> = U[NumberToString[N]];
type view_string_11<K extends string, U extends Record<K, any>> = U[K];
type view_manual_11<T> = T;
type view_general_11<X, V> = X | V[any];
export = view;
