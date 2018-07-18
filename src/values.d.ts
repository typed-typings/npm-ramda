declare const values: values_0;
type values_0 = {
    /**
     * Returns a list of all the enumerable own properties of the supplied object.
     * Note that the order of the output array is not guaranteed across different
     * JS platforms.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category Object
     * @sig {k: v} -> [v]
     * @param {Object} obj The object to extract values from
     * @return {Array} An array of the values of the object's own properties.
     * @see R.valuesIn, R.keys
     * @example
     *
     *      R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
     */
    <T extends {
    }>(value: T): values_1<T>;
};
type values_1<T extends {
}> = Array<T[keyof T]>;
export = values;
