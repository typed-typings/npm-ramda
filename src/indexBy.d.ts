import { Dictionary, List, Morphism, Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const indexBy: indexBy_00;
type indexBy_00 = {
    /**
     * Given a function that generates a key, turns a list of objects into an
     * object indexing the objects by the given key. Note that if multiple
     * objects generate the same value for the indexing key only the last value
     * will be included in the generated object.
     *
     * Acts as a transducer if a transformer is given in list position.
     *
     * @func
     * @memberOf R
     * @since v0.19.0
     * @category List
     * @sig (a -> String) -> [{k: v}] -> {k: {k: v}}
     * @param {Function} fn Function :: a -> String
     * @param {Array} array The array of objects to index
     * @return {Object} An object indexing each array element by the given property.
     * @example
     *
     *      var list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
     *      R.indexBy(R.prop('id'), list);
     *      //=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}
     */
    <T>(fn: Morphism<T, Property>): indexBy_10<T>;
    <T>(_fn: PH, list: List<T>): indexBy_01<T>;
    <$SEL extends "11">(): <T>(fn: Morphism<T, Property>, list: List<T>) => indexBy_11<T>;
    <$SEL extends "01">(): <T>(_fn: PH, list: List<T>) => indexBy_01<T>;
    <$SEL extends "1">(): <T>(fn: Morphism<T, Property>) => indexBy_10<T>;
    <T>(fn: Morphism<T, Property>, list: List<T>): indexBy_11<T>;
};
type indexBy_10<T> = {
    (list: List<T>): indexBy_11<T>;
};
type indexBy_01<T> = {
    (fn: Morphism<T, Property>): indexBy_11<T>;
};
type indexBy_11<T> = Dictionary<T>;
export = indexBy;
