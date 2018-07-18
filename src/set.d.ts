import { ManualLens, PseudoLens } from "./$types";
declare const set: set_000;
type set_000 = {
    /**
     * Returns the result of "setting" the portion of the given data structure
     * focused by the given lens to the given value.
     *
     * @func
     * @memberOf R
     * @since v0.16.0
     * @category Object
     * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
     * @sig Lens s a -> a -> s -> s
     * @param {Lens} lens
     * @param {*} v
     * @param {*} x
     * @return {*}
     * @see R.prop, R.lensIndex, R.lensProp
     * @example
     *
     *      var xLens = R.lensProp('x');
     *
     *      R.set(xLens, 4, {x: 1, y: 2});  //=> {x: 4, y: 2}
     *      R.set(xLens, 8, {x: 1, y: 2});  //=> {x: 8, y: 2}
     */
    <N extends number>(lens: PseudoLens<N>): set_number_100<N>;
    <K extends string>(lens: PseudoLens<K>): set_string_100<K>;
    <T, U>(lens: ManualLens<T, U>): set_manual_100<T, U>;
    <V>(lens: PseudoLens<any> | ManualLens<any, V>): set_general_100<V>;
    <N extends number, U extends {
        [index: number]: any;
    }>(lens: PseudoLens<N>, value: U[N]): set_number_110<N, U>;
    <K extends string, U extends Record<K, any>>(lens: PseudoLens<K>, value: U[K]): set_string_110<K, U>;
    <T, U>(lens: ManualLens<T, U>, value: T): set_manual_110<T, U>;
    <V>(lens: PseudoLens<any> | ManualLens<any, V>, fn: any): set_general_110<V>;
    <N extends number, U extends {
        [index: number]: any;
    }>(lens: PseudoLens<N>, value: U[N], target: U): set_number_111<U>;
    <K extends string, U extends Record<K, any>>(lens: PseudoLens<K>, value: U[K], target: U): set_string_111<K, U>;
    <T, U>(lens: ManualLens<T, U>, value: T, target: U): set_manual_111<U>;
    <V>(lens: PseudoLens<any> | ManualLens<any, V>, fn: any, target: V): set_general_111<V>;
};
type set_number_100<N extends number> = {
    <U extends {
        [index: number]: any;
    }>(value: U[N]): set_number_110<N, U>;
    <U extends {
        [index: number]: any;
    }>(value: U[N], target: U): set_number_111<U>;
};
type set_string_100<K extends string> = {
    <U extends Record<K, any>>(value: U[K]): set_string_110<K, U>;
    <U extends Record<K, any>>(value: U[K], target: U): set_string_111<K, U>;
};
type set_manual_100<T, U> = {
    (value: T): set_manual_110<T, U>;
    (value: T, target: U): set_manual_111<U>;
};
type set_general_100<V> = {
    (fn: any): set_general_110<V>;
    (fn: any, target: V): set_general_111<V>;
};
type set_number_110<N extends number, U extends {
    [index: number]: any;
}> = {
    (target: U): set_number_111<U>;
};
type set_string_110<K extends string, U extends Record<K, any>> = {
    (target: U): set_string_111<K, U>;
};
type set_manual_110<T, U> = {
    (target: U): set_manual_111<U>;
};
type set_general_110<V> = {
    (target: V): set_general_111<V>;
};
type set_number_111<U extends {
    [index: number]: any;
}> = U;
type set_string_111<K extends string, U extends Record<K, any>> = U;
type set_manual_111<U> = U;
type set_general_111<V> = V;
export = set;
