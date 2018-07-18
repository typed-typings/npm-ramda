import { Path, Predicate } from "./$types";
declare const pathSatisfies: pathSatisfies_000;
type pathSatisfies_000 = {
    /**
     * Returns `true` if the specified object property at given path satisfies the
     * given predicate; `false` otherwise.
     *
     * @func
     * @memberOf R
     * @since v0.19.0
     * @category Logic
     * @typedefn Idx = String | Int
     * @sig (a -> Boolean) -> [Idx] -> {a} -> Boolean
     * @param {Function} pred
     * @param {Array} propPath
     * @param {*} obj
     * @return {Boolean}
     * @see R.propSatisfies, R.path
     * @example
     *
     *      R.pathSatisfies(y => y > 0, ['x', 'y'], {x: {y: 2}}); //=> true
     */
    (fn: Predicate<any>): pathSatisfies_100;
    (fn: Predicate<any>, path: Path): pathSatisfies_110;
    <$SEL extends "111">(): (fn: Predicate<any>, path: Path, object: {
    }) => pathSatisfies_111;
    <$SEL extends "11">(): (fn: Predicate<any>, path: Path) => pathSatisfies_110;
    <$SEL extends "1">(): (fn: Predicate<any>) => pathSatisfies_100;
    (fn: Predicate<any>, path: Path, object: {
    }): pathSatisfies_111;
};
type pathSatisfies_100 = {
    (path: Path): pathSatisfies_110;
    <$SEL extends "11">(): (path: Path, object: {
    }) => pathSatisfies_111;
    <$SEL extends "1">(): (path: Path) => pathSatisfies_110;
    (path: Path, object: {
    }): pathSatisfies_111;
};
type pathSatisfies_110 = {
    (object: {
    }): pathSatisfies_111;
};
type pathSatisfies_111 = boolean;
export = pathSatisfies;
