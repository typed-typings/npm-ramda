import { Placeholder as PH } from "./$placeholder";
declare const join: join_00;
type join_00 = {
    /**
     * Returns a string made by inserting the `separator` between each element and
     * concatenating all the elements into a single string.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category List
     * @sig String -> [a] -> String
     * @param {Number|String} separator The string used to separate the elements.
     * @param {Array} xs The elements to join into a string.
     * @return {String} str The string made by concatenating `xs` with `separator`.
     * @see R.split
     * @example
     *
     *      var spacer = R.join(' ');
     *      spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
     *      R.join('|', [1, 2, 3]);    //=> '1|2|3'
     */
    (separator: string): join_10;
    (_separator: PH, list: any[]): join_01;
    <$SEL extends "11">(): (separator: string, list: any[]) => join_11;
    <$SEL extends "01">(): (_separator: PH, list: any[]) => join_01;
    <$SEL extends "1">(): (separator: string) => join_10;
    (separator: string, list: any[]): join_11;
};
type join_10 = {
    (list: any[]): join_11;
};
type join_01 = {
    (separator: string): join_11;
};
type join_11 = string;
export = join;
