import { Ordered } from "./$types";
/**
 * Returns `true` if the first argument is greater than or equal to the second;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {Number} a
 * @param {Number} b
 * @return {Boolean}
 * @see R.lte
 * @example
 *
 *      R.gte(2, 1); //=> true
 *      R.gte(2, 2); //=> true
 *      R.gte(2, 3); //=> false
 *      R.gte('a', 'z'); //=> false
 *      R.gte('z', 'a'); //=> true
 */
declare const gte: gte_00;
type gte_00 = {
    <T extends Ordered>(a: T): gte_10<T>;
    <T extends Ordered>(a: T, b: T): gte_11;
};
type gte_10<T extends Ordered> = {
    (b: T): gte_11;
};
type gte_11 = boolean;
export = gte;
