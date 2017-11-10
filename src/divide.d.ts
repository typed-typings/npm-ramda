import { Placeholder as PH } from "./$placeholder";
declare const divide: divide_00;
type divide_00 = {
    /**
     * Divides two numbers. Equivalent to `a / b`.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category Math
     * @sig Number -> Number -> Number
     * @param {Number} a The first value.
     * @param {Number} b The second value.
     * @return {Number} The result of `a / b`.
     * @see R.multiply
     * @example
     *
     *      R.divide(71, 100); //=> 0.71
     *
     *      var half = R.divide(R.__, 2);
     *      half(42); //=> 21
     *
     *      var reciprocal = R.divide(1);
     *      reciprocal(4);   //=> 0.25
     */
    (a: number): divide_10;
    (_a: PH, b: number): divide_01;
    <$SEL extends "11">(): (a: number, b: number) => divide_11;
    <$SEL extends "01">(): (_a: PH, b: number) => divide_01;
    <$SEL extends "1">(): (a: number) => divide_10;
    (a: number, b: number): divide_11;
};
type divide_10 = {
    (b: number): divide_11;
};
type divide_01 = {
    (a: number): divide_11;
};
type divide_11 = number;
export = divide;
