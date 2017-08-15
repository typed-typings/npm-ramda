import { List } from "./$types";
/**
 * Returns the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.init, R.head, R.tail
 * @example
 *
 *      R.last(['fi', 'fo', 'fum']); //=> 'fum'
 *      R.last([]); //=> undefined
 *
 *      R.last('abc'); //=> 'c'
 *      R.last(''); //=> ''
 */
declare const last: last_0;
type last_0 = {
    (str: string): last_string_1;
    <T extends List<any>>(list: T): last_general_1<T>;
};
type last_string_1 = string;
type last_general_1<T extends List<any>> = T[number] | undefined;
export = last;
