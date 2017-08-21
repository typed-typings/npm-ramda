import { List } from "./$types";
declare const dropRepeats: dropRepeats_0;
type dropRepeats_0 = {
    /**
     * Returns a new list without any consecutively repeating elements.
     * [`R.equals`](#equals) is used to determine equality.
     *
     * Acts as a transducer if a transformer is given in list position.
     *
     * @func
     * @memberOf R
     * @since v0.14.0
     * @category List
     * @sig [a] -> [a]
     * @param {Array} list The array to consider.
     * @return {Array} `list` without repeating elements.
     * @see R.transduce
     * @example
     *
     *     R.dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]); //=> [1, 2, 3, 4, 2]
     */
    <T>(list: List<T>): dropRepeats_1<T>;
};
type dropRepeats_1<T> = T[];
export = dropRepeats;
