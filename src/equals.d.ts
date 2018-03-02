import { Placeholder as PH } from "./$placeholder";
declare const equals: equals_00;
type equals_00 = {
    /**
     * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
     * cyclical data structures.
     *
     * Dispatches symmetrically to the `equals` methods of both arguments, if
     * present.
     *
     * @func
     * @memberOf R
     * @since v0.15.0
     * @category Relation
     * @sig a -> b -> Boolean
     * @param {*} a
     * @param {*} b
     * @return {Boolean}
     * @example
     *
     *      R.equals(1, 1); //=> true
     *      R.equals(1, '1'); //=> false
     *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
     *
     *      var a = {}; a.v = a;
     *      var b = {}; b.v = b;
     *      R.equals(a, b); //=> true
     */
    (a: null): equals_null_10;
    (a: undefined): equals_undefined_10;
    <T>(a: T): equals_general_10<T>;
    <T>(_a: PH, b: T | null): equals_null_01<T>;
    <T>(_a: PH, b: T | undefined): equals_undefined_01<T>;
    <T>(_a: PH, b: T): equals_general_01<T>;
    <T>(a: null, b: T | null): equals_null_11;
    <T>(a: undefined, b: T | undefined): equals_undefined_11;
    <$SEL extends "11", $KIND extends "general">(): <T>(a: T, b: T) => equals_general_11;
    <$SEL extends "11", $KIND extends "undefined">(): <T>(a: undefined, b: T | undefined) => equals_undefined_11;
    <$SEL extends "11", $KIND extends "null">(): <T>(a: null, b: T | null) => equals_null_11;
    <$SEL extends "01", $KIND extends "general">(): <T>(_a: PH, b: T) => equals_general_01<T>;
    <$SEL extends "01", $KIND extends "undefined">(): <T>(_a: PH, b: T | undefined) => equals_undefined_01<T>;
    <$SEL extends "01", $KIND extends "null">(): <T>(_a: PH, b: T | null) => equals_null_01<T>;
    <$SEL extends "1", $KIND extends "general">(): <T>(a: T) => equals_general_10<T>;
    <$SEL extends "1", $KIND extends "undefined">(): (a: undefined) => equals_undefined_10;
    <$SEL extends "1", $KIND extends "null">(): (a: null) => equals_null_10;
    <T>(a: T, b: T): equals_general_11;
};
type equals_null_10 = {
    <T>(b: T | null): equals_null_11;
};
type equals_undefined_10 = {
    <T>(b: T | undefined): equals_undefined_11;
};
type equals_general_10<T> = {
    (b: T): equals_general_11;
};
type equals_null_01<T> = {
    (a: null): equals_null_11;
};
type equals_undefined_01<T> = {
    (a: undefined): equals_undefined_11;
};
type equals_general_01<T> = {
    (a: T): equals_general_11;
};
type equals_null_11 = boolean;
type equals_undefined_11 = boolean;
type equals_general_11 = boolean;
export = equals;
