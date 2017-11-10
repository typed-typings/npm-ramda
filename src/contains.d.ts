import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const contains: contains_00;
type contains_00 = {
    /**
     * Returns `true` if the specified value is equal, in [`R.equals`](#equals)
     * terms, to at least one element of the given list; `false` otherwise.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category List
     * @sig a -> [a] -> Boolean
     * @param {Object} a The item to compare against.
     * @param {Array} list The array to consider.
     * @return {Boolean} `true` if an equivalent item is in the list, `false` otherwise.
     * @see R.any
     * @example
     *
     *      R.contains(3, [1, 2, 3]); //=> true
     *      R.contains(4, [1, 2, 3]); //=> false
     *      R.contains({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
     *      R.contains([42], [[42]]); //=> true
     */
    <T>(value: T): contains_10<T>;
    <T>(_value: PH, list: List<T>): contains_01<T>;
    <$SEL extends "11">(): <T>(value: T, list: List<T>) => contains_11;
    <$SEL extends "01">(): <T>(_value: PH, list: List<T>) => contains_01<T>;
    <$SEL extends "1">(): <T>(value: T) => contains_10<T>;
    <T>(value: T, list: List<T>): contains_11;
};
type contains_10<T> = {
    (list: List<T>): contains_11;
};
type contains_01<T> = {
    (value: T): contains_11;
};
type contains_11 = boolean;
export = contains;
