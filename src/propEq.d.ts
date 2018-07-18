import { Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const propEq: propEq_000;
type propEq_000 = {
    /**
     * Returns `true` if the specified object property is equal, in
     * [`R.equals`](#equals) terms, to the given value; `false` otherwise.
     * You can test multiple properties with [`R.where`](#where).
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category Relation
     * @sig String -> a -> Object -> Boolean
     * @param {String} name
     * @param {*} val
     * @param {*} obj
     * @return {Boolean}
     * @see R.whereEq, R.propSatisfies, R.equals
     * @example
     *
     *      var abby = {name: 'Abby', age: 7, hair: 'blond'};
     *      var fred = {name: 'Fred', age: 12, hair: 'brown'};
     *      var rusty = {name: 'Rusty', age: 10, hair: 'brown'};
     *      var alois = {name: 'Alois', age: 15, disposition: 'surly'};
     *      var kids = [abby, fred, rusty, alois];
     *      var hasBrownHair = R.propEq('hair', 'brown');
     *      R.filter(hasBrownHair, kids); //=> [fred, rusty]
     */
    (key: Property): propEq_100;
    (_key: PH, value: any): propEq_010;
    (key: Property, value: any): propEq_110;
    (_key: PH, _value: PH, object: {
    }): propEq_001;
    (_key: PH, value: any, object: {
    }): propEq_011;
    (key: Property, _value: PH, object: {
    }): propEq_101;
    <$SEL extends "111">(): (key: Property, value: any, object: {
    }) => propEq_111;
    <$SEL extends "101">(): (key: Property, _value: PH, object: {
    }) => propEq_101;
    <$SEL extends "011">(): (_key: PH, value: any, object: {
    }) => propEq_011;
    <$SEL extends "001">(): (_key: PH, _value: PH, object: {
    }) => propEq_001;
    <$SEL extends "11">(): (key: Property, value: any) => propEq_110;
    <$SEL extends "01">(): (_key: PH, value: any) => propEq_010;
    <$SEL extends "1">(): (key: Property) => propEq_100;
    (key: Property, value: any, object: {
    }): propEq_111;
};
type propEq_100 = {
    (value: any): propEq_110;
    (_value: PH, object: {
    }): propEq_101;
    <$SEL extends "11">(): (value: any, object: {
    }) => propEq_111;
    <$SEL extends "01">(): (_value: PH, object: {
    }) => propEq_101;
    <$SEL extends "1">(): (value: any) => propEq_110;
    (value: any, object: {
    }): propEq_111;
};
type propEq_010 = {
    (key: Property): propEq_110;
    (_key: PH, object: {
    }): propEq_011;
    <$SEL extends "11">(): (key: Property, object: {
    }) => propEq_111;
    <$SEL extends "01">(): (_key: PH, object: {
    }) => propEq_011;
    <$SEL extends "1">(): (key: Property) => propEq_110;
    (key: Property, object: {
    }): propEq_111;
};
type propEq_110 = {
    (object: {
    }): propEq_111;
};
type propEq_001 = {
    (key: Property): propEq_101;
    (_key: PH, value: any): propEq_011;
    <$SEL extends "11">(): (key: Property, value: any) => propEq_111;
    <$SEL extends "01">(): (_key: PH, value: any) => propEq_011;
    <$SEL extends "1">(): (key: Property) => propEq_101;
    (key: Property, value: any): propEq_111;
};
type propEq_101 = {
    (value: any): propEq_111;
};
type propEq_011 = {
    (key: Property): propEq_111;
};
type propEq_111 = boolean;
export = propEq;
