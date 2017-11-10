import { Functor, List, Morphism } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const map: map_00;
type map_00 = {
    /**
     * Takes a function and
     * a [functor](https://github.com/fantasyland/fantasy-land#functor),
     * applies the function to each of the functor's values, and returns
     * a functor of the same shape.
     *
     * Ramda provides suitable `map` implementations for `Array` and `Object`,
     * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
     *
     * Dispatches to the `map` method of the second argument, if present.
     *
     * Acts as a transducer if a transformer is given in list position.
     *
     * Also treats functions as functors and will compose them together.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category List
     * @sig Functor f => (a -> b) -> f a -> f b
     * @param {Function} fn The function to be called on every element of the input `list`.
     * @param {Array} list The list to be iterated over.
     * @return {Array} The new list.
     * @see R.transduce, R.addIndex
     * @example
     *
     *      var double = x => x * 2;
     *
     *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
     *
     *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
     * @symb R.map(f, [a, b]) = [f(a), f(b)]
     * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
     * @symb R.map(f, functor_o) = functor_o.map(f)
     */
    <T, U>(fn: Morphism<T, U>): map_10<T, U>;
    <T>(_fn: PH, list: List<T>): map_list_01<T>;
    <T>(_fn: PH, functor: Functor<T>): map_functor_01<T>;
    <T, K extends string>(_fn: PH, object: Record<K, T>): map_object_01<T, K>;
    <T, K extends string>(_fn: PH, target: List<T> | Functor<T> | Record<K, T>): map_mixed_01<T, K>;
    <T, U>(fn: Morphism<T, U>, list: List<T>): map_list_11<U>;
    <T, U>(fn: Morphism<T, U>, functor: Functor<T>): map_functor_11<U>;
    <T, U, K extends string>(fn: Morphism<T, U>, object: Record<K, T>): map_object_11<U, K>;
    <$SEL extends "11", $KIND extends "mixed">(): <T, U, K extends string>(fn: Morphism<T, U>, target: List<T> | Functor<T> | Record<K, T>) => map_mixed_11<U, K>;
    <$SEL extends "11", $KIND extends "object">(): <T, U, K extends string>(fn: Morphism<T, U>, object: Record<K, T>) => map_object_11<U, K>;
    <$SEL extends "11", $KIND extends "functor">(): <T, U>(fn: Morphism<T, U>, functor: Functor<T>) => map_functor_11<U>;
    <$SEL extends "11", $KIND extends "list">(): <T, U>(fn: Morphism<T, U>, list: List<T>) => map_list_11<U>;
    <$SEL extends "01", $KIND extends "mixed">(): <T, K extends string>(_fn: PH, target: List<T> | Functor<T> | Record<K, T>) => map_mixed_01<T, K>;
    <$SEL extends "01", $KIND extends "object">(): <T, K extends string>(_fn: PH, object: Record<K, T>) => map_object_01<T, K>;
    <$SEL extends "01", $KIND extends "functor">(): <T>(_fn: PH, functor: Functor<T>) => map_functor_01<T>;
    <$SEL extends "01", $KIND extends "list">(): <T>(_fn: PH, list: List<T>) => map_list_01<T>;
    <$SEL extends "1">(): <T, U>(fn: Morphism<T, U>) => map_10<T, U>;
    <T, U, K extends string>(fn: Morphism<T, U>, target: List<T> | Functor<T> | Record<K, T>): map_mixed_11<U, K>;
};
type map_10<T, U> = {
    (list: List<T>): map_list_11<U>;
    (functor: Functor<T>): map_functor_11<U>;
    <K extends string>(object: Record<K, T>): map_object_11<U, K>;
    <$SEL extends "1", $KIND extends "mixed">(): <K extends string>(target: List<T> | Functor<T> | Record<K, T>) => map_mixed_11<U, K>;
    <$SEL extends "1", $KIND extends "object">(): <K extends string>(object: Record<K, T>) => map_object_11<U, K>;
    <$SEL extends "1", $KIND extends "functor">(): (functor: Functor<T>) => map_functor_11<U>;
    <$SEL extends "1", $KIND extends "list">(): (list: List<T>) => map_list_11<U>;
    <K extends string>(target: List<T> | Functor<T> | Record<K, T>): map_mixed_11<U, K>;
};
type map_list_01<T> = {
    <U>(fn: Morphism<T, U>): map_list_11<U>;
};
type map_functor_01<T> = {
    <U>(fn: Morphism<T, U>): map_functor_11<U>;
};
type map_object_01<T, K extends string> = {
    <U>(fn: Morphism<T, U>): map_object_11<U, K>;
};
type map_mixed_01<T, K extends string> = {
    <U>(fn: Morphism<T, U>): map_mixed_11<U, K>;
};
type map_list_11<U> = U[];
type map_functor_11<U> = Functor<U>;
type map_object_11<U, K extends string> = Record<K, U>;
type map_mixed_11<U, K extends string> = U[] | Functor<U> | Record<K, U>;
export = map;
