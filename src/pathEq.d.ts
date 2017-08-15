import { Path } from "./$types";
/**
 * Determines whether a nested path on an object has a specific value, in
 * [`R.equals`](#equals) terms. Most likely used to filter a list.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Relation
 * @typedefn Idx = String | Int
 * @sig [Idx] -> a -> {a} -> Boolean
 * @param {Array} path The path of the nested property to use
 * @param {*} val The value to compare the nested property with
 * @param {Object} obj The object to check the nested property in
 * @return {Boolean} `true` if the value equals the nested object property,
 *         `false` otherwise.
 * @example
 *
 *      var user1 = { address: { zipCode: 90210 } };
 *      var user2 = { address: { zipCode: 55555 } };
 *      var user3 = { name: 'Bob' };
 *      var users = [ user1, user2, user3 ];
 *      var isFamous = R.pathEq(['address', 'zipCode'], 90210);
 *      R.filter(isFamous, users); //=> [ user1 ]
 */
declare const pathEq: pathEq_000;
type pathEq_000 = {
    (path: Path): pathEq_100;
    (path: Path, value: any): pathEq_110;
    (path: Path, value: any, object: {}): pathEq_111;
};
type pathEq_100 = {
    (value: any): pathEq_110;
    (value: any, object: {}): pathEq_111;
};
type pathEq_010 = {
    (path: Path): pathEq_110;
    (path: Path, object: {}): pathEq_111;
};
type pathEq_110 = {
    (object: {}): pathEq_111;
};
type pathEq_001 = {
    (path: Path): pathEq_101;
    (path: Path, value: any): pathEq_111;
};
type pathEq_101 = {
    (value: any): pathEq_111;
};
type pathEq_011 = {
    (path: Path): pathEq_111;
};
type pathEq_111 = boolean;
export = pathEq;
