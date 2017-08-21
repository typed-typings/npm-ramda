import { TypedVariadic } from "./$types";
declare const juxt: juxt_0;
type juxt_0 = {
    /**
     * juxt applies a list of functions to a list of values.
     *
     * @func
     * @memberOf R
     * @since v0.19.0
     * @category Function
     * @sig [(a, b, ..., m) -> n] -> ((a, b, ..., m) -> [n])
     * @param {Array} fns An array of functions
     * @return {Function} A function that returns a list of values after applying each of the original `fns` to its parameters.
     * @see R.applySpec
     * @example
     *
     *      var getRange = R.juxt([Math.min, Math.max]);
     *      getRange(3, 4, 9, -3); //=> [-3, 9]
     * @symb R.juxt([f, g, h])(a, b) = [f(a, b), g(a, b), h(a, b)]
     */
    <T, U>(fns: Array<TypedVariadic<T, U>>): juxt_1<T, U>;
};
type juxt_1<T, U> = TypedVariadic<T, U[]>;
export = juxt;
