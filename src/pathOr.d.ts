import { Path } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const pathOr: pathOr_000;
type pathOr_000 = {
    /**
     * If the given, non-null object has a value at the given path, returns the
     * value at that path. Otherwise returns the provided default value.
     *
     * @func
     * @memberOf R
     * @since v0.18.0
     * @category Object
     * @typedefn Idx = String | Int
     * @sig a -> [Idx] -> {a} -> a
     * @param {*} d The default value.
     * @param {Array} p The path to use.
     * @param {Object} obj The object to retrieve the nested property from.
     * @return {*} The data at `path` of the supplied object or the default value.
     * @example
     *
     *      R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
     *      R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"
     */
    <T>(defaults: T): pathOr_100<T>;
    (_defaults: PH, path: Path): pathOr_010;
    <T>(defaults: T, path: Path): pathOr_110<T>;
    (_defaults: PH, _path: PH, object: {
    }): pathOr_001;
    (_defaults: PH, path: Path, object: {
    }): pathOr_011;
    <T>(defaults: T, _path: PH, object: {
    }): pathOr_101<T>;
    <$SEL extends "111">(): <T, U>(defaults: T, path: Path, object: {
    }) => pathOr_111<T, U>;
    <$SEL extends "101">(): <T>(defaults: T, _path: PH, object: {
    }) => pathOr_101<T>;
    <$SEL extends "011">(): (_defaults: PH, path: Path, object: {
    }) => pathOr_011;
    <$SEL extends "001">(): (_defaults: PH, _path: PH, object: {
    }) => pathOr_001;
    <$SEL extends "11">(): <T>(defaults: T, path: Path) => pathOr_110<T>;
    <$SEL extends "01">(): (_defaults: PH, path: Path) => pathOr_010;
    <$SEL extends "1">(): <T>(defaults: T) => pathOr_100<T>;
    <T, U>(defaults: T, path: Path, object: {
    }): pathOr_111<T, U>;
};
type pathOr_100<T> = {
    (path: Path): pathOr_110<T>;
    (_path: PH, object: {
    }): pathOr_101<T>;
    <$SEL extends "11">(): <U>(path: Path, object: {
    }) => pathOr_111<T, U>;
    <$SEL extends "01">(): (_path: PH, object: {
    }) => pathOr_101<T>;
    <$SEL extends "1">(): (path: Path) => pathOr_110<T>;
    <U>(path: Path, object: {
    }): pathOr_111<T, U>;
};
type pathOr_010 = {
    <T>(defaults: T): pathOr_110<T>;
    (_defaults: PH, object: {
    }): pathOr_011;
    <$SEL extends "11">(): <T, U>(defaults: T, object: {
    }) => pathOr_111<T, U>;
    <$SEL extends "01">(): (_defaults: PH, object: {
    }) => pathOr_011;
    <$SEL extends "1">(): <T>(defaults: T) => pathOr_110<T>;
    <T, U>(defaults: T, object: {
    }): pathOr_111<T, U>;
};
type pathOr_110<T> = {
    <U>(object: {
    }): pathOr_111<T, U>;
};
type pathOr_001 = {
    <T>(defaults: T): pathOr_101<T>;
    (_defaults: PH, path: Path): pathOr_011;
    <$SEL extends "11">(): <T, U>(defaults: T, path: Path) => pathOr_111<T, U>;
    <$SEL extends "01">(): (_defaults: PH, path: Path) => pathOr_011;
    <$SEL extends "1">(): <T>(defaults: T) => pathOr_101<T>;
    <T, U>(defaults: T, path: Path): pathOr_111<T, U>;
};
type pathOr_101<T> = {
    <U>(path: Path): pathOr_111<T, U>;
};
type pathOr_011 = {
    <T, U>(defaults: T): pathOr_111<T, U>;
};
type pathOr_111<T, U> = T | U;
export = pathOr;
