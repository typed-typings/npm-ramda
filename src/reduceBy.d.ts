import { List, Morphism, Reduced } from "./$types";
/**
 * Groups the elements of the list according to the result of calling
 * the String-returning function `keyFn` on each element and reduces the elements
 * of each group to a single value via the reducer function `valueFn`.
 *
 * This function is basically a more general [`groupBy`](#groupBy) function.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category List
 * @sig ((a, b) -> a) -> a -> (b -> String) -> [b] -> {String: a}
 * @param {Function} valueFn The function that reduces the elements of each group to a single
 *        value. Receives two values, accumulator for a particular group and the current element.
 * @param {*} acc The (initial) accumulator value for each group.
 * @param {Function} keyFn The function that maps the list's element into a key.
 * @param {Array} list The array to group.
 * @return {Object} An object with the output of `keyFn` for keys, mapped to the output of
 *         `valueFn` for elements which produced that key when passed to `keyFn`.
 * @see R.groupBy, R.reduce
 * @example
 *
 *      var reduceToNamesBy = R.reduceBy((acc, student) => acc.concat(student.name), []);
 *      var namesByGrade = reduceToNamesBy(function(student) {
 *        var score = student.score;
 *        return score < 65 ? 'F' :
 *               score < 70 ? 'D' :
 *               score < 80 ? 'C' :
 *               score < 90 ? 'B' : 'A';
 *      });
 *      var students = [{name: 'Lucy', score: 92},
 *                      {name: 'Drew', score: 85},
 *                      // ...
 *                      {name: 'Bart', score: 62}];
 *      namesByGrade(students);
 *      // {
 *      //   'A': ['Lucy'],
 *      //   'B': ['Drew']
 *      //   // ...,
 *      //   'F': ['Bart']
 *      // }
 */
declare const reduceBy: reduceBy_0000;
type reduceBy_0000 = {
    <T, U>(valueFn: (accumulator: U, value: T) => Reduced<U> | U): reduceBy_1000<T, U>;
    <T, U>(valueFn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): reduceBy_1100<T, U>;
    <T, U, K extends string>(valueFn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, keyFn: Morphism<T, K>): reduceBy_1110<T, U, K>;
    <T, U, K extends string>(valueFn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, keyFn: Morphism<T, K>, values: List<T>): reduceBy_1111<U, K>;
};
type reduceBy_1000<T, U> = {
    (initial: U): reduceBy_1100<T, U>;
    <K extends string>(initial: U, keyFn: Morphism<T, K>): reduceBy_1110<T, U, K>;
    <K extends string>(initial: U, keyFn: Morphism<T, K>, values: List<T>): reduceBy_1111<U, K>;
};
type reduceBy_0100<U> = {
    <T>(valueFn: (accumulator: U, value: T) => Reduced<U> | U): reduceBy_1100<T, U>;
    <T, K extends string>(valueFn: (accumulator: U, value: T) => Reduced<U> | U, keyFn: Morphism<T, K>): reduceBy_1110<T, U, K>;
    <T, K extends string>(valueFn: (accumulator: U, value: T) => Reduced<U> | U, keyFn: Morphism<T, K>, values: List<T>): reduceBy_1111<U, K>;
};
type reduceBy_1100<T, U> = {
    <K extends string>(keyFn: Morphism<T, K>): reduceBy_1110<T, U, K>;
    <K extends string>(keyFn: Morphism<T, K>, values: List<T>): reduceBy_1111<U, K>;
};
type reduceBy_0010<T, K extends string> = {
    <U>(valueFn: (accumulator: U, value: T) => Reduced<U> | U): reduceBy_1010<T, U, K>;
    <U>(valueFn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): reduceBy_1110<T, U, K>;
    <U>(valueFn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, values: List<T>): reduceBy_1111<U, K>;
};
type reduceBy_1010<T, U, K extends string> = {
    (initial: U): reduceBy_1110<T, U, K>;
    (initial: U, values: List<T>): reduceBy_1111<U, K>;
};
type reduceBy_0110<T, U, K extends string> = {
    (valueFn: (accumulator: U, value: T) => Reduced<U> | U): reduceBy_1110<T, U, K>;
    (valueFn: (accumulator: U, value: T) => Reduced<U> | U, values: List<T>): reduceBy_1111<U, K>;
};
type reduceBy_1110<T, U, K extends string> = {
    (values: List<T>): reduceBy_1111<U, K>;
};
type reduceBy_0001<T> = {
    <U>(valueFn: (accumulator: U, value: T) => Reduced<U> | U): reduceBy_1001<T, U>;
    <U>(valueFn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): reduceBy_1101<T, U>;
    <U, K extends string>(valueFn: (accumulator: U, value: T) => Reduced<U> | U, initial: U, keyFn: Morphism<T, K>): reduceBy_1111<U, K>;
};
type reduceBy_1001<T, U> = {
    (initial: U): reduceBy_1101<T, U>;
    <K extends string>(initial: U, keyFn: Morphism<T, K>): reduceBy_1111<U, K>;
};
type reduceBy_0101<T, U> = {
    (valueFn: (accumulator: U, value: T) => Reduced<U> | U): reduceBy_1101<T, U>;
    <K extends string>(valueFn: (accumulator: U, value: T) => Reduced<U> | U, keyFn: Morphism<T, K>): reduceBy_1111<U, K>;
};
type reduceBy_1101<T, U> = {
    <K extends string>(keyFn: Morphism<T, K>): reduceBy_1111<U, K>;
};
type reduceBy_0011<T, K extends string> = {
    <U>(valueFn: (accumulator: U, value: T) => Reduced<U> | U): reduceBy_1011<T, U, K>;
    <U>(valueFn: (accumulator: U, value: T) => Reduced<U> | U, initial: U): reduceBy_1111<U, K>;
};
type reduceBy_1011<T, U, K extends string> = {
    (initial: U): reduceBy_1111<U, K>;
};
type reduceBy_0111<T, U, K extends string> = {
    (valueFn: (accumulator: U, value: T) => Reduced<U> | U): reduceBy_1111<U, K>;
};
type reduceBy_1111<U, K extends string> = Partial<Record<K, U>>;
export = reduceBy;
