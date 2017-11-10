import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const splitAt: splitAt_00;
type splitAt_00 = {
    /**
     * Splits a given list or string at a given index.
     *
     * @func
     * @memberOf R
     * @since v0.19.0
     * @category List
     * @sig Number -> [a] -> [[a], [a]]
     * @sig Number -> String -> [String, String]
     * @param {Number} index The index where the array/string is split.
     * @param {Array|String} array The array/string to be split.
     * @return {Array}
     * @example
     *
     *      R.splitAt(1, [1, 2, 3]);          //=> [[1], [2, 3]]
     *      R.splitAt(5, 'hello world');      //=> ['hello', ' world']
     *      R.splitAt(-1, 'foobar');          //=> ['fooba', 'r']
     */
    (index: number): splitAt_10;
    (_index: PH, str: string): splitAt_string_01;
    <T>(_index: PH, list: List<T>): splitAt_list_01<T>;
    <T>(_index: PH, list: string | List<T>): splitAt_mixed_01<T>;
    (index: number, str: string): splitAt_string_11;
    <T>(index: number, list: List<T>): splitAt_list_11<T>;
    <$SEL extends "11", $KIND extends "mixed">(): <T>(index: number, list: string | List<T>) => splitAt_mixed_11<T>;
    <$SEL extends "11", $KIND extends "list">(): <T>(index: number, list: List<T>) => splitAt_list_11<T>;
    <$SEL extends "11", $KIND extends "string">(): (index: number, str: string) => splitAt_string_11;
    <$SEL extends "01", $KIND extends "mixed">(): <T>(_index: PH, list: string | List<T>) => splitAt_mixed_01<T>;
    <$SEL extends "01", $KIND extends "list">(): <T>(_index: PH, list: List<T>) => splitAt_list_01<T>;
    <$SEL extends "01", $KIND extends "string">(): (_index: PH, str: string) => splitAt_string_01;
    <$SEL extends "1">(): (index: number) => splitAt_10;
    <T>(index: number, list: string | List<T>): splitAt_mixed_11<T>;
};
type splitAt_10 = {
    (str: string): splitAt_string_11;
    <T>(list: List<T>): splitAt_list_11<T>;
    <$SEL extends "1", $KIND extends "mixed">(): <T>(list: string | List<T>) => splitAt_mixed_11<T>;
    <$SEL extends "1", $KIND extends "list">(): <T>(list: List<T>) => splitAt_list_11<T>;
    <$SEL extends "1", $KIND extends "string">(): (str: string) => splitAt_string_11;
    <T>(list: string | List<T>): splitAt_mixed_11<T>;
};
type splitAt_string_01 = {
    (index: number): splitAt_string_11;
};
type splitAt_list_01<T> = {
    (index: number): splitAt_list_11<T>;
};
type splitAt_mixed_01<T> = {
    (index: number): splitAt_mixed_11<T>;
};
type splitAt_string_11 = [string, string];
type splitAt_list_11<T> = [T[], T[]];
type splitAt_mixed_11<T> = [string, string] | [T[], T[]];
export = splitAt;
