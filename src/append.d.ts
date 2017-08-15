import { List } from "./$types";
/**
 * Returns a new list containing the contents of the given list, followed by
 * the given element.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The element to add to the end of the new list.
 * @param {Array} list The list of elements to add a new item to.
 *        list.
 * @return {Array} A new list containing the elements of the old list followed by `el`.
 * @see R.prepend
 * @example
 *
 *      R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
 *      R.append('tests', []); //=> ['tests']
 *      R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
 */
declare const append: append_00;
type append_00 = {
    <T>(value: T): append_10<T>;
    <T, U>(value: T, list: List<U>): append_11<T, U>;
};
type append_10<T> = {
    <U>(list: List<U>): append_11<T, U>;
};
type append_01<U> = {
    <T>(value: T): append_11<T, U>;
};
type append_11<T, U> = (T | U)[];
export = append;
