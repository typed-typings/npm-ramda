import { Placeholder as PH } from "./$placeholder";
declare const add: add_00;
type add_00 = {
    /**
     * Adds two values.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category Math
     * @sig Number -> Number -> Number
     * @param {Number} a
     * @param {Number} b
     * @return {Number}
     * @see R.subtract
     * @example
     *
     *      R.add(2, 3);       //=>  5
     *      R.add(7)(10);      //=> 17
     */
    (a: number): add_10;
    (_a: PH, b: number): add_01;
    <$SEL extends "11">(): (a: number, b: number) => add_11;
    <$SEL extends "01">(): (_a: PH, b: number) => add_01;
    <$SEL extends "1">(): (a: number) => add_10;
    (a: number, b: number): add_11;
};
type add_10 = {
    (b: number): add_11;
};
type add_01 = {
    (a: number): add_11;
};
type add_11 = number;
export = add;
