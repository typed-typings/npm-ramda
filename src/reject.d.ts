import { Dictionary, Filterable, List, Predicate } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const reject: reject_00;
type reject_00 = {
    /**
     * The complement of [`filter`](#filter).
     *
     * Acts as a transducer if a transformer is given in list position. Filterable
     * objects include plain objects or any object that has a filter method such
     * as `Array`.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category List
     * @sig Filterable f => (a -> Boolean) -> f a -> f a
     * @param {Function} pred
     * @param {Array} filterable
     * @return {Array}
     * @see R.filter, R.transduce, R.addIndex
     * @example
     *
     *      var isOdd = (n) => n % 2 === 1;
     *
     *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
     *
     *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
     */
    <T>(fn: Predicate<T>): reject_10<T>;
    <T>(_fn: PH, list: List<T>): reject_list_01<T>;
    <T, U extends Filterable<T>>(_fn: PH, filterable: U): reject_filterable_01<T, U>;
    <T, U extends Dictionary<T>>(_fn: PH, object: U): reject_object_01<T, U>;
    <T, U extends List<T> | Filterable<T> | Dictionary<T>>(_fn: PH, target: U): reject_mixed_01<T, U>;
    <T>(fn: Predicate<T>, list: List<T>): reject_list_11<T>;
    <T, U extends Filterable<T>>(fn: Predicate<T>, filterable: U): reject_filterable_11<T, U>;
    <T, U extends Dictionary<T>>(fn: Predicate<T>, object: U): reject_object_11<T, U>;
    <$SEL extends "11", $KIND extends "mixed">(): <T, U extends List<T> | Filterable<T> | Dictionary<T>>(fn: Predicate<T>, target: U) => reject_mixed_11<T, U>;
    <$SEL extends "11", $KIND extends "object">(): <T, U extends Dictionary<T>>(fn: Predicate<T>, object: U) => reject_object_11<T, U>;
    <$SEL extends "11", $KIND extends "filterable">(): <T, U extends Filterable<T>>(fn: Predicate<T>, filterable: U) => reject_filterable_11<T, U>;
    <$SEL extends "11", $KIND extends "list">(): <T>(fn: Predicate<T>, list: List<T>) => reject_list_11<T>;
    <$SEL extends "01", $KIND extends "mixed">(): <T, U extends List<T> | Filterable<T> | Dictionary<T>>(_fn: PH, target: U) => reject_mixed_01<T, U>;
    <$SEL extends "01", $KIND extends "object">(): <T, U extends Dictionary<T>>(_fn: PH, object: U) => reject_object_01<T, U>;
    <$SEL extends "01", $KIND extends "filterable">(): <T, U extends Filterable<T>>(_fn: PH, filterable: U) => reject_filterable_01<T, U>;
    <$SEL extends "01", $KIND extends "list">(): <T>(_fn: PH, list: List<T>) => reject_list_01<T>;
    <$SEL extends "1">(): <T>(fn: Predicate<T>) => reject_10<T>;
    <T, U extends List<T> | Filterable<T> | Dictionary<T>>(fn: Predicate<T>, target: U): reject_mixed_11<T, U>;
};
type reject_10<T> = {
    (list: List<T>): reject_list_11<T>;
    <U extends Filterable<T>>(filterable: U): reject_filterable_11<T, U>;
    <U extends Dictionary<T>>(object: U): reject_object_11<T, U>;
    <$SEL extends "1", $KIND extends "mixed">(): <U extends List<T> | Filterable<T> | Dictionary<T>>(target: U) => reject_mixed_11<T, U>;
    <$SEL extends "1", $KIND extends "object">(): <U extends Dictionary<T>>(object: U) => reject_object_11<T, U>;
    <$SEL extends "1", $KIND extends "filterable">(): <U extends Filterable<T>>(filterable: U) => reject_filterable_11<T, U>;
    <$SEL extends "1", $KIND extends "list">(): (list: List<T>) => reject_list_11<T>;
    <U extends List<T> | Filterable<T> | Dictionary<T>>(target: U): reject_mixed_11<T, U>;
};
type reject_list_01<T> = {
    (fn: Predicate<T>): reject_list_11<T>;
};
type reject_filterable_01<T, U extends Filterable<T>> = {
    (fn: Predicate<T>): reject_filterable_11<T, U>;
};
type reject_object_01<T, U extends Dictionary<T>> = {
    (fn: Predicate<T>): reject_object_11<T, U>;
};
type reject_mixed_01<T, U extends List<T> | Filterable<T> | Dictionary<T>> = {
    (fn: Predicate<T>): reject_mixed_11<T, U>;
};
type reject_list_11<T> = T[];
type reject_filterable_11<T, U extends Filterable<T>> = U;
type reject_object_11<T, U extends Dictionary<T>> = Partial<U>;
type reject_mixed_11<T, U extends List<T> | Filterable<T> | Dictionary<T>> = T[] | U | Partial<U>;
export = reject;
