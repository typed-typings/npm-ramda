import { Placeholder as PH } from "./$placeholder";
declare const concat: concat_00;
type concat_00 = {
    /**
     * Returns the result of concatenating the given lists or strings.
     *
     * Note: `R.concat` expects both arguments to be of the same type,
     * unlike the native `Array.prototype.concat` method. It will throw
     * an error if you `concat` an Array with a non-Array value.
     *
     * Dispatches to the `concat` method of the first argument, if present.
     * Can also concatenate two members of a [fantasy-land
     * compatible semigroup](https://github.com/fantasyland/fantasy-land#semigroup).
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category List
     * @sig [a] -> [a] -> [a]
     * @sig String -> String -> String
     * @param {Array|String} firstList The first list
     * @param {Array|String} secondList The second list
     * @return {Array|String} A list consisting of the elements of `firstList` followed by the elements of
     * `secondList`.
     *
     * @example
     *
     *      R.concat('ABC', 'DEF'); // 'ABCDEF'
     *      R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
     *      R.concat([], []); //=> []
     */
    (a: string): concat_string_10;
    <T>(a: T[]): concat_list_10<T>;
    <T>(a: T[] | string): concat_mixed_10<T>;
    (_a: PH, b: string): concat_string_01;
    <U>(_a: PH, b: U[]): concat_list_01<U>;
    <U>(_a: PH, b: U[] | string): concat_mixed_01<U>;
    (a: string, b: string): concat_string_11;
    <T, U>(a: T[], b: U[]): concat_list_11<T, U>;
    <$SEL extends "11", $KIND extends "mixed">(): <T, U>(a: T[] | string, b: U[] | string) => concat_mixed_11<T, U>;
    <$SEL extends "11", $KIND extends "list">(): <T, U>(a: T[], b: U[]) => concat_list_11<T, U>;
    <$SEL extends "11", $KIND extends "string">(): (a: string, b: string) => concat_string_11;
    <$SEL extends "01", $KIND extends "mixed">(): <U>(_a: PH, b: U[] | string) => concat_mixed_01<U>;
    <$SEL extends "01", $KIND extends "list">(): <U>(_a: PH, b: U[]) => concat_list_01<U>;
    <$SEL extends "01", $KIND extends "string">(): (_a: PH, b: string) => concat_string_01;
    <$SEL extends "1", $KIND extends "mixed">(): <T>(a: T[] | string) => concat_mixed_10<T>;
    <$SEL extends "1", $KIND extends "list">(): <T>(a: T[]) => concat_list_10<T>;
    <$SEL extends "1", $KIND extends "string">(): (a: string) => concat_string_10;
    <T, U>(a: T[] | string, b: U[] | string): concat_mixed_11<T, U>;
};
type concat_string_10 = {
    (b: string): concat_string_11;
};
type concat_list_10<T> = {
    <U>(b: U[]): concat_list_11<T, U>;
};
type concat_mixed_10<T> = {
    <U>(b: U[] | string): concat_mixed_11<T, U>;
};
type concat_string_01 = {
    (a: string): concat_string_11;
};
type concat_list_01<U> = {
    <T>(a: T[]): concat_list_11<T, U>;
};
type concat_mixed_01<U> = {
    <T>(a: T[] | string): concat_mixed_11<T, U>;
};
type concat_string_11 = string;
type concat_list_11<T, U> = Array<T | U>;
type concat_mixed_11<T, U> = Array<T | U> | string;
export = concat;
