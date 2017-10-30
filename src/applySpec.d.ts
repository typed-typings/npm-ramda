import { NestedDictionary, Variadic } from "./$types";
declare const applySpec: applySpec_0;
type applySpec_0 = {
    /**
     * Given a spec object recursively mapping properties to functions, creates a
     * function producing an object of the same structure, by mapping each property
     * to the result of calling its associated function with the supplied arguments.
     *
     * @func
     * @memberOf R
     * @since v0.20.0
     * @category Function
     * @sig {k: ((a, b, ..., m) -> v)} -> ((a, b, ..., m) -> {k: v})
     * @param {Object} spec an object recursively mapping properties to functions for
     *        producing the values for these properties.
     * @return {Function} A function that returns an object of the same structure
     * as `spec', with each property set to the value returned by calling its
     * associated function with the supplied arguments.
     * @see R.converge, R.juxt
     * @example
     *
     *      var getMetrics = R.applySpec({
     *        sum: R.add,
     *        nested: { mul: R.multiply }
     *      });
     *      getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
     * @symb R.applySpec({ x: f, y: { z: g } })(a, b) = { x: f(a, b), y: { z: g(a, b) } }
     */
    <T>(spec: NestedDictionary<Variadic<any>>): applySpec_1<T>;
};
type applySpec_1<T> = Variadic<T>;
export = applySpec;
