import { List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const update: update_000;
type update_000 = {
    /**
     * Returns a new copy of the array with the element at the provided index
     * replaced with the given value.
     *
     * @func
     * @memberOf R
     * @since v0.14.0
     * @category List
     * @sig Number -> a -> [a] -> [a]
     * @param {Number} idx The index to update.
     * @param {*} x The value to exist at the given index of the returned array.
     * @param {Array|Arguments} list The source array-like object to be updated.
     * @return {Array} A copy of `list` with the value at index `idx` replaced with `x`.
     * @see R.adjust
     * @example
     *
     *      R.update(1, 11, [0, 1, 2]);     //=> [0, 11, 2]
     *      R.update(1)(11)([0, 1, 2]);     //=> [0, 11, 2]
     * @symb R.update(-1, a, [b, c]) = [b, a]
     * @symb R.update(0, a, [b, c]) = [a, c]
     * @symb R.update(1, a, [b, c]) = [b, a]
     */
    (index: number): update_100;
    <T>(_index: PH, value: T): update_010<T>;
    <T>(index: number, value: T): update_110<T>;
    <U>(_index: PH, _value: PH, list: List<U>): update_001<U>;
    <T, U>(_index: PH, value: T, list: List<U>): update_011<T, U>;
    <U>(index: number, _value: PH, list: List<U>): update_101<U>;
    <$SEL extends "111">(): <T, U>(index: number, value: T, list: List<U>) => update_111<T, U>;
    <$SEL extends "101">(): <U>(index: number, _value: PH, list: List<U>) => update_101<U>;
    <$SEL extends "011">(): <T, U>(_index: PH, value: T, list: List<U>) => update_011<T, U>;
    <$SEL extends "001">(): <U>(_index: PH, _value: PH, list: List<U>) => update_001<U>;
    <$SEL extends "11">(): <T>(index: number, value: T) => update_110<T>;
    <$SEL extends "01">(): <T>(_index: PH, value: T) => update_010<T>;
    <$SEL extends "1">(): (index: number) => update_100;
    <T, U>(index: number, value: T, list: List<U>): update_111<T, U>;
};
type update_100 = {
    <T>(value: T): update_110<T>;
    <U>(_value: PH, list: List<U>): update_101<U>;
    <$SEL extends "11">(): <T, U>(value: T, list: List<U>) => update_111<T, U>;
    <$SEL extends "01">(): <U>(_value: PH, list: List<U>) => update_101<U>;
    <$SEL extends "1">(): <T>(value: T) => update_110<T>;
    <T, U>(value: T, list: List<U>): update_111<T, U>;
};
type update_010<T> = {
    (index: number): update_110<T>;
    <U>(_index: PH, list: List<U>): update_011<T, U>;
    <$SEL extends "11">(): <U>(index: number, list: List<U>) => update_111<T, U>;
    <$SEL extends "01">(): <U>(_index: PH, list: List<U>) => update_011<T, U>;
    <$SEL extends "1">(): (index: number) => update_110<T>;
    <U>(index: number, list: List<U>): update_111<T, U>;
};
type update_110<T> = {
    <U>(list: List<U>): update_111<T, U>;
};
type update_001<U> = {
    (index: number): update_101<U>;
    <T>(_index: PH, value: T): update_011<T, U>;
    <$SEL extends "11">(): <T>(index: number, value: T) => update_111<T, U>;
    <$SEL extends "01">(): <T>(_index: PH, value: T) => update_011<T, U>;
    <$SEL extends "1">(): (index: number) => update_101<U>;
    <T>(index: number, value: T): update_111<T, U>;
};
type update_101<U> = {
    <T>(value: T): update_111<T, U>;
};
type update_011<T, U> = {
    (index: number): update_111<T, U>;
};
type update_111<T, U> = Array<T | U>;
export = update;
