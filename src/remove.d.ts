import { Placeholder as PH } from "./$placeholder";
declare const remove: remove_000;
type remove_000 = {
    /**
     * Removes the sub-list of `list` starting at index `start` and containing
     * `count` elements. _Note that this is not destructive_: it returns a copy of
     * the list with the changes.
     * <small>No lists have been harmed in the application of this function.</small>
     *
     * @func
     * @memberOf R
     * @since v0.2.2
     * @category List
     * @sig Number -> Number -> [a] -> [a]
     * @param {Number} start The position to start removing elements
     * @param {Number} count The number of elements to remove
     * @param {Array} list The list to remove from
     * @return {Array} A new Array with `count` elements from `start` removed.
     * @example
     *
     *      R.remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]
     */
    (start: number): remove_100;
    (_start: PH, counter: number): remove_010;
    (start: number, counter: number): remove_110;
    <T>(_start: PH, _counter: PH, list: T[]): remove_001<T>;
    <T>(_start: PH, counter: number, list: T[]): remove_011<T>;
    <T>(start: number, _counter: PH, list: T[]): remove_101<T>;
    <$SEL extends "111">(): <T>(start: number, counter: number, list: T[]) => remove_111<T>;
    <$SEL extends "101">(): <T>(start: number, _counter: PH, list: T[]) => remove_101<T>;
    <$SEL extends "011">(): <T>(_start: PH, counter: number, list: T[]) => remove_011<T>;
    <$SEL extends "001">(): <T>(_start: PH, _counter: PH, list: T[]) => remove_001<T>;
    <$SEL extends "11">(): (start: number, counter: number) => remove_110;
    <$SEL extends "01">(): (_start: PH, counter: number) => remove_010;
    <$SEL extends "1">(): (start: number) => remove_100;
    <T>(start: number, counter: number, list: T[]): remove_111<T>;
};
type remove_100 = {
    (counter: number): remove_110;
    <T>(_counter: PH, list: T[]): remove_101<T>;
    <$SEL extends "11">(): <T>(counter: number, list: T[]) => remove_111<T>;
    <$SEL extends "01">(): <T>(_counter: PH, list: T[]) => remove_101<T>;
    <$SEL extends "1">(): (counter: number) => remove_110;
    <T>(counter: number, list: T[]): remove_111<T>;
};
type remove_010 = {
    (start: number): remove_110;
    <T>(_start: PH, list: T[]): remove_011<T>;
    <$SEL extends "11">(): <T>(start: number, list: T[]) => remove_111<T>;
    <$SEL extends "01">(): <T>(_start: PH, list: T[]) => remove_011<T>;
    <$SEL extends "1">(): (start: number) => remove_110;
    <T>(start: number, list: T[]): remove_111<T>;
};
type remove_110 = {
    <T>(list: T[]): remove_111<T>;
};
type remove_001<T> = {
    (start: number): remove_101<T>;
    (_start: PH, counter: number): remove_011<T>;
    <$SEL extends "11">(): (start: number, counter: number) => remove_111<T>;
    <$SEL extends "01">(): (_start: PH, counter: number) => remove_011<T>;
    <$SEL extends "1">(): (start: number) => remove_101<T>;
    (start: number, counter: number): remove_111<T>;
};
type remove_101<T> = {
    (counter: number): remove_111<T>;
};
type remove_011<T> = {
    (start: number): remove_111<T>;
};
type remove_111<T> = T[];
export = remove;
