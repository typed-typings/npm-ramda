import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const aperture: aperture_00;
type aperture_00 = {
    /**
     * Returns a new list, composed of n-tuples of consecutive elements. If `n` is
     * greater than the length of the list, an empty list is returned.
     *
     * Acts as a transducer if a transformer is given in list position.
     *
     * @func
     * @memberOf R
     * @since v0.12.0
     * @category List
     * @sig Number -> [a] -> [[a]]
     * @param {Number} n The size of the tuples to create
     * @param {Array} list The list to split into `n`-length tuples
     * @return {Array} The resulting list of `n`-length tuples
     * @see R.transduce
     * @example
     *
     *      R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
     *      R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
     *      R.aperture(7, [1, 2, 3, 4, 5]); //=> []
     */
    (n: number): aperture_10;
    <T>(_n: PH, list: List<T>): aperture_01<T>;
    <$SEL extends "11">(): <T>(n: number, list: List<T>) => aperture_11<T>;
    <$SEL extends "01">(): <T>(_n: PH, list: List<T>) => aperture_01<T>;
    <$SEL extends "1">(): (n: number) => aperture_10;
    <T>(n: number, list: List<T>): aperture_11<T>;
};
type aperture_10 = {
    <T>(list: List<T>): aperture_11<T>;
};
type aperture_01<T> = {
    (n: number): aperture_11<T>;
};
type aperture_11<T> = T[][];
export = aperture;
