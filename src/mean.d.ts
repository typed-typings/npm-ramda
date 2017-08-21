import { List } from "./$types";
declare const mean: mean_0;
type mean_0 = {
    /**
     * Returns the mean of the given list of numbers.
     *
     * @func
     * @memberOf R
     * @since v0.14.0
     * @category Math
     * @sig [Number] -> Number
     * @param {Array} list
     * @return {Number}
     * @see R.median
     * @example
     *
     *      R.mean([2, 7, 9]); //=> 6
     *      R.mean([]); //=> NaN
     */
    (numbers: List<number>): mean_1;
};
type mean_1 = number;
export = mean;
