import { List } from "./$types";
declare const transpose: transpose_0;
type transpose_0 = {
    /**
     * Transposes the rows and columns of a 2D list.
     * When passed a list of `n` lists of length `x`,
     * returns a list of `x` lists of length `n`.
     *
     *
     * @func
     * @memberOf R
     * @since v0.19.0
     * @category List
     * @sig [[a]] -> [[a]]
     * @param {Array} list A 2D list
     * @return {Array} A 2D list
     * @example
     *
     *      R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]) //=> [[1, 2, 3], ['a', 'b', 'c']]
     *      R.transpose([[1, 2, 3], ['a', 'b', 'c']]) //=> [[1, 'a'], [2, 'b'], [3, 'c']]
     *
     *      // If some of the rows are shorter than the following rows, their elements are skipped:
     *      R.transpose([[10, 11], [20], [], [30, 31, 32]]) //=> [[10, 20, 30], [11, 31], [32]]
     * @symb R.transpose([[a], [b], [c]]) = [a, b, c]
     * @symb R.transpose([[a, b], [c, d]]) = [[a, c], [b, d]]
     * @symb R.transpose([[a, b], [c]]) = [[a, c], [b]]
     */
    <T>(list: List<List<T>>): transpose_1<T>;
};
type transpose_1<T> = T[][];
export = transpose;
