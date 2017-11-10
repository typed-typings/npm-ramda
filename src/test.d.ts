import { Placeholder as PH } from "./$placeholder";
declare const test: test_00;
type test_00 = {
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
    (pattern: RegExp): test_10;
    (_pattern: PH, str: string): test_01;
    <$SEL extends "11">(): (pattern: RegExp, str: string) => test_11;
    <$SEL extends "01">(): (_pattern: PH, str: string) => test_01;
    <$SEL extends "1">(): (pattern: RegExp) => test_10;
    (pattern: RegExp, str: string): test_11;
};
type test_10 = {
    (str: string): test_11;
};
type test_01 = {
    (pattern: RegExp): test_11;
};
type test_11 = boolean;
export = test;
