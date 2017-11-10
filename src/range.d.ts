import { Placeholder as PH } from "./$placeholder";
declare const range: range_00;
type range_00 = {
    /**
     * Returns a list of numbers from `from` (inclusive) to `to` (exclusive).
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category List
     * @sig Number -> Number -> [Number]
     * @param {Number} from The first number in the list.
     * @param {Number} to One more than the last number in the list.
     * @return {Array} The list of numbers in tthe set `[a, b)`.
     * @example
     *
     *      R.range(1, 5);    //=> [1, 2, 3, 4]
     *      R.range(50, 53);  //=> [50, 51, 52]
     */
    (from: number): range_10;
    (_from: PH, to: number): range_01;
    <$SEL extends "11">(): (from: number, to: number) => range_11;
    <$SEL extends "01">(): (_from: PH, to: number) => range_01;
    <$SEL extends "1">(): (from: number) => range_10;
    (from: number, to: number): range_11;
};
type range_10 = {
    (to: number): range_11;
};
type range_01 = {
    (from: number): range_11;
};
type range_11 = number[];
export = range;
