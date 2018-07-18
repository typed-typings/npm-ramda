import { Path } from "./$types";
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
    <T>(defaults: T, path: Path): pathOr_110<T>;
    <$SEL extends "111">(): <T, U>(defaults: T, path: Path, object: {
    }) => pathOr_111<T, U>;
    <$SEL extends "11">(): <T>(defaults: T, path: Path) => pathOr_110<T>;
    <$SEL extends "1">(): <T>(defaults: T) => pathOr_100<T>;
    <T, U>(defaults: T, path: Path, object: {
    }): pathOr_111<T, U>;
};
type pathOr_100<T> = {
    (path: Path): pathOr_110<T>;
    <$SEL extends "11">(): <U>(path: Path, object: {
    }) => pathOr_111<T, U>;
    <$SEL extends "1">(): (path: Path) => pathOr_110<T>;
    <U>(path: Path, object: {
    }): pathOr_111<T, U>;
};
type pathOr_110<T> = {
    <U>(object: {
    }): pathOr_111<T, U>;
};
type pathOr_111<T, U> = T | U;
export = pathOr;
