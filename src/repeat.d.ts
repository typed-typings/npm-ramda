import { Placeholder as PH } from "./$placeholder";
declare const repeat: repeat_00;
type repeat_00 = {
    /**
     * Returns a fixed list of size `n` containing a specified identical value.
     *
     * @func
     * @memberOf R
     * @since v0.1.1
     * @category List
     * @sig a -> n -> [a]
     * @param {*} value The value to repeat.
     * @param {Number} n The desired size of the output list.
     * @return {Array} A new array containing `n` `value`s.
     * @see R.times
     * @example
     *
     *      R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
     *
     *      var obj = {};
     *      var repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
     *      repeatedObjs[0] === repeatedObjs[1]; //=> true
     * @symb R.repeat(a, 0) = []
     * @symb R.repeat(a, 1) = [a]
     * @symb R.repeat(a, 2) = [a, a]
     */
    <T>(value: T): repeat_10<T>;
    (_value: PH, count: number): repeat_01;
    <$SEL extends "11">(): <T>(value: T, count: number) => repeat_11<T>;
    <$SEL extends "01">(): (_value: PH, count: number) => repeat_01;
    <$SEL extends "1">(): <T>(value: T) => repeat_10<T>;
    <T>(value: T, count: number): repeat_11<T>;
};
type repeat_10<T> = {
    (count: number): repeat_11<T>;
};
type repeat_01 = {
    <T>(value: T): repeat_11<T>;
};
type repeat_11<T> = T[];
export = repeat;
