import { List, Property } from "./$types";
declare const zipObj: zipObj_00;
type zipObj_00 = {
    /**
     * Creates a new object out of a list of keys and a list of values.
     * Key/value pairing is truncated to the length of the shorter of the two lists.
     * Note: `zipObj` is equivalent to `pipe(zipWith(pair), fromPairs)`.
     *
     * @func
     * @memberOf R
     * @since v0.3.0
     * @category List
     * @sig [String] -> [*] -> {String: *}
     * @param {Array} keys The array that will be properties on the output object.
     * @param {Array} values The list of values on the output object.
     * @return {Object} The object made by pairing up same-indexed elements of `keys` and `values`.
     * @example
     *
     *      R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}
     */
    <T extends string>(a: List<T>): zipObj_string_10<T>;
    (a: List<Property>): zipObj_general_10;
    <T extends string, U>(a: List<T>, b: List<U>): zipObj_string_11<T, U>;
    <$SEL extends "1", $KIND extends "string">(): <T extends string>(a: List<T>) => zipObj_string_10<T>;
    <$SEL extends "1", $KIND extends "general">(): (a: List<Property>) => zipObj_general_10;
    <$SEL extends "11", $KIND extends "string">(): <T extends string, U>(a: List<T>, b: List<U>) => zipObj_string_11<T, U>;
    <$SEL extends "11", $KIND extends "general">(): <U>(a: List<Property>, b: List<U>) => zipObj_general_11<U>;
    <U>(a: List<Property>, b: List<U>): zipObj_general_11<U>;
};
type zipObj_string_10<T extends string> = {
    <U>(b: List<U>): zipObj_string_11<T, U>;
};
type zipObj_general_10 = {
    <U>(b: List<U>): zipObj_general_11<U>;
};
type zipObj_string_11<T extends string, U> = Record<T, U>;
type zipObj_general_11<U> = Record<string, U>;
export = zipObj;
