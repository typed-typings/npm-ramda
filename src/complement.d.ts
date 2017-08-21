import { Variadic } from "./$types";
declare const complement: complement_0;
type complement_0 = {
    /**
     * Takes a function `f` and returns a function `g` such that if called with the same arguments
     * when `f` returns a "truthy" value, `g` returns `false` and when `f` returns a "falsy" value `g` returns `true`.
     *
     * `R.complement` may be applied to any functor
     *
     * @func
     * @memberOf R
     * @since v0.12.0
     * @category Logic
     * @sig (*... -> *) -> (*... -> Boolean)
     * @param {Function} f
     * @return {Function}
     * @see R.not
     * @example
     *
     *      var isNotNil = R.complement(R.isNil);
     *      isNil(null); //=> true
     *      isNotNil(null); //=> false
     *      isNil(7); //=> false
     *      isNotNil(7); //=> true
     */
    (fn: Variadic<boolean>): complement_1;
};
type complement_1 = Variadic<boolean>;
export = complement;
