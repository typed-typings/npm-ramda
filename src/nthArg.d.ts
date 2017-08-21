declare const nthArg: nthArg_0;
type nthArg_0 = {
    /**
     * Returns a function which returns its nth argument.
     *
     * @func
     * @memberOf R
     * @since v0.9.0
     * @category Function
     * @sig Number -> *... -> *
     * @param {Number} n
     * @return {Function}
     * @example
     *
     *      R.nthArg(1)('a', 'b', 'c'); //=> 'b'
     *      R.nthArg(-1)('a', 'b', 'c'); //=> 'c'
     * @symb R.nthArg(-1)(a, b, c) = c
     * @symb R.nthArg(0)(a, b, c) = a
     * @symb R.nthArg(1)(a, b, c) = b
     */
    (n: number): nthArg_1;
};
type nthArg_1 = <T>(...args: T[]) => T;
export = nthArg;
