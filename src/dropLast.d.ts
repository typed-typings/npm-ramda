import { List } from "./$types";
/**
 * Returns a list containing all but the last `n` elements of the given `list`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n The number of elements of `list` to skip.
 * @param {Array} list The list of elements to consider.
 * @return {Array} A copy of the list with only the first `list.length - n` elements
 * @see R.takeLast, R.drop, R.dropWhile, R.dropLastWhile
 * @example
 *
 *      R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.dropLast(3, ['foo', 'bar', 'baz']); //=> []
 *      R.dropLast(4, ['foo', 'bar', 'baz']); //=> []
 *      R.dropLast(3, 'ramda');               //=> 'ra'
 */
declare const dropLast: dropLast_00;
type dropLast_00 = {
    (n: number): dropLast_10;
    (n: number, str: string): dropLast_string_11;
    <T>(n: number, list: List<T>): dropLast_list_11<T>;
    <$SEL extends "1">(): (n: number) => dropLast_10;
    <$SEL extends "11", $KIND extends "string">(): (n: number, str: string) => dropLast_string_11;
    <$SEL extends "11", $KIND extends "list">(): <T>(n: number, list: List<T>) => dropLast_list_11<T>;
    <$SEL extends "11", $KIND extends "mixed">(): <T>(n: number, list: string | List<T>) => dropLast_mixed_11<T>;
    <T>(n: number, list: string | List<T>): dropLast_mixed_11<T>;
};
type dropLast_10 = {
    (str: string): dropLast_string_11;
    <T>(list: List<T>): dropLast_list_11<T>;
    <$SEL extends "1", $KIND extends "string">(): (str: string) => dropLast_string_11;
    <$SEL extends "1", $KIND extends "list">(): <T>(list: List<T>) => dropLast_list_11<T>;
    <$SEL extends "1", $KIND extends "mixed">(): <T>(list: string | List<T>) => dropLast_mixed_11<T>;
    <T>(list: string | List<T>): dropLast_mixed_11<T>;
};
type dropLast_string_11 = string;
type dropLast_list_11<T> = T[];
type dropLast_mixed_11<T> = string | T[];
export = dropLast;
