import { Constructor } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const is: is_00;
type is_00 = {
    /**
     * See if an object (`val`) is an instance of the supplied constructor. This
     * function will check up the inheritance chain, if any.
     *
     * @func
     * @memberOf R
     * @since v0.3.0
     * @category Type
     * @sig (* -> {*}) -> a -> Boolean
     * @param {Object} ctor A constructor
     * @param {*} val The value to test
     * @return {Boolean}
     * @example
     *
     *      R.is(Object, {}); //=> true
     *      R.is(Number, 1); //=> true
     *      R.is(Object, 1); //=> false
     *      R.is(String, 's'); //=> true
     *      R.is(String, new String('')); //=> true
     *      R.is(Object, new String('')); //=> true
     *      R.is(Object, 's'); //=> false
     *      R.is(Number, {}); //=> false
     */
    <T>(constructor: Constructor<T>): is_10<T>;
    (_constructor: PH, value: any): is_01;
    <$SEL extends "11">(): <T>(constructor: Constructor<T>, value: any) => value is T;
    <$SEL extends "01">(): (_constructor: PH, value: any) => is_01;
    <$SEL extends "1">(): <T>(constructor: Constructor<T>) => is_10<T>;
    <T>(constructor: Constructor<T>, value: any): value is T;
};
type is_10<T> = {
    (value: any): value is T;
};
type is_01 = {
    <T>(constructor: Constructor<T>): is_11<T>;
};
type is_11<T> = boolean;
export = is;
