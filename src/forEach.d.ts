import { List, Tap } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const forEach: forEach_00;
type forEach_00 = {
    /**
     * Iterate over an input `list`, calling a provided function `fn` for each
     * element in the list.
     *
     * `fn` receives one argument: *(value)*.
     *
     * Note: `R.forEach` does not skip deleted or unassigned indices (sparse
     * arrays), unlike the native `Array.prototype.forEach` method. For more
     * details on this behavior, see:
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description
     *
     * Also note that, unlike `Array.prototype.forEach`, Ramda's `forEach` returns
     * the original array. In some libraries this function is named `each`.
     *
     * Dispatches to the `forEach` method of the second argument, if present.
     *
     * @func
     * @memberOf R
     * @since v0.1.1
     * @category List
     * @sig (a -> *) -> [a] -> [a]
     * @param {Function} fn The function to invoke. Receives one argument, `value`.
     * @param {Array} list The list to iterate over.
     * @return {Array} The original list.
     * @see R.addIndex
     * @example
     *
     *      var printXPlusFive = x => console.log(x + 5);
     *      R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
     *      // logs 6
     *      // logs 7
     *      // logs 8
     * @symb R.forEach(f, [a, b, c]) = [a, b, c]
     */
    <T>(fn: Tap<T>): forEach_10<T>;
    <T, U extends List<T>>(_fn: PH, list: U): forEach_01<T, U>;
    <$SEL extends "11">(): <T, U extends List<T>>(fn: Tap<T>, list: U) => forEach_11<T, U>;
    <$SEL extends "01">(): <T, U extends List<T>>(_fn: PH, list: U) => forEach_01<T, U>;
    <$SEL extends "1">(): <T>(fn: Tap<T>) => forEach_10<T>;
    <T, U extends List<T>>(fn: Tap<T>, list: U): forEach_11<T, U>;
};
type forEach_10<T> = {
    <U extends List<T>>(list: U): forEach_11<T, U>;
};
type forEach_01<T, U extends List<T>> = {
    (fn: Tap<T>): forEach_11<T, U>;
};
type forEach_11<T, U extends List<T>> = U;
export = forEach;
