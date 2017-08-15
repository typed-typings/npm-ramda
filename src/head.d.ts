import { List } from "./$types";
/**
 * Returns the first element of the given list or string. In some libraries
 * this function is named `first`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 * @param {Array|String} list
 * @return {*}
 * @see R.tail, R.init, R.last
 * @example
 *
 *      R.head(['fi', 'fo', 'fum']); //=> 'fi'
 *      R.head([]); //=> undefined
 *
 *      R.head('abc'); //=> 'a'
 *      R.head(''); //=> ''
 */
declare const head: head_0;
type head_0 = {
    (str: string): head_string_1;
    <T extends [any]>(list: T): head_tuple_1<T>;
    <T extends List<any>>(list: T): head_general_1<T>;
};
type head_string_1 = string;
type head_tuple_1<T extends [any]> = T[0];
type head_general_1<T extends List<any>> = T[0] | undefined;
export = head;
