import { Path } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const pathEq: pathEq_000;
type pathEq_000 = {
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
    (path: Path): pathEq_100;
    (_path: PH, value: any): pathEq_010;
    (path: Path, value: any): pathEq_110;
    (_path: PH, _value: PH, object: {
    }): pathEq_001;
    (_path: PH, value: any, object: {
    }): pathEq_011;
    (path: Path, _value: PH, object: {
    }): pathEq_101;
    <$SEL extends "111">(): (path: Path, value: any, object: {
    }) => pathEq_111;
    <$SEL extends "101">(): (path: Path, _value: PH, object: {
    }) => pathEq_101;
    <$SEL extends "011">(): (_path: PH, value: any, object: {
    }) => pathEq_011;
    <$SEL extends "001">(): (_path: PH, _value: PH, object: {
    }) => pathEq_001;
    <$SEL extends "11">(): (path: Path, value: any) => pathEq_110;
    <$SEL extends "01">(): (_path: PH, value: any) => pathEq_010;
    <$SEL extends "1">(): (path: Path) => pathEq_100;
    (path: Path, value: any, object: {
    }): pathEq_111;
};
type pathEq_100 = {
    (value: any): pathEq_110;
    (_value: PH, object: {
    }): pathEq_101;
    <$SEL extends "11">(): (value: any, object: {
    }) => pathEq_111;
    <$SEL extends "01">(): (_value: PH, object: {
    }) => pathEq_101;
    <$SEL extends "1">(): (value: any) => pathEq_110;
    (value: any, object: {
    }): pathEq_111;
};
type pathEq_010 = {
    (path: Path): pathEq_110;
    (_path: PH, object: {
    }): pathEq_011;
    <$SEL extends "11">(): (path: Path, object: {
    }) => pathEq_111;
    <$SEL extends "01">(): (_path: PH, object: {
    }) => pathEq_011;
    <$SEL extends "1">(): (path: Path) => pathEq_110;
    (path: Path, object: {
    }): pathEq_111;
};
type pathEq_110 = {
    (object: {
    }): pathEq_111;
};
type pathEq_001 = {
    (path: Path): pathEq_101;
    (_path: PH, value: any): pathEq_011;
    <$SEL extends "11">(): (path: Path, value: any) => pathEq_111;
    <$SEL extends "01">(): (_path: PH, value: any) => pathEq_011;
    <$SEL extends "1">(): (path: Path) => pathEq_101;
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
