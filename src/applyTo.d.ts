import { Placeholder as PH } from "./$placeholder";
declare const applyTo: applyTo_00;
type applyTo_00 = {
    /**
     * Takes a value and applies a function to it.
     *
     * This function is also known as the `thrush` combinator.
     *
     * @func
     * @memberOf R
     * @since v0.25.0
     * @category Function
     * @sig a -> (a -> b) -> b
     * @param {*} x The value
     * @param {Function} f The function to apply
     * @return {*} The result of applying `f` to `x`
     * @example
     *
     *      var t42 = R.applyTo(42);
     *      t42(R.identity); //=> 42
     *      t42(R.add(1)); //=> 43
     */
    <T>(value: T): applyTo_10<T>;
    <T, R>(_value: PH, fn: (value: T) => R): applyTo_01<T, R>;
    <$SEL extends "11">(): <T, R>(value: T, fn: (value: T) => R) => applyTo_11<R>;
    <$SEL extends "01">(): <T, R>(_value: PH, fn: (value: T) => R) => applyTo_01<T, R>;
    <$SEL extends "1">(): <T>(value: T) => applyTo_10<T>;
    <T, R>(value: T, fn: (value: T) => R): applyTo_11<R>;
};
type applyTo_10<T> = {
    <R>(fn: (value: T) => R): applyTo_11<R>;
};
type applyTo_01<T, R> = {
    (value: T): applyTo_11<R>;
};
type applyTo_11<R> = R;
export = applyTo;
