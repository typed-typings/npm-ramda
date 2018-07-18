import { ManualLens, Morphism, PseudoLens } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const over: over_000;
type over_000 = {
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
    <N extends number>(lens: PseudoLens<N>): over_number_100<N>;
    <K extends string>(lens: PseudoLens<K>): over_string_100<K>;
    <T, U>(lens: ManualLens<T, U>): over_manual_100<T, U>;
    <V>(lens: PseudoLens<any> | ManualLens<any, V>): over_general_100<V>;
    <N extends number, U extends {
        [index: number]: any;
    }>(_lens: PH, fn: Morphism<U[N], U[N]>): over_number_010<N, U>;
    <K extends string, U extends Record<K, any>>(_lens: PH, fn: Morphism<U[K], U[K]>): over_string_010<K, U>;
    <T>(_lens: PH, fn: Morphism<T, T>): over_manual_010<T>;
    <X>(_lens: PH, fn: Morphism<X, X>): over_general_010<X>;
    <N extends number, U extends {
        [index: number]: any;
    }>(lens: PseudoLens<N>, fn: Morphism<U[N], U[N]>): over_number_110<N, U>;
    <K extends string, U extends Record<K, any>>(lens: PseudoLens<K>, fn: Morphism<U[K], U[K]>): over_string_110<K, U>;
    <T, U>(lens: ManualLens<T, U>, fn: Morphism<T, T>): over_manual_110<T, U>;
    <X, V>(lens: PseudoLens<any> | ManualLens<any, V>, fn: Morphism<X, X>): over_general_110<X, V>;
    <U extends {
        [index: number]: any;
    }>(_lens: PH, _fn: PH, target: U): over_number_001<U>;
    <K extends string, U extends Record<K, any>>(_lens: PH, _fn: PH, target: U): over_string_001<K, U>;
    <U>(_lens: PH, _fn: PH, target: U): over_manual_001<U>;
    <V>(_lens: PH, _fn: PH, target: V): over_general_001<V>;
    <N extends number, U extends {
        [index: number]: any;
    }>(_lens: PH, fn: Morphism<U[N], U[N]>, target: U): over_number_011<N, U>;
    <K extends string, U extends Record<K, any>>(_lens: PH, fn: Morphism<U[K], U[K]>, target: U): over_string_011<K, U>;
    <T, U>(_lens: PH, fn: Morphism<T, T>, target: U): over_manual_011<T, U>;
    <X, V>(_lens: PH, fn: Morphism<X, X>, target: V): over_general_011<X, V>;
    <N extends number, U extends {
        [index: number]: any;
    }>(lens: PseudoLens<N>, _fn: PH, target: U): over_number_101<N, U>;
    <K extends string, U extends Record<K, any>>(lens: PseudoLens<K>, _fn: PH, target: U): over_string_101<K, U>;
    <T, U>(lens: ManualLens<T, U>, _fn: PH, target: U): over_manual_101<T, U>;
    <V>(lens: PseudoLens<any> | ManualLens<any, V>, _fn: PH, target: V): over_general_101<V>;
    <N extends number, U extends {
        [index: number]: any;
    }>(lens: PseudoLens<N>, fn: Morphism<U[N], U[N]>, target: U): over_number_111<U>;
    <K extends string, U extends Record<K, any>>(lens: PseudoLens<K>, fn: Morphism<U[K], U[K]>, target: U): over_string_111<K, U>;
    <T, U>(lens: ManualLens<T, U>, fn: Morphism<T, T>, target: U): over_manual_111<U>;
    <$SEL extends "111", $KIND extends "general">(): <X, V>(lens: PseudoLens<any> | ManualLens<any, V>, fn: Morphism<X, X>, target: V) => over_general_111<V>;
    <$SEL extends "111", $KIND extends "manual">(): <T, U>(lens: ManualLens<T, U>, fn: Morphism<T, T>, target: U) => over_manual_111<U>;
    <$SEL extends "111", $KIND extends "string">(): <K extends string, U extends Record<K, any>>(lens: PseudoLens<K>, fn: Morphism<U[K], U[K]>, target: U) => over_string_111<K, U>;
    <$SEL extends "111", $KIND extends "number">(): <N extends number, U extends {
        [index: number]: any;
    }>(lens: PseudoLens<N>, fn: Morphism<U[N], U[N]>, target: U) => over_number_111<U>;
    <$SEL extends "101", $KIND extends "general">(): <V>(lens: PseudoLens<any> | ManualLens<any, V>, _fn: PH, target: V) => over_general_101<V>;
    <$SEL extends "101", $KIND extends "manual">(): <T, U>(lens: ManualLens<T, U>, _fn: PH, target: U) => over_manual_101<T, U>;
    <$SEL extends "101", $KIND extends "string">(): <K extends string, U extends Record<K, any>>(lens: PseudoLens<K>, _fn: PH, target: U) => over_string_101<K, U>;
    <$SEL extends "101", $KIND extends "number">(): <N extends number, U extends {
        [index: number]: any;
    }>(lens: PseudoLens<N>, _fn: PH, target: U) => over_number_101<N, U>;
    <$SEL extends "011", $KIND extends "general">(): <X, V>(_lens: PH, fn: Morphism<X, X>, target: V) => over_general_011<X, V>;
    <$SEL extends "011", $KIND extends "manual">(): <T, U>(_lens: PH, fn: Morphism<T, T>, target: U) => over_manual_011<T, U>;
    <$SEL extends "011", $KIND extends "string">(): <K extends string, U extends Record<K, any>>(_lens: PH, fn: Morphism<U[K], U[K]>, target: U) => over_string_011<K, U>;
    <$SEL extends "011", $KIND extends "number">(): <N extends number, U extends {
        [index: number]: any;
    }>(_lens: PH, fn: Morphism<U[N], U[N]>, target: U) => over_number_011<N, U>;
    <$SEL extends "001", $KIND extends "general">(): <V>(_lens: PH, _fn: PH, target: V) => over_general_001<V>;
    <$SEL extends "001", $KIND extends "manual">(): <U>(_lens: PH, _fn: PH, target: U) => over_manual_001<U>;
    <$SEL extends "001", $KIND extends "string">(): <K extends string, U extends Record<K, any>>(_lens: PH, _fn: PH, target: U) => over_string_001<K, U>;
    <$SEL extends "001", $KIND extends "number">(): <U extends {
        [index: number]: any;
    }>(_lens: PH, _fn: PH, target: U) => over_number_001<U>;
    <$SEL extends "11", $KIND extends "general">(): <X, V>(lens: PseudoLens<any> | ManualLens<any, V>, fn: Morphism<X, X>) => over_general_110<X, V>;
    <$SEL extends "11", $KIND extends "manual">(): <T, U>(lens: ManualLens<T, U>, fn: Morphism<T, T>) => over_manual_110<T, U>;
    <$SEL extends "11", $KIND extends "string">(): <K extends string, U extends Record<K, any>>(lens: PseudoLens<K>, fn: Morphism<U[K], U[K]>) => over_string_110<K, U>;
    <$SEL extends "11", $KIND extends "number">(): <N extends number, U extends {
        [index: number]: any;
    }>(lens: PseudoLens<N>, fn: Morphism<U[N], U[N]>) => over_number_110<N, U>;
    <$SEL extends "01", $KIND extends "general">(): <X>(_lens: PH, fn: Morphism<X, X>) => over_general_010<X>;
    <$SEL extends "01", $KIND extends "manual">(): <T>(_lens: PH, fn: Morphism<T, T>) => over_manual_010<T>;
    <$SEL extends "01", $KIND extends "string">(): <K extends string, U extends Record<K, any>>(_lens: PH, fn: Morphism<U[K], U[K]>) => over_string_010<K, U>;
    <$SEL extends "01", $KIND extends "number">(): <N extends number, U extends {
        [index: number]: any;
    }>(_lens: PH, fn: Morphism<U[N], U[N]>) => over_number_010<N, U>;
    <$SEL extends "1", $KIND extends "general">(): <V>(lens: PseudoLens<any> | ManualLens<any, V>) => over_general_100<V>;
    <$SEL extends "1", $KIND extends "manual">(): <T, U>(lens: ManualLens<T, U>) => over_manual_100<T, U>;
    <$SEL extends "1", $KIND extends "string">(): <K extends string>(lens: PseudoLens<K>) => over_string_100<K>;
    <$SEL extends "1", $KIND extends "number">(): <N extends number>(lens: PseudoLens<N>) => over_number_100<N>;
    <X, V>(lens: PseudoLens<any> | ManualLens<any, V>, fn: Morphism<X, X>, target: V): over_general_111<V>;
};
type over_number_100<N extends number> = {
    <U extends {
        [index: number]: any;
    }>(fn: Morphism<U[N], U[N]>): over_number_110<N, U>;
    <U extends {
        [index: number]: any;
    }>(_fn: PH, target: U): over_number_101<N, U>;
    <$SEL extends "11">(): <U extends {
        [index: number]: any;
    }>(fn: Morphism<U[N], U[N]>, target: U) => over_number_111<U>;
    <$SEL extends "01">(): <U extends {
        [index: number]: any;
    }>(_fn: PH, target: U) => over_number_101<N, U>;
    <$SEL extends "1">(): <U extends {
        [index: number]: any;
    }>(fn: Morphism<U[N], U[N]>) => over_number_110<N, U>;
    <U extends {
        [index: number]: any;
    }>(fn: Morphism<U[N], U[N]>, target: U): over_number_111<U>;
};
type over_string_100<K extends string> = {
    <U extends Record<K, any>>(fn: Morphism<U[K], U[K]>): over_string_110<K, U>;
    <U extends Record<K, any>>(_fn: PH, target: U): over_string_101<K, U>;
    <$SEL extends "11">(): <U extends Record<K, any>>(fn: Morphism<U[K], U[K]>, target: U) => over_string_111<K, U>;
    <$SEL extends "01">(): <U extends Record<K, any>>(_fn: PH, target: U) => over_string_101<K, U>;
    <$SEL extends "1">(): <U extends Record<K, any>>(fn: Morphism<U[K], U[K]>) => over_string_110<K, U>;
    <U extends Record<K, any>>(fn: Morphism<U[K], U[K]>, target: U): over_string_111<K, U>;
};
type over_manual_100<T, U> = {
    (fn: Morphism<T, T>): over_manual_110<T, U>;
    (_fn: PH, target: U): over_manual_101<T, U>;
    <$SEL extends "11">(): (fn: Morphism<T, T>, target: U) => over_manual_111<U>;
    <$SEL extends "01">(): (_fn: PH, target: U) => over_manual_101<T, U>;
    <$SEL extends "1">(): (fn: Morphism<T, T>) => over_manual_110<T, U>;
    (fn: Morphism<T, T>, target: U): over_manual_111<U>;
};
type over_general_100<V> = {
    <X>(fn: Morphism<X, X>): over_general_110<X, V>;
    (_fn: PH, target: V): over_general_101<V>;
    <$SEL extends "11">(): <X>(fn: Morphism<X, X>, target: V) => over_general_111<V>;
    <$SEL extends "01">(): (_fn: PH, target: V) => over_general_101<V>;
    <$SEL extends "1">(): <X>(fn: Morphism<X, X>) => over_general_110<X, V>;
    <X>(fn: Morphism<X, X>, target: V): over_general_111<V>;
};
type over_number_010<N extends number, U extends {
    [index: number]: any;
}> = {
    (lens: PseudoLens<N>): over_number_110<N, U>;
    (_lens: PH, target: U): over_number_011<N, U>;
    <$SEL extends "11">(): (lens: PseudoLens<N>, target: U) => over_number_111<U>;
    <$SEL extends "01">(): (_lens: PH, target: U) => over_number_011<N, U>;
    <$SEL extends "1">(): (lens: PseudoLens<N>) => over_number_110<N, U>;
    (lens: PseudoLens<N>, target: U): over_number_111<U>;
};
type over_string_010<K extends string, U extends Record<K, any>> = {
    (lens: PseudoLens<K>): over_string_110<K, U>;
    (_lens: PH, target: U): over_string_011<K, U>;
    <$SEL extends "11">(): (lens: PseudoLens<K>, target: U) => over_string_111<K, U>;
    <$SEL extends "01">(): (_lens: PH, target: U) => over_string_011<K, U>;
    <$SEL extends "1">(): (lens: PseudoLens<K>) => over_string_110<K, U>;
    (lens: PseudoLens<K>, target: U): over_string_111<K, U>;
};
type over_manual_010<T> = {
    <U>(lens: ManualLens<T, U>): over_manual_110<T, U>;
    <U>(_lens: PH, target: U): over_manual_011<T, U>;
    <$SEL extends "11">(): <U>(lens: ManualLens<T, U>, target: U) => over_manual_111<U>;
    <$SEL extends "01">(): <U>(_lens: PH, target: U) => over_manual_011<T, U>;
    <$SEL extends "1">(): <U>(lens: ManualLens<T, U>) => over_manual_110<T, U>;
    <U>(lens: ManualLens<T, U>, target: U): over_manual_111<U>;
};
type over_general_010<X> = {
    <V>(lens: PseudoLens<any> | ManualLens<any, V>): over_general_110<X, V>;
    <V>(_lens: PH, target: V): over_general_011<X, V>;
    <$SEL extends "11">(): <V>(lens: PseudoLens<any> | ManualLens<any, V>, target: V) => over_general_111<V>;
    <$SEL extends "01">(): <V>(_lens: PH, target: V) => over_general_011<X, V>;
    <$SEL extends "1">(): <V>(lens: PseudoLens<any> | ManualLens<any, V>) => over_general_110<X, V>;
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
    <N extends number>(_lens: PH, fn: Morphism<U[N], U[N]>): over_number_011<N, U>;
    <$SEL extends "11">(): <N extends number>(lens: PseudoLens<N>, fn: Morphism<U[N], U[N]>) => over_number_111<U>;
    <$SEL extends "01">(): <N extends number>(_lens: PH, fn: Morphism<U[N], U[N]>) => over_number_011<N, U>;
    <$SEL extends "1">(): <N extends number>(lens: PseudoLens<N>) => over_number_101<N, U>;
    <N extends number>(lens: PseudoLens<N>, fn: Morphism<U[N], U[N]>): over_number_111<U>;
};
type over_string_001<K extends string, U extends Record<K, any>> = {
    (lens: PseudoLens<K>): over_string_101<K, U>;
    (_lens: PH, fn: Morphism<U[K], U[K]>): over_string_011<K, U>;
    <$SEL extends "11">(): (lens: PseudoLens<K>, fn: Morphism<U[K], U[K]>) => over_string_111<K, U>;
    <$SEL extends "01">(): (_lens: PH, fn: Morphism<U[K], U[K]>) => over_string_011<K, U>;
    <$SEL extends "1">(): (lens: PseudoLens<K>) => over_string_101<K, U>;
    (lens: PseudoLens<K>, fn: Morphism<U[K], U[K]>): over_string_111<K, U>;
};
type over_manual_001<U> = {
    <T>(lens: ManualLens<T, U>): over_manual_101<T, U>;
    <T>(_lens: PH, fn: Morphism<T, T>): over_manual_011<T, U>;
    <$SEL extends "11">(): <T>(lens: ManualLens<T, U>, fn: Morphism<T, T>) => over_manual_111<U>;
    <$SEL extends "01">(): <T>(_lens: PH, fn: Morphism<T, T>) => over_manual_011<T, U>;
    <$SEL extends "1">(): <T>(lens: ManualLens<T, U>) => over_manual_101<T, U>;
    <T>(lens: ManualLens<T, U>, fn: Morphism<T, T>): over_manual_111<U>;
};
type over_general_001<V> = {
    (lens: PseudoLens<any> | ManualLens<any, V>): over_general_101<V>;
    <X>(_lens: PH, fn: Morphism<X, X>): over_general_011<X, V>;
    <$SEL extends "11">(): <X>(lens: PseudoLens<any> | ManualLens<any, V>, fn: Morphism<X, X>) => over_general_111<V>;
    <$SEL extends "01">(): <X>(_lens: PH, fn: Morphism<X, X>) => over_general_011<X, V>;
    <$SEL extends "1">(): (lens: PseudoLens<any> | ManualLens<any, V>) => over_general_101<V>;
    <X>(lens: PseudoLens<any> | ManualLens<any, V>, fn: Morphism<X, X>): over_general_111<V>;
};
type over_number_101<N extends number, U extends {
    [index: number]: any;
}> = {
    (fn: Morphism<U[N], U[N]>): over_number_111<U>;
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
