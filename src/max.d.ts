import { Ordered } from "./$types";
/**
 * Returns the larger of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.maxBy, R.min
 * @example
 *
 *      R.max(789, 123); //=> 789
 *      R.max('a', 'b'); //=> 'b'
 */
declare const max: max_00;
type max_00 = {
    <T extends Ordered>(a: T): max_10<T>;
    <T extends Ordered>(a: T, b: T): max_11<T>;
};
type max_10<T extends Ordered> = {
    (b: T): max_11<T>;
};
type max_01<T extends Ordered> = {
    (a: T): max_11<T>;
};
type max_11<T extends Ordered> = T;
export = max;
