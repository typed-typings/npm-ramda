import { Morphism, Ordered } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const descend: descend_000;
type descend_000 = {
    /**
     * Makes a descending comparator function out of a function that returns a value
     * that can be compared with `<` and `>`.
     *
     * @func
     * @memberOf R
     * @since v0.23.0
     * @category Function
     * @sig Ord b => (a -> b) -> a -> a -> Number
     * @param {Function} fn A function of arity one that returns a value that can be compared
     * @param {*} a The first item to be compared.
     * @param {*} b The second item to be compared.
     * @return {Number} `-1` if fn(a) > fn(b), `1` if fn(b) > fn(a), otherwise `0`
     * @see R.ascend
     * @example
     *
     *      var byAge = R.descend(R.prop('age'));
     *      var people = [
     *        // ...
     *      ];
     *      var peopleByOldestFirst = R.sort(byAge, people);
     */
    <T>(fn: Morphism<T, Ordered>): descend_100<T>;
    <T>(_fn: PH, a: T): descend_010<T>;
    <T>(fn: Morphism<T, Ordered>, a: T): descend_110<T>;
    <T>(_fn: PH, _a: PH, b: T): descend_001<T>;
    <T>(_fn: PH, a: T, b: T): descend_011<T>;
    <T>(fn: Morphism<T, Ordered>, _a: PH, b: T): descend_101<T>;
    <$SEL extends "111">(): <T>(fn: Morphism<T, Ordered>, a: T, b: T) => descend_111;
    <$SEL extends "101">(): <T>(fn: Morphism<T, Ordered>, _a: PH, b: T) => descend_101<T>;
    <$SEL extends "011">(): <T>(_fn: PH, a: T, b: T) => descend_011<T>;
    <$SEL extends "001">(): <T>(_fn: PH, _a: PH, b: T) => descend_001<T>;
    <$SEL extends "11">(): <T>(fn: Morphism<T, Ordered>, a: T) => descend_110<T>;
    <$SEL extends "01">(): <T>(_fn: PH, a: T) => descend_010<T>;
    <$SEL extends "1">(): <T>(fn: Morphism<T, Ordered>) => descend_100<T>;
    <T>(fn: Morphism<T, Ordered>, a: T, b: T): descend_111;
};
type descend_100<T> = {
    (a: T): descend_110<T>;
    (_a: PH, b: T): descend_101<T>;
    <$SEL extends "11">(): (a: T, b: T) => descend_111;
    <$SEL extends "01">(): (_a: PH, b: T) => descend_101<T>;
    <$SEL extends "1">(): (a: T) => descend_110<T>;
    (a: T, b: T): descend_111;
};
type descend_010<T> = {
    (fn: Morphism<T, Ordered>): descend_110<T>;
    (_fn: PH, b: T): descend_011<T>;
    <$SEL extends "11">(): (fn: Morphism<T, Ordered>, b: T) => descend_111;
    <$SEL extends "01">(): (_fn: PH, b: T) => descend_011<T>;
    <$SEL extends "1">(): (fn: Morphism<T, Ordered>) => descend_110<T>;
    (fn: Morphism<T, Ordered>, b: T): descend_111;
};
type descend_110<T> = {
    (b: T): descend_111;
};
type descend_001<T> = {
    (fn: Morphism<T, Ordered>): descend_101<T>;
    (_fn: PH, a: T): descend_011<T>;
    <$SEL extends "11">(): (fn: Morphism<T, Ordered>, a: T) => descend_111;
    <$SEL extends "01">(): (_fn: PH, a: T) => descend_011<T>;
    <$SEL extends "1">(): (fn: Morphism<T, Ordered>) => descend_101<T>;
    (fn: Morphism<T, Ordered>, a: T): descend_111;
};
type descend_101<T> = {
    (a: T): descend_111;
};
type descend_011<T> = {
    (fn: Morphism<T, Ordered>): descend_111;
};
type descend_111 = number;
export = descend;
