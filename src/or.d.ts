import { Placeholder as PH } from "./$placeholder";
declare const or: or_00;
type or_00 = {
    /**
     * Returns `true` if one or both of its arguments are `true`. Returns `false`
     * if both arguments are `false`.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category Logic
     * @sig a -> b -> a | b
     * @param {Any} a
     * @param {Any} b
     * @return {Any} the first argument if truthy, otherwise the second argument.
     * @see R.either
     * @example
     *
     *      R.or(true, true); //=> true
     *      R.or(true, false); //=> true
     *      R.or(false, true); //=> true
     *      R.or(false, false); //=> false
     */
    <T>(a: T): or_10<T>;
    <U>(_a: PH, b: U): or_01<U>;
    <$SEL extends "11">(): <T, U>(a: T, b: U) => or_11<T, U>;
    <$SEL extends "01">(): <U>(_a: PH, b: U) => or_01<U>;
    <$SEL extends "1">(): <T>(a: T) => or_10<T>;
    <T, U>(a: T, b: U): or_11<T, U>;
};
type or_10<T> = {
    <U>(b: U): or_11<T, U>;
};
type or_01<U> = {
    <T>(a: T): or_11<T, U>;
};
type or_11<T, U> = T | U;
export = or;
