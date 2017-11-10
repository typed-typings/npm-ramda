import { Comparator, List } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const sortWith: sortWith_00;
type sortWith_00 = {
    /**
     * Sorts a list according to a list of comparators.
     *
     * @func
     * @memberOf R
     * @since v0.23.0
     * @category Relation
     * @sig [(a, a) -> Number] -> [a] -> [a]
     * @param {Array} functions A list of comparator functions.
     * @param {Array} list The list to sort.
     * @return {Array} A new list sorted according to the comarator functions.
     * @example
     *
     *      var alice = {
     *        name: 'alice',
     *        age: 40
     *      };
     *      var bob = {
     *        name: 'bob',
     *        age: 30
     *      };
     *      var clara = {
     *        name: 'clara',
     *        age: 40
     *      };
     *      var people = [clara, bob, alice];
     *      var ageNameSort = R.sortWith([
     *        R.descend(R.prop('age')),
     *        R.ascend(R.prop('name'))
     *      ]);
     *      ageNameSort(people); //=> [alice, clara, bob]
     */
    <T>(fns: Array<Comparator<T, number>>): sortWith_10<T>;
    <T>(_fns: PH, list: List<T>): sortWith_01<T>;
    <$SEL extends "11">(): <T>(fns: Array<Comparator<T, number>>, list: List<T>) => sortWith_11<T>;
    <$SEL extends "01">(): <T>(_fns: PH, list: List<T>) => sortWith_01<T>;
    <$SEL extends "1">(): <T>(fns: Array<Comparator<T, number>>) => sortWith_10<T>;
    <T>(fns: Array<Comparator<T, number>>, list: List<T>): sortWith_11<T>;
};
type sortWith_10<T> = {
    (list: List<T>): sortWith_11<T>;
};
type sortWith_01<T> = {
    (fns: Array<Comparator<T, number>>): sortWith_11<T>;
};
type sortWith_11<T> = T[];
export = sortWith;
