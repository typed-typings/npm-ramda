import { DeepPartial } from "./$operation";
import { Path } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const dissocPath: dissocPath_00;
type dissocPath_00 = {
    /**
     * Makes a shallow clone of an object, omitting the property at the given path.
     * Note that this copies and flattens prototype properties onto the new object
     * as well. All non-primitive properties are copied by reference.
     *
     * @func
     * @memberOf R
     * @since v0.11.0
     * @category Object
     * @typedefn Idx = String | Int
     * @sig [Idx] -> {k: v} -> {k: v}
     * @param {Array} path The path to the value to omit
     * @param {Object} obj The object to clone
     * @return {Object} A new object without the property at path
     * @see R.assocPath
     * @example
     *
     *      R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); //=> {a: {b: {}}}
     */
    (path: Path): dissocPath_10;
    <T extends object>(_path: PH, object: T): dissocPath_01<T>;
    <$SEL extends "11">(): <T extends object>(path: Path, object: T) => dissocPath_11<T>;
    <$SEL extends "01">(): <T extends object>(_path: PH, object: T) => dissocPath_01<T>;
    <$SEL extends "1">(): (path: Path) => dissocPath_10;
    <T extends object>(path: Path, object: T): dissocPath_11<T>;
};
type dissocPath_10 = {
    <T extends object>(object: T): dissocPath_11<T>;
};
type dissocPath_01<T extends object> = {
    (path: Path): dissocPath_11<T>;
};
type dissocPath_11<T extends object> = DeepPartial<T>;
export = dissocPath;
