import { Morphism, Reduced, Transformer } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const into: into_000;
type into_000 = {
    /**
     * Transforms the items of the list with the transducer and appends the
     * transformed items to the accumulator using an appropriate iterator function
     * based on the accumulator type.
     *
     * The accumulator can be an array, string, object or a transformer. Iterated
     * items will be appended to arrays and concatenated to strings. Objects will
     * be merged directly or 2-item arrays will be merged as key, value pairs.
     *
     * The accumulator can also be a transformer object that provides a 2-arity
     * reducing iterator function, step, 0-arity initial value function, init, and
     * 1-arity result extraction function result. The step function is used as the
     * iterator function in reduce. The result function is used to convert the
     * final accumulator into the return type and in most cases is R.identity. The
     * init function is used to provide the initial accumulator.
     *
     * The iteration is performed with [`R.reduce`](#reduce) after initializing the
     * transducer.
     *
     * @func
     * @memberOf R
     * @since v0.12.0
     * @category List
     * @sig a -> (b -> b) -> [c] -> a
     * @param {*} acc The initial accumulator value.
     * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
     * @param {Array} list The list to iterate over.
     * @return {*} The final, accumulated value.
     * @example
     *
     *      var numbers = [1, 2, 3, 4];
     *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
     *
     *      R.into([], transducer, numbers); //=> [2, 3]
     *
     *      var intoArray = R.into([]);
     *      intoArray(transducer, numbers); //=> [2, 3]
     */
    <T, U>(initial: Transformer<T, U, U>): into_transformer_100<T, U>;
    <V extends string | object>(initial: V): into_base_100<V>;
    <T, U>(initial: Transformer<T, U, U> | U): into_mixed_100<T, U>;
    <T, U>(_initial: PH, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)): into_transformer_010<T, U>;
    <T, V extends string | object>(_initial: PH, transducer: Morphism<T[], V> | ((transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>)): into_base_010<T, V>;
    <T, U>(_initial: PH, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)): into_mixed_010<T, U>;
    <T, U>(initial: Transformer<T, U, U>, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)): into_transformer_110<T, U>;
    <T, V extends string | object>(initial: V, transducer: Morphism<T[], V> | ((transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>)): into_base_110<T, V>;
    <T, U>(initial: Transformer<T, U, U> | U, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)): into_mixed_110<T, U>;
    <T>(_initial: PH, _transducer: PH, values: T[]): into_001<T>;
    <T, U>(_initial: PH, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>), values: T[]): into_transformer_011<T, U>;
    <T, V extends string | object>(_initial: PH, transducer: Morphism<T[], V> | ((transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>), values: T[]): into_base_011<T, V>;
    <T, U>(_initial: PH, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>), values: T[]): into_mixed_011<T, U>;
    <T, U>(initial: Transformer<T, U, U>, _transducer: PH, values: T[]): into_transformer_101<T, U>;
    <T, V extends string | object>(initial: V, _transducer: PH, values: T[]): into_base_101<T, V>;
    <T, U>(initial: Transformer<T, U, U> | U, _transducer: PH, values: T[]): into_mixed_101<T, U>;
    <T, U>(initial: Transformer<T, U, U>, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>), values: T[]): into_transformer_111<U>;
    <T, V extends string | object>(initial: V, transducer: Morphism<T[], V> | ((transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>), values: T[]): into_base_111<V>;
    <$SEL extends "111", $KIND extends "mixed">(): <T, U>(initial: Transformer<T, U, U> | U, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>), values: T[]) => into_mixed_111<U>;
    <$SEL extends "111", $KIND extends "base">(): <T, V extends string | object>(initial: V, transducer: Morphism<T[], V> | ((transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>), values: T[]) => into_base_111<V>;
    <$SEL extends "111", $KIND extends "transformer">(): <T, U>(initial: Transformer<T, U, U>, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>), values: T[]) => into_transformer_111<U>;
    <$SEL extends "101", $KIND extends "mixed">(): <T, U>(initial: Transformer<T, U, U> | U, _transducer: PH, values: T[]) => into_mixed_101<T, U>;
    <$SEL extends "101", $KIND extends "base">(): <T, V extends string | object>(initial: V, _transducer: PH, values: T[]) => into_base_101<T, V>;
    <$SEL extends "101", $KIND extends "transformer">(): <T, U>(initial: Transformer<T, U, U>, _transducer: PH, values: T[]) => into_transformer_101<T, U>;
    <$SEL extends "011", $KIND extends "mixed">(): <T, U>(_initial: PH, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>), values: T[]) => into_mixed_011<T, U>;
    <$SEL extends "011", $KIND extends "base">(): <T, V extends string | object>(_initial: PH, transducer: Morphism<T[], V> | ((transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>), values: T[]) => into_base_011<T, V>;
    <$SEL extends "011", $KIND extends "transformer">(): <T, U>(_initial: PH, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>), values: T[]) => into_transformer_011<T, U>;
    <$SEL extends "001">(): <T>(_initial: PH, _transducer: PH, values: T[]) => into_001<T>;
    <$SEL extends "11", $KIND extends "mixed">(): <T, U>(initial: Transformer<T, U, U> | U, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)) => into_mixed_110<T, U>;
    <$SEL extends "11", $KIND extends "base">(): <T, V extends string | object>(initial: V, transducer: Morphism<T[], V> | ((transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>)) => into_base_110<T, V>;
    <$SEL extends "11", $KIND extends "transformer">(): <T, U>(initial: Transformer<T, U, U>, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)) => into_transformer_110<T, U>;
    <$SEL extends "01", $KIND extends "mixed">(): <T, U>(_initial: PH, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)) => into_mixed_010<T, U>;
    <$SEL extends "01", $KIND extends "base">(): <T, V extends string | object>(_initial: PH, transducer: Morphism<T[], V> | ((transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>)) => into_base_010<T, V>;
    <$SEL extends "01", $KIND extends "transformer">(): <T, U>(_initial: PH, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)) => into_transformer_010<T, U>;
    <$SEL extends "1", $KIND extends "mixed">(): <T, U>(initial: Transformer<T, U, U> | U) => into_mixed_100<T, U>;
    <$SEL extends "1", $KIND extends "base">(): <V extends string | object>(initial: V) => into_base_100<V>;
    <$SEL extends "1", $KIND extends "transformer">(): <T, U>(initial: Transformer<T, U, U>) => into_transformer_100<T, U>;
    <T, U>(initial: Transformer<T, U, U> | U, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>), values: T[]): into_mixed_111<U>;
};
type into_001<T> = {
    <U>(initial: Transformer<T, U, U>): into_transformer_101<T, U>;
    <V extends string | object>(initial: V): into_base_101<T, V>;
    <U>(initial: Transformer<T, U, U> | U): into_mixed_101<T, U>;
    <U>(_initial: PH, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)): into_transformer_011<T, U>;
    <V extends string | object>(_initial: PH, transducer: Morphism<T[], V> | ((transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>)): into_base_011<T, V>;
    <U>(_initial: PH, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)): into_mixed_011<T, U>;
    <U>(initial: Transformer<T, U, U>, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)): into_transformer_111<U>;
    <V extends string | object>(initial: V, transducer: Morphism<T[], V> | ((transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>)): into_base_111<V>;
    <$SEL extends "11", $KIND extends "mixed">(): <U>(initial: Transformer<T, U, U> | U, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)) => into_mixed_111<U>;
    <$SEL extends "11", $KIND extends "base">(): <V extends string | object>(initial: V, transducer: Morphism<T[], V> | ((transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>)) => into_base_111<V>;
    <$SEL extends "11", $KIND extends "transformer">(): <U>(initial: Transformer<T, U, U>, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)) => into_transformer_111<U>;
    <$SEL extends "01", $KIND extends "mixed">(): <U>(_initial: PH, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)) => into_mixed_011<T, U>;
    <$SEL extends "01", $KIND extends "base">(): <V extends string | object>(_initial: PH, transducer: Morphism<T[], V> | ((transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>)) => into_base_011<T, V>;
    <$SEL extends "01", $KIND extends "transformer">(): <U>(_initial: PH, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)) => into_transformer_011<T, U>;
    <$SEL extends "1", $KIND extends "mixed">(): <U>(initial: Transformer<T, U, U> | U) => into_mixed_101<T, U>;
    <$SEL extends "1", $KIND extends "base">(): <V extends string | object>(initial: V) => into_base_101<T, V>;
    <$SEL extends "1", $KIND extends "transformer">(): <U>(initial: Transformer<T, U, U>) => into_transformer_101<T, U>;
    <U>(initial: Transformer<T, U, U> | U, transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)): into_mixed_111<U>;
};
type into_transformer_100<T, U> = {
    (transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)): into_transformer_110<T, U>;
    (_transducer: PH, values: T[]): into_transformer_101<T, U>;
    <$SEL extends "11">(): (transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>), values: T[]) => into_transformer_111<U>;
    <$SEL extends "01">(): (_transducer: PH, values: T[]) => into_transformer_101<T, U>;
    <$SEL extends "1">(): (transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)) => into_transformer_110<T, U>;
    (transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>), values: T[]): into_transformer_111<U>;
};
type into_base_100<V extends string | object> = {
    <T>(transducer: Morphism<T[], V> | ((transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>)): into_base_110<T, V>;
    <T>(_transducer: PH, values: T[]): into_base_101<T, V>;
    <$SEL extends "11">(): <T>(transducer: Morphism<T[], V> | ((transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>), values: T[]) => into_base_111<V>;
    <$SEL extends "01">(): <T>(_transducer: PH, values: T[]) => into_base_101<T, V>;
    <$SEL extends "1">(): <T>(transducer: Morphism<T[], V> | ((transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>)) => into_base_110<T, V>;
    <T>(transducer: Morphism<T[], V> | ((transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>), values: T[]): into_base_111<V>;
};
type into_mixed_100<T, U> = {
    (transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)): into_mixed_110<T, U>;
    (_transducer: PH, values: T[]): into_mixed_101<T, U>;
    <$SEL extends "11">(): (transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>), values: T[]) => into_mixed_111<U>;
    <$SEL extends "01">(): (_transducer: PH, values: T[]) => into_mixed_101<T, U>;
    <$SEL extends "1">(): (transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)) => into_mixed_110<T, U>;
    (transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>), values: T[]): into_mixed_111<U>;
};
type into_transformer_010<T, U> = {
    (initial: Transformer<T, U, U>): into_transformer_110<T, U>;
    (_initial: PH, values: T[]): into_transformer_011<T, U>;
    <$SEL extends "11">(): (initial: Transformer<T, U, U>, values: T[]) => into_transformer_111<U>;
    <$SEL extends "01">(): (_initial: PH, values: T[]) => into_transformer_011<T, U>;
    <$SEL extends "1">(): (initial: Transformer<T, U, U>) => into_transformer_110<T, U>;
    (initial: Transformer<T, U, U>, values: T[]): into_transformer_111<U>;
};
type into_base_010<T, V extends string | object> = {
    (initial: V): into_base_110<T, V>;
    (_initial: PH, values: T[]): into_base_011<T, V>;
    <$SEL extends "11">(): (initial: V, values: T[]) => into_base_111<V>;
    <$SEL extends "01">(): (_initial: PH, values: T[]) => into_base_011<T, V>;
    <$SEL extends "1">(): (initial: V) => into_base_110<T, V>;
    (initial: V, values: T[]): into_base_111<V>;
};
type into_mixed_010<T, U> = {
    (initial: Transformer<T, U, U> | U): into_mixed_110<T, U>;
    (_initial: PH, values: T[]): into_mixed_011<T, U>;
    <$SEL extends "11">(): (initial: Transformer<T, U, U> | U, values: T[]) => into_mixed_111<U>;
    <$SEL extends "01">(): (_initial: PH, values: T[]) => into_mixed_011<T, U>;
    <$SEL extends "1">(): (initial: Transformer<T, U, U> | U) => into_mixed_110<T, U>;
    (initial: Transformer<T, U, U> | U, values: T[]): into_mixed_111<U>;
};
type into_transformer_110<T, U> = {
    (values: T[]): into_transformer_111<U>;
};
type into_base_110<T, V extends string | object> = {
    (values: T[]): into_base_111<V>;
};
type into_mixed_110<T, U> = {
    (values: T[]): into_mixed_111<U>;
};
type into_transformer_101<T, U> = {
    (transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)): into_transformer_111<U>;
};
type into_base_101<T, V extends string | object> = {
    (transducer: Morphism<T[], V> | ((transformer: Transformer<T, V, V>) => (accumulator: V, value: T) => V | Reduced<V>)): into_base_111<V>;
};
type into_mixed_101<T, U> = {
    (transducer: Morphism<T[], U> | ((transformer: Transformer<T, U, U>) => (accumulator: U, value: T) => U | Reduced<U>)): into_mixed_111<U>;
};
type into_transformer_011<T, U> = {
    (initial: Transformer<T, U, U>): into_transformer_111<U>;
};
type into_base_011<T, V extends string | object> = {
    (initial: V): into_base_111<V>;
};
type into_mixed_011<T, U> = {
    (initial: Transformer<T, U, U> | U): into_mixed_111<U>;
};
type into_transformer_111<U> = U;
type into_base_111<V extends string | object> = V;
type into_mixed_111<U> = U;
export = into;
