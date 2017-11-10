import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const lastIndexOf: lastIndexOf_00;
type lastIndexOf_00 = {
    /**
     * Returns the position of the last occurrence of an item in an array, or -1 if
     * the item is not included in the array. [`R.equals`](#equals) is used to
     * determine equality.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category List
     * @sig a -> [a] -> Number
     * @param {*} target The item to find.
     * @param {Array} xs The array to search in.
     * @return {Number} the index of the target, or -1 if the target is not found.
     * @see R.indexOf
     * @example
     *
     *      R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); //=> 6
     *      R.lastIndexOf(10, [1,2,3,4]); //=> -1
     */
    <T>(target: T): lastIndexOf_10<T>;
    <T>(_target: PH, list: List<T>): lastIndexOf_01<T>;
    <$SEL extends "11">(): <T>(target: T, list: List<T>) => lastIndexOf_11;
    <$SEL extends "01">(): <T>(_target: PH, list: List<T>) => lastIndexOf_01<T>;
    <$SEL extends "1">(): <T>(target: T) => lastIndexOf_10<T>;
    <T>(target: T, list: List<T>): lastIndexOf_11;
};
type lastIndexOf_10<T> = {
    (list: List<T>): lastIndexOf_11;
};
type lastIndexOf_01<T> = {
    (target: T): lastIndexOf_11;
};
type lastIndexOf_11 = number;
export = lastIndexOf;
