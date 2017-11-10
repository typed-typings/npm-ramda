import { Dictionary, List, Morphism, Property } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const groupBy: groupBy_00;
type groupBy_00 = {
    /**
     * Splits a list into sub-lists stored in an object, based on the result of
     * calling a String-returning function on each element, and grouping the
     * results according to values returned.
     *
     * Dispatches to the `groupBy` method of the second argument, if present.
     *
     * Acts as a transducer if a transformer is given in list position.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category List
     * @sig (a -> String) -> [a] -> {String: [a]}
     * @param {Function} fn Function :: a -> String
     * @param {Array} list The array to group
     * @return {Object} An object with the output of `fn` for keys, mapped to arrays of elements
     *         that produced that key when passed to `fn`.
     * @see R.transduce
     * @example
     *
     *      var byGrade = R.groupBy(function(student) {
     *        var score = student.score;
     *        return score < 65 ? 'F' :
     *               score < 70 ? 'D' :
     *               score < 80 ? 'C' :
     *               score < 90 ? 'B' : 'A';
     *      });
     *      var students = [{name: 'Abby', score: 84},
     *                      {name: 'Eddy', score: 58},
     *                      // ...
     *                      {name: 'Jack', score: 69}];
     *      byGrade(students);
     *      // {
     *      //   'A': [{name: 'Dianne', score: 99}],
     *      //   'B': [{name: 'Abby', score: 84}]
     *      //   // ...,
     *      //   'F': [{name: 'Eddy', score: 58}]
     *      // }
     */
    <T>(fn: Morphism<T, Property>): groupBy_10<T>;
    <T>(_fn: PH, list: List<T>): groupBy_01<T>;
    <$SEL extends "11">(): <T>(fn: Morphism<T, Property>, list: List<T>) => groupBy_11<T>;
    <$SEL extends "01">(): <T>(_fn: PH, list: List<T>) => groupBy_01<T>;
    <$SEL extends "1">(): <T>(fn: Morphism<T, Property>) => groupBy_10<T>;
    <T>(fn: Morphism<T, Property>, list: List<T>): groupBy_11<T>;
};
type groupBy_10<T> = {
    (list: List<T>): groupBy_11<T>;
};
type groupBy_01<T> = {
    (fn: Morphism<T, Property>): groupBy_11<T>;
};
type groupBy_11<T> = Dictionary<T[]>;
export = groupBy;
