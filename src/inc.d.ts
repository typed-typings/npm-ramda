declare const inc: inc_0;
type inc_0 = {
    /**
     * Increments its argument.
     *
     * @func
     * @memberOf R
     * @since v0.9.0
     * @category Math
     * @sig Number -> Number
     * @param {Number} n
     * @return {Number} n + 1
     * @see R.dec
     * @example
     *
     *      R.inc(42); //=> 43
     */
    (n: number): inc_1;
};
type inc_1 = number;
export = inc;
