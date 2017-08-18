import { Path, Predicate } from "./$types";
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
declare const pathSatisfies: pathSatisfies_000;
type pathSatisfies_000 = {
    (fn: Predicate<any>): pathSatisfies_100;
    (fn: Predicate<any>, path: Path): pathSatisfies_110;
    (fn: Predicate<any>, path: Path, object: {}): pathSatisfies_111;
};
type pathSatisfies_100 = {
    (path: Path): pathSatisfies_110;
    (path: Path, object: {}): pathSatisfies_111;
};
type pathSatisfies_110 = {
    (object: {}): pathSatisfies_111;
};
type pathSatisfies_111 = boolean;
export = pathSatisfies;
