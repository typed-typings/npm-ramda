import { Placeholder as PH } from "./$placeholder";
declare const match: match_00;
type match_00 = {
    /**
     * Tests a regular expression against a String. Note that this function will
     * return an empty array when there are no matches. This differs from
     * [`String.prototype.match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
     * which returns `null` when there are no matches.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category String
     * @sig RegExp -> String -> [String | Undefined]
     * @param {RegExp} rx A regular expression.
     * @param {String} str The string to match against
     * @return {Array} The list of matches or empty array.
     * @see R.test
     * @example
     *
     *      R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
     *      R.match(/a/, 'b'); //=> []
     *      R.match(/a/, null); //=> TypeError: null does not have a method named "match"
     */
    (regex: RegExp): match_10;
    (_regex: PH, str: string): match_01;
    <$SEL extends "11">(): (regex: RegExp, str: string) => match_11;
    <$SEL extends "01">(): (_regex: PH, str: string) => match_01;
    <$SEL extends "1">(): (regex: RegExp) => match_10;
    (regex: RegExp, str: string): match_11;
};
type match_10 = {
    (str: string): match_11;
};
type match_01 = {
    (regex: RegExp): match_11;
};
type match_11 = string[];
export = match;
