import { Placeholder as PH } from "./$placeholder";
declare const defaultTo: defaultTo_00;
type defaultTo_00 = {
    /**
     * Returns the second argument if it is not `null`, `undefined` or `NaN`;
     * otherwise the first argument is returned.
     *
     * @func
     * @memberOf R
     * @since v0.10.0
     * @category Logic
     * @sig a -> b -> a | b
     * @param {a} default The default value.
     * @param {b} val `val` will be returned instead of `default` unless `val` is `null`, `undefined` or `NaN`.
     * @return {*} The second value if it is not `null`, `undefined` or `NaN`, otherwise the default value
     * @example
     *
     *      var defaultTo42 = R.defaultTo(42);
     *
     *      defaultTo42(null);  //=> 42
     *      defaultTo42(undefined);  //=> 42
     *      defaultTo42('Ramda');  //=> 'Ramda'
     *      // parseInt('string') results in NaN
     *      defaultTo42(parseInt('string')); //=> 42
     */
    <T>(defaults: T): defaultTo_10<T>;
    (_defaults: PH, value: null | undefined): defaultTo_void_01;
    <U>(_defaults: PH, value: U | null | undefined): defaultTo_general_01<U>;
    <T>(defaults: T, value: null | undefined): defaultTo_void_11<T>;
    <$SEL extends "11", $KIND extends "general">(): <T, U>(defaults: T, value: U | null | undefined) => defaultTo_general_11<T, U>;
    <$SEL extends "11", $KIND extends "void">(): <T>(defaults: T, value: null | undefined) => defaultTo_void_11<T>;
    <$SEL extends "01", $KIND extends "general">(): <U>(_defaults: PH, value: U | null | undefined) => defaultTo_general_01<U>;
    <$SEL extends "01", $KIND extends "void">(): (_defaults: PH, value: null | undefined) => defaultTo_void_01;
    <$SEL extends "1">(): <T>(defaults: T) => defaultTo_10<T>;
    <T, U>(defaults: T, value: U | null | undefined): defaultTo_general_11<T, U>;
};
type defaultTo_10<T> = {
    (value: null | undefined): defaultTo_void_11<T>;
    <$SEL extends "1", $KIND extends "general">(): <U>(value: U | null | undefined) => defaultTo_general_11<T, U>;
    <$SEL extends "1", $KIND extends "void">(): (value: null | undefined) => defaultTo_void_11<T>;
    <U>(value: U | null | undefined): defaultTo_general_11<T, U>;
};
type defaultTo_void_01 = {
    <T>(defaults: T): defaultTo_void_11<T>;
};
type defaultTo_general_01<U> = {
    <T>(defaults: T): defaultTo_general_11<T, U>;
};
type defaultTo_void_11<T> = T;
type defaultTo_general_11<T, U> = T | U;
export = defaultTo;
