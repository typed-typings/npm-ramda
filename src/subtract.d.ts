import { Placeholder as PH } from "./$placeholder";
declare const subtract: subtract_00;
type subtract_00 = {
    /**
     * Subtracts its second argument from its first argument.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category Math
     * @sig Number -> Number -> Number
     * @param {Number} a The first value.
     * @param {Number} b The second value.
     * @return {Number} The result of `a - b`.
     * @see R.add
     * @example
     *
     *      R.subtract(10, 8); //=> 2
     *
     *      var minus5 = R.subtract(R.__, 5);
     *      minus5(17); //=> 12
     *
     *      var complementaryAngle = R.subtract(90);
     *      complementaryAngle(30); //=> 60
     *      complementaryAngle(72); //=> 18
     */
    (a: number): subtract_10;
    (_a: PH, b: number): subtract_01;
    <$SEL extends "11">(): (a: number, b: number) => subtract_11;
    <$SEL extends "01">(): (_a: PH, b: number) => subtract_01;
    <$SEL extends "1">(): (a: number) => subtract_10;
    (a: number, b: number): subtract_11;
};
type subtract_10 = {
    (b: number): subtract_11;
};
type subtract_01 = {
    (a: number): subtract_11;
};
type subtract_11 = number;
export = subtract;
