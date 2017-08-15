/**
 * Multiplies two numbers. Equivalent to `a * b` but curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a * b`.
 * @see R.divide
 * @example
 *
 *      var double = R.multiply(2);
 *      var triple = R.multiply(3);
 *      double(3);       //=>  6
 *      triple(4);       //=> 12
 *      R.multiply(2, 5);  //=> 10
 */
declare const multiply: multiply_00;
type multiply_00 = {
    (a: number): multiply_10;
    (a: number, b: number): multiply_11;
};
type multiply_10 = {
    (b: number): multiply_11;
};
type multiply_01 = {
    (a: number): multiply_11;
};
type multiply_11 = number;
export = multiply;
