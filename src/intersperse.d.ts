import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const intersperse: intersperse_00;
type intersperse_00 = {
    /**
     * Creates a new list with the separator interposed between elements.
     *
     * Dispatches to the `intersperse` method of the second argument, if present.
     *
     * @func
     * @memberOf R
     * @since v0.14.0
     * @category List
     * @sig a -> [a] -> [a]
     * @param {*} separator The element to add to the list.
     * @param {Array} list The list to be interposed.
     * @return {Array} The new list.
     * @example
     *
     *      R.intersperse('n', ['ba', 'a', 'a']); //=> ['ba', 'n', 'a', 'n', 'a']
     */
    <T>(separator: T): intersperse_10<T>;
    <U>(_separator: PH, list: List<U>): intersperse_01<U>;
    <$SEL extends "11">(): <T, U>(separator: T, list: List<U>) => intersperse_11<T, U>;
    <$SEL extends "01">(): <U>(_separator: PH, list: List<U>) => intersperse_01<U>;
    <$SEL extends "1">(): <T>(separator: T) => intersperse_10<T>;
    <T, U>(separator: T, list: List<U>): intersperse_11<T, U>;
};
type intersperse_10<T> = {
    <U>(list: List<U>): intersperse_11<T, U>;
};
type intersperse_01<U> = {
    <T>(separator: T): intersperse_11<T, U>;
};
type intersperse_11<T, U> = Array<T | U>;
export = intersperse;
