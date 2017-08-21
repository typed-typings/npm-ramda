declare const toUpper: toUpper_0;
type toUpper_0 = {
    /**
     * The upper case version of a string.
     *
     * @func
     * @memberOf R
     * @since v0.9.0
     * @category String
     * @sig String -> String
     * @param {String} str The string to upper case.
     * @return {String} The upper case version of `str`.
     * @see R.toLower
     * @example
     *
     *      R.toUpper('abc'); //=> 'ABC'
     */
    (str: string): toUpper_1;
};
type toUpper_1 = string;
export = toUpper;
