declare const replace: replace_000;
type replace_000 = {
    /**
     * Replace a substring or regex match in a string with a replacement.
     *
     * @func
     * @memberOf R
     * @since v0.7.0
     * @category String
     * @sig RegExp|String -> String -> String -> String
     * @param {RegExp|String} pattern A regular expression or a substring to match.
     * @param {String} replacement The string to replace the matches with.
     * @param {String} str The String to do the search and replacement in.
     * @return {String} The result.
     * @example
     *
     *      R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
     *      R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'
     *
     *      // Use the "g" (global) flag to replace all occurrences:
     *      R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
     */
    (pattern: RegExp | string): replace_100;
    (pattern: RegExp | string, replacement: string): replace_110;
    <$SEL extends "1">(): (pattern: RegExp | string) => replace_100;
    <$SEL extends "11">(): (pattern: RegExp | string, replacement: string) => replace_110;
    <$SEL extends "111">(): (pattern: RegExp | string, replacement: string, str: string) => replace_111;
    (pattern: RegExp | string, replacement: string, str: string): replace_111;
};
type replace_100 = {
    (replacement: string): replace_110;
    <$SEL extends "1">(): (replacement: string) => replace_110;
    <$SEL extends "11">(): (replacement: string, str: string) => replace_111;
    (replacement: string, str: string): replace_111;
};
type replace_110 = {
    (str: string): replace_111;
};
type replace_111 = string;
export = replace;
