import { Ordered } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const lte: lte_00;
type lte_00 = {
    /**
     * Returns `true` if the first argument is less than or equal to the second;
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
     * @see R.gte
     * @example
     *
     *      R.lte(2, 1); //=> false
     *      R.lte(2, 2); //=> true
     *      R.lte(2, 3); //=> true
     *      R.lte('a', 'z'); //=> true
     *      R.lte('z', 'a'); //=> false
     */
    <T extends Ordered>(a: T): lte_10<T>;
    <T extends Ordered>(_a: PH, b: T): lte_01<T>;
    <$SEL extends "11">(): <T extends Ordered>(a: T, b: T) => lte_11;
    <$SEL extends "01">(): <T extends Ordered>(_a: PH, b: T) => lte_01<T>;
    <$SEL extends "1">(): <T extends Ordered>(a: T) => lte_10<T>;
    <T extends Ordered>(a: T, b: T): lte_11;
};
type lte_10<T extends Ordered> = {
    (b: T): lte_11;
};
type lte_01<T extends Ordered> = {
    (a: T): lte_11;
};
type lte_11 = boolean;
export = lte;
