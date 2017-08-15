import { NumberToString } from "./$operation";
import { ManualLens, Morphism, PseudoLens } from "./$types";
/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the result of applying the given function to
 * the focused value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> (a -> a) -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var headLens = R.lensIndex(0);
 *
 *      R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
 */
declare const over: over_000;
type over_000 = {
    <N extends number>(lens: PseudoLens<N>): over_number_100<N>;
    <K extends string>(lens: PseudoLens<K>): over_string_100<K>;
    <T, U>(lens: ManualLens<T, U>): over_manual_100<T, U>;
    <V>(lens: PseudoLens<any> | ManualLens<any, V>): over_general_100<V>;
    <N extends number, U extends {
            [index: number]: any;
        }>(lens: PseudoLens<N>, fn: Morphism<U[NumberToString[N]], U[NumberToString[N]]>): over_number_110<N, U>;
    <K extends string, U extends Record<K, any>>(lens: PseudoLens<K>, fn: Morphism<U[K], U[K]>): over_string_110<K, U>;
    <T, U>(lens: ManualLens<T, U>, fn: Morphism<T, T>): over_manual_110<T, U>;
    <X, V>(lens: PseudoLens<any> | ManualLens<any, V>, fn: Morphism<X, X>): over_general_110<X, V>;
    <N extends number, U extends {
            [index: number]: any;
        }>(lens: PseudoLens<N>, fn: Morphism<U[NumberToString[N]], U[NumberToString[N]]>, target: U): over_number_111<U>;
    <K extends string, U extends Record<K, any>>(lens: PseudoLens<K>, fn: Morphism<U[K], U[K]>, target: U): over_string_111<K, U>;
    <T, U>(lens: ManualLens<T, U>, fn: Morphism<T, T>, target: U): over_manual_111<U>;
    <X, V>(lens: PseudoLens<any> | ManualLens<any, V>, fn: Morphism<X, X>, target: V): over_general_111<V>;
};
type over_number_100<N extends number> = {
    <U extends {
            [index: number]: any;
        }>(fn: Morphism<U[NumberToString[N]], U[NumberToString[N]]>): over_number_110<N, U>;
    <U extends {
            [index: number]: any;
        }>(fn: Morphism<U[NumberToString[N]], U[NumberToString[N]]>, target: U): over_number_111<U>;
};
type over_string_100<K extends string> = {
    <U extends Record<K, any>>(fn: Morphism<U[K], U[K]>): over_string_110<K, U>;
    <U extends Record<K, any>>(fn: Morphism<U[K], U[K]>, target: U): over_string_111<K, U>;
};
type over_manual_100<T, U> = {
    (fn: Morphism<T, T>): over_manual_110<T, U>;
    (fn: Morphism<T, T>, target: U): over_manual_111<U>;
};
type over_general_100<V> = {
    <X>(fn: Morphism<X, X>): over_general_110<X, V>;
    <X>(fn: Morphism<X, X>, target: V): over_general_111<V>;
};
type over_number_010<N extends number, U extends {
        [index: number]: any;
    }> = {
    (lens: PseudoLens<N>): over_number_110<N, U>;
    (lens: PseudoLens<N>, target: U): over_number_111<U>;
};
type over_string_010<K extends string, U extends Record<K, any>> = {
    (lens: PseudoLens<K>): over_string_110<K, U>;
    (lens: PseudoLens<K>, target: U): over_string_111<K, U>;
};
type over_manual_010<T> = {
    <U>(lens: ManualLens<T, U>): over_manual_110<T, U>;
    <U>(lens: ManualLens<T, U>, target: U): over_manual_111<U>;
};
type over_general_010<X> = {
    <V>(lens: PseudoLens<any> | ManualLens<any, V>): over_general_110<X, V>;
    <V>(lens: PseudoLens<any> | ManualLens<any, V>, target: V): over_general_111<V>;
};
type over_number_110<N extends number, U extends {
        [index: number]: any;
    }> = {
    (target: U): over_number_111<U>;
};
type over_string_110<K extends string, U extends Record<K, any>> = {
    (target: U): over_string_111<K, U>;
};
type over_manual_110<T, U> = {
    (target: U): over_manual_111<U>;
};
type over_general_110<X, V> = {
    (target: V): over_general_111<V>;
};
type over_number_001<U extends {
        [index: number]: any;
    }> = {
    <N extends number>(lens: PseudoLens<N>): over_number_101<N, U>;
    <N extends number>(lens: PseudoLens<N>, fn: Morphism<U[NumberToString[N]], U[NumberToString[N]]>): over_number_111<U>;
};
type over_string_001<K extends string, U extends Record<K, any>> = {
    (lens: PseudoLens<K>): over_string_101<K, U>;
    (lens: PseudoLens<K>, fn: Morphism<U[K], U[K]>): over_string_111<K, U>;
};
type over_manual_001<U> = {
    <T>(lens: ManualLens<T, U>): over_manual_101<T, U>;
    <T>(lens: ManualLens<T, U>, fn: Morphism<T, T>): over_manual_111<U>;
};
type over_general_001<V> = {
    (lens: PseudoLens<any> | ManualLens<any, V>): over_general_101<V>;
    <X>(lens: PseudoLens<any> | ManualLens<any, V>, fn: Morphism<X, X>): over_general_111<V>;
};
type over_number_101<N extends number, U extends {
        [index: number]: any;
    }> = {
    (fn: Morphism<U[NumberToString[N]], U[NumberToString[N]]>): over_number_111<U>;
};
type over_string_101<K extends string, U extends Record<K, any>> = {
    (fn: Morphism<U[K], U[K]>): over_string_111<K, U>;
};
type over_manual_101<T, U> = {
    (fn: Morphism<T, T>): over_manual_111<U>;
};
type over_general_101<V> = {
    <X>(fn: Morphism<X, X>): over_general_111<V>;
};
type over_number_011<N extends number, U extends {
        [index: number]: any;
    }> = {
    (lens: PseudoLens<N>): over_number_111<U>;
};
type over_string_011<K extends string, U extends Record<K, any>> = {
    (lens: PseudoLens<K>): over_string_111<K, U>;
};
type over_manual_011<T, U> = {
    (lens: ManualLens<T, U>): over_manual_111<U>;
};
type over_general_011<X, V> = {
    (lens: PseudoLens<any> | ManualLens<any, V>): over_general_111<V>;
};
type over_number_111<U extends {
        [index: number]: any;
    }> = U;
type over_string_111<K extends string, U extends Record<K, any>> = U;
type over_manual_111<U> = U;
type over_general_111<V> = V;
export = over;
