import { NumberToString } from "./$operation";
import { ManualLens, PseudoLens } from "./$types";
import { Placeholder as PH } from "./$placeholder";
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
        }>(_lens: PH, value: U[NumberToString[N]]): set_number_010<N, U>;
    <K extends string, U extends Record<K, any>>(_lens: PH, value: U[K]): set_string_010<K, U>;
    <T>(_lens: PH, value: T): set_manual_010<T>;
    (_lens: PH, fn: any): set_general_010;
    <N extends number, U extends {
            [index: number]: any;
        }>(lens: PseudoLens<N>, value: U[NumberToString[N]]): set_number_110<N, U>;
    <K extends string, U extends Record<K, any>>(lens: PseudoLens<K>, value: U[K]): set_string_110<K, U>;
    <T, U>(lens: ManualLens<T, U>, value: T): set_manual_110<T, U>;
    <V>(lens: PseudoLens<any> | ManualLens<any, V>, fn: any): set_general_110<V>;
    <U extends {
            [index: number]: any;
        }>(_lens: PH, _value: PH, target: U): set_number_001<U>;
    <K extends string, U extends Record<K, any>>(_lens: PH, _value: PH, target: U): set_string_001<K, U>;
    <U>(_lens: PH, _value: PH, target: U): set_manual_001<U>;
    <V>(_lens: PH, _fn: PH, target: V): set_general_001<V>;
    <N extends number, U extends {
            [index: number]: any;
        }>(_lens: PH, value: U[NumberToString[N]], target: U): set_number_011<N, U>;
    <K extends string, U extends Record<K, any>>(_lens: PH, value: U[K], target: U): set_string_011<K, U>;
    <T, U>(_lens: PH, value: T, target: U): set_manual_011<T, U>;
    <V>(_lens: PH, fn: any, target: V): set_general_011<V>;
    <N extends number, U extends {
            [index: number]: any;
        }>(lens: PseudoLens<N>, _value: PH, target: U): set_number_101<N, U>;
    <K extends string, U extends Record<K, any>>(lens: PseudoLens<K>, _value: PH, target: U): set_string_101<K, U>;
    <T, U>(lens: ManualLens<T, U>, _value: PH, target: U): set_manual_101<T, U>;
    <V>(lens: PseudoLens<any> | ManualLens<any, V>, _fn: PH, target: V): set_general_101<V>;
    <N extends number, U extends {
            [index: number]: any;
        }>(lens: PseudoLens<N>, value: U[NumberToString[N]], target: U): set_number_111<U>;
    <K extends string, U extends Record<K, any>>(lens: PseudoLens<K>, value: U[K], target: U): set_string_111<K, U>;
    <T, U>(lens: ManualLens<T, U>, value: T, target: U): set_manual_111<U>;
    <V>(lens: PseudoLens<any> | ManualLens<any, V>, fn: any, target: V): set_general_111<V>;
};
type set_number_100<N extends number> = {
    <U extends {
            [index: number]: any;
        }>(value: U[NumberToString[N]]): set_number_110<N, U>;
    <U extends {
            [index: number]: any;
        }>(_value: PH, target: U): set_number_101<N, U>;
    <U extends {
            [index: number]: any;
        }>(value: U[NumberToString[N]], target: U): set_number_111<U>;
};
type set_string_100<K extends string> = {
    <U extends Record<K, any>>(value: U[K]): set_string_110<K, U>;
    <U extends Record<K, any>>(_value: PH, target: U): set_string_101<K, U>;
    <U extends Record<K, any>>(value: U[K], target: U): set_string_111<K, U>;
};
type set_manual_100<T, U> = {
    (value: T): set_manual_110<T, U>;
    (_value: PH, target: U): set_manual_101<T, U>;
    (value: T, target: U): set_manual_111<U>;
};
type set_general_100<V> = {
    (fn: any): set_general_110<V>;
    (_fn: PH, target: V): set_general_101<V>;
    (fn: any, target: V): set_general_111<V>;
};
type set_number_010<N extends number, U extends {
        [index: number]: any;
    }> = {
    (lens: PseudoLens<N>): set_number_110<N, U>;
    (_lens: PH, target: U): set_number_011<N, U>;
    (lens: PseudoLens<N>, target: U): set_number_111<U>;
};
type set_string_010<K extends string, U extends Record<K, any>> = {
    (lens: PseudoLens<K>): set_string_110<K, U>;
    (_lens: PH, target: U): set_string_011<K, U>;
    (lens: PseudoLens<K>, target: U): set_string_111<K, U>;
};
type set_manual_010<T> = {
    <U>(lens: ManualLens<T, U>): set_manual_110<T, U>;
    <U>(_lens: PH, target: U): set_manual_011<T, U>;
    <U>(lens: ManualLens<T, U>, target: U): set_manual_111<U>;
};
type set_general_010 = {
    <V>(lens: PseudoLens<any> | ManualLens<any, V>): set_general_110<V>;
    <V>(_lens: PH, target: V): set_general_011<V>;
    <V>(lens: PseudoLens<any> | ManualLens<any, V>, target: V): set_general_111<V>;
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
type set_number_001<U extends {
        [index: number]: any;
    }> = {
    <N extends number>(lens: PseudoLens<N>): set_number_101<N, U>;
    <N extends number>(_lens: PH, value: U[NumberToString[N]]): set_number_011<N, U>;
    <N extends number>(lens: PseudoLens<N>, value: U[NumberToString[N]]): set_number_111<U>;
};
type set_string_001<K extends string, U extends Record<K, any>> = {
    (lens: PseudoLens<K>): set_string_101<K, U>;
    (_lens: PH, value: U[K]): set_string_011<K, U>;
    (lens: PseudoLens<K>, value: U[K]): set_string_111<K, U>;
};
type set_manual_001<U> = {
    <T>(lens: ManualLens<T, U>): set_manual_101<T, U>;
    <T>(_lens: PH, value: T): set_manual_011<T, U>;
    <T>(lens: ManualLens<T, U>, value: T): set_manual_111<U>;
};
type set_general_001<V> = {
    (lens: PseudoLens<any> | ManualLens<any, V>): set_general_101<V>;
    (_lens: PH, fn: any): set_general_011<V>;
    (lens: PseudoLens<any> | ManualLens<any, V>, fn: any): set_general_111<V>;
};
type set_number_101<N extends number, U extends {
        [index: number]: any;
    }> = {
    (value: U[NumberToString[N]]): set_number_111<U>;
};
type set_string_101<K extends string, U extends Record<K, any>> = {
    (value: U[K]): set_string_111<K, U>;
};
type set_manual_101<T, U> = {
    (value: T): set_manual_111<U>;
};
type set_general_101<V> = {
    (fn: any): set_general_111<V>;
};
type set_number_011<N extends number, U extends {
        [index: number]: any;
    }> = {
    (lens: PseudoLens<N>): set_number_111<U>;
};
type set_string_011<K extends string, U extends Record<K, any>> = {
    (lens: PseudoLens<K>): set_string_111<K, U>;
};
type set_manual_011<T, U> = {
    (lens: ManualLens<T, U>): set_manual_111<U>;
};
type set_general_011<V> = {
    (lens: PseudoLens<any> | ManualLens<any, V>): set_general_111<V>;
};
type set_number_111<U extends {
        [index: number]: any;
    }> = U;
type set_string_111<K extends string, U extends Record<K, any>> = U;
type set_manual_111<U> = U;
type set_general_111<V> = V;
export = set;
