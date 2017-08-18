import { List } from "./$types";
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
declare const takeLast: takeLast_00;
type takeLast_00 = {
    (n: number): takeLast_10;
    (n: number, str: string): takeLast_string_11;
    <T>(n: number, list: List<T>): takeLast_list_11<T>;
    <T>(n: number, list: string | List<T>): takeLast_mixed_11<T>;
};
type takeLast_10 = {
    (str: string): takeLast_string_11;
    <T>(list: List<T>): takeLast_list_11<T>;
    <T>(list: string | List<T>): takeLast_mixed_11<T>;
};
type takeLast_string_11 = string;
type takeLast_list_11<T> = T[];
type takeLast_mixed_11<T> = string | T[];
export = takeLast;
