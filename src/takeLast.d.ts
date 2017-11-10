import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const takeLast: takeLast_00;
type takeLast_00 = {
    /**
     * Returns a new list containing the last `n` elements of the given list.
     * If `n > list.length`, returns a list of `list.length` elements.
     *
     * @func
     * @memberOf R
     * @since v0.16.0
     * @category List
     * @sig Number -> [a] -> [a]
     * @sig Number -> String -> String
     * @param {Number} n The number of elements to return.
     * @param {Array} xs The collection to consider.
     * @return {Array}
     * @see R.dropLast
     * @example
     *
     *      R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
     *      R.takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
     *      R.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
     *      R.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
     *      R.takeLast(3, 'ramda');               //=> 'mda'
     */
    (n: number): takeLast_10;
    (_n: PH, str: string): takeLast_string_01;
    <T>(_n: PH, list: List<T>): takeLast_list_01<T>;
    <T>(_n: PH, list: string | List<T>): takeLast_mixed_01<T>;
    (n: number, str: string): takeLast_string_11;
    <T>(n: number, list: List<T>): takeLast_list_11<T>;
    <$SEL extends "11", $KIND extends "mixed">(): <T>(n: number, list: string | List<T>) => takeLast_mixed_11<T>;
    <$SEL extends "11", $KIND extends "list">(): <T>(n: number, list: List<T>) => takeLast_list_11<T>;
    <$SEL extends "11", $KIND extends "string">(): (n: number, str: string) => takeLast_string_11;
    <$SEL extends "01", $KIND extends "mixed">(): <T>(_n: PH, list: string | List<T>) => takeLast_mixed_01<T>;
    <$SEL extends "01", $KIND extends "list">(): <T>(_n: PH, list: List<T>) => takeLast_list_01<T>;
    <$SEL extends "01", $KIND extends "string">(): (_n: PH, str: string) => takeLast_string_01;
    <$SEL extends "1">(): (n: number) => takeLast_10;
    <T>(n: number, list: string | List<T>): takeLast_mixed_11<T>;
};
type takeLast_10 = {
    (str: string): takeLast_string_11;
    <T>(list: List<T>): takeLast_list_11<T>;
    <$SEL extends "1", $KIND extends "mixed">(): <T>(list: string | List<T>) => takeLast_mixed_11<T>;
    <$SEL extends "1", $KIND extends "list">(): <T>(list: List<T>) => takeLast_list_11<T>;
    <$SEL extends "1", $KIND extends "string">(): (str: string) => takeLast_string_11;
    <T>(list: string | List<T>): takeLast_mixed_11<T>;
};
type takeLast_string_01 = {
    (n: number): takeLast_string_11;
};
type takeLast_list_01<T> = {
    (n: number): takeLast_list_11<T>;
};
type takeLast_mixed_01<T> = {
    (n: number): takeLast_mixed_11<T>;
};
type takeLast_string_11 = string;
type takeLast_list_11<T> = T[];
type takeLast_mixed_11<T> = string | T[];
export = takeLast;
