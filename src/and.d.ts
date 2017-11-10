import { Placeholder as PH } from "./$placeholder";
declare const and: and_00;
type and_00 = {
    /**
     * Returns `true` if both arguments are `true`; `false` otherwise.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category Logic
     * @sig a -> b -> a | b
     * @param {Any} a
     * @param {Any} b
     * @return {Any} the first argument if it is falsy, otherwise the second argument.
     * @see R.both
     * @example
     *
     *      R.and(true, true); //=> true
     *      R.and(true, false); //=> false
     *      R.and(false, true); //=> false
     *      R.and(false, false); //=> false
     */
    <T>(a: T): and_10<T>;
    <U>(_a: PH, b: U): and_01<U>;
    <$SEL extends "11">(): <T, U>(a: T, b: U) => and_11<T, U>;
    <$SEL extends "01">(): <U>(_a: PH, b: U) => and_01<U>;
    <$SEL extends "1">(): <T>(a: T) => and_10<T>;
    <T, U>(a: T, b: U): and_11<T, U>;
};
type and_10<T> = {
    <U>(b: U): and_11<T, U>;
};
type and_01<U> = {
    <T>(a: T): and_11<T, U>;
};
type and_11<T, U> = T | U;
export = and;
