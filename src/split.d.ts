import { Placeholder as PH } from "./$placeholder";
declare const split: split_00;
type split_00 = {
    /**
     * Splits a string into an array of strings based on the given
     * separator.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category String
     * @sig (String | RegExp) -> String -> [String]
     * @param {String|RegExp} sep The pattern.
     * @param {String} str The string to separate into an array.
     * @return {Array} The array of strings from `str` separated by `str`.
     * @see R.join
     * @example
     *
     *      var pathComponents = R.split('/');
     *      R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']
     *
     *      R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
     */
    (separator: RegExp | string): split_10;
    (_separator: PH, str: string): split_01;
    <$SEL extends "11">(): (separator: RegExp | string, str: string) => split_11;
    <$SEL extends "01">(): (_separator: PH, str: string) => split_01;
    <$SEL extends "1">(): (separator: RegExp | string) => split_10;
    (separator: RegExp | string, str: string): split_11;
};
type split_10 = {
    (str: string): split_11;
};
type split_01 = {
    (separator: RegExp | string): split_11;
};
type split_11 = string[];
export = split;
