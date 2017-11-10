import { Tap } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const tap: tap_00;
type tap_00 = {
    /**
     * Runs the given function with the supplied object, then returns the object.
     *
     * Acts as a transducer if a transformer is given as second parameter.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category Function
     * @sig (a -> *) -> a -> a
     * @param {Function} fn The function to call with `x`. The return value of `fn` will be thrown away.
     * @param {*} x
     * @return {*} `x`.
     * @example
     *
     *      var sayX = x => console.log('x is ' + x);
     *      R.tap(sayX, 100); //=> 100
     *      // logs 'x is 100'
     * @symb R.tap(f, a) = a
     */
    <T>(fn: Tap<T>): tap_10<T>;
    <T>(_fn: PH, value: T): tap_01<T>;
    <$SEL extends "11">(): <T>(fn: Tap<T>, value: T) => tap_11<T>;
    <$SEL extends "01">(): <T>(_fn: PH, value: T) => tap_01<T>;
    <$SEL extends "1">(): <T>(fn: Tap<T>) => tap_10<T>;
    <T>(fn: Tap<T>, value: T): tap_11<T>;
};
type tap_10<T> = {
    (value: T): tap_11<T>;
};
type tap_01<T> = {
    (fn: Tap<T>): tap_11<T>;
};
type tap_11<T> = T;
export = tap;
