import { Variadic } from "./$types";
declare const unapply: unapply_0;
type unapply_0 = {
    /**
     * Takes a function `fn`, which takes a single array argument, and returns a
     * function which:
     *
     *   - takes any number of positional arguments;
     *   - passes these arguments to `fn` as an array; and
     *   - returns the result.
     *
     * In other words, `R.unapply` derives a variadic function from a function which
     * takes an array. `R.unapply` is the inverse of [`R.apply`](#apply).
     *
     * @func
     * @memberOf R
     * @since v0.8.0
     * @category Function
     * @sig ([*...] -> a) -> (*... -> a)
     * @param {Function} fn
     * @return {Function}
     * @see R.apply
     * @example
     *
     *      R.unapply(JSON.stringify)(1, 2, 3); //=> '[1,2,3]'
     * @symb R.unapply(f)(a, b) = f([a, b])
     */
    <T>(fn: (args: any[]) => T): unapply_1<T>;
};
type unapply_1<T> = Variadic<T>;
export = unapply;
