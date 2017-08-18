/**
 * Determines whether a given string matches a given regular expression.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category String
 * @sig RegExp -> String -> Boolean
 * @param {RegExp} pattern
 * @param {String} str
 * @return {Boolean}
 * @see R.match
 * @example
 *
 *      R.test(/^x/, 'xyz'); //=> true
 *      R.test(/^y/, 'xyz'); //=> false
 */
declare const test: test_00;
type test_00 = {
    (pattern: RegExp): test_10;
    <$SEL extends "1">(): (pattern: RegExp) => test_10;
    <$SEL extends "11">(): (pattern: RegExp, str: string) => test_11;
    (pattern: RegExp, str: string): test_11;
};
type test_10 = {
    (str: string): test_11;
};
type test_11 = boolean;
export = test;
