import { Morphism, Reduced, Transformer } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const transduce: transduce_0000;
type transduce_0000 = {
    /**
     * Initializes a transducer using supplied iterator function. Returns a single
     * item by iterating through the list, successively calling the transformed
     * iterator function and passing it an accumulator value and the current value
     * from the array, and then passing the result to the next call.
     *
     * The iterator function receives two values: *(acc, value)*. It will be
     * wrapped as a transformer to initialize the transducer. A transformer can be
     * passed directly in place of an iterator function. In both cases, iteration
     * may be stopped early with the [`R.reduced`](#reduced) function.
     *
     * A transducer is a function that accepts a transformer and returns a
     * transformer and can be composed directly.
     *
     * A transformer is an an object that provides a 2-arity reducing iterator
     * function, step, 0-arity initial value function, init, and 1-arity result
     * extraction function, result. The step function is used as the iterator
     * function in reduce. The result function is used to convert the final
     * accumulator into the return type and in most cases is
     * [`R.identity`](#identity). The init function can be used to provide an
     * initial accumulator, but is ignored by transduce.
     *
     * The iteration is performed with [`R.reduce`](#reduce) after initializing the transducer.
     *
     * @func
     * @memberOf R
     * @since v0.12.0
     * @category List
     * @sig (c -> c) -> ((a, b) -> a) -> a -> [b] -> a
     * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
     * @param {Function} fn The iterator function. Receives two values, the accumulator and the
     *        current element from the array. Wrapped as transformer, if necessary, and used to
     *        initialize the transducer
     * @param {*} acc The initial accumulator value.
     * @param {Array} list The list to iterate over.
     * @return {*} The final, accumulated value.
     * @see R.reduce, R.reduced, R.into
     * @example
     *
     *      var numbers = [1, 2, 3, 4];
     *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
     *      R.transduce(transducer, R.flip(R.append), [], numbers); //=> [2, 3]
     *
     *      var isOdd = (x) => x % 2 === 1;
     *      var firstOddTransducer = R.compose(R.filter(isOdd), R.take(1));
     *      R.transduce(firstOddTransducer, R.flip(R.append), [], R.range(0, 100)); //=> [1]
     */
    <T, U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>): transduce_1000<T, U>;
    <T, U>(_transducer: PH, fn: (accumulator: U, value: T) => U | Reduced<U>): transduce_0100<T, U>;
    <T, U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, fn: (accumulator: U, value: T) => U | Reduced<U>): transduce_1100<T, U>;
    <U>(_transducer: PH, _fn: PH, initial: U): transduce_0010<U>;
    <T, U>(_transducer: PH, fn: (accumulator: U, value: T) => U | Reduced<U>, initial: U): transduce_0110<T, U>;
    <T, U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, _fn: PH, initial: U): transduce_1010<T, U>;
    <T, U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, fn: (accumulator: U, value: T) => U | Reduced<U>, initial: U): transduce_1110<T, U>;
    <T>(_transducer: PH, _fn: PH, _initial: PH, values: T[]): transduce_0001<T>;
    <T, U>(_transducer: PH, _fn: PH, initial: U, values: T[]): transduce_0011<T, U>;
    <T, U>(_transducer: PH, fn: (accumulator: U, value: T) => U | Reduced<U>, _initial: PH, values: T[]): transduce_0101<T, U>;
    <T, U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, _fn: PH, _initial: PH, values: T[]): transduce_1001<T, U>;
    <T, U>(_transducer: PH, fn: (accumulator: U, value: T) => U | Reduced<U>, initial: U, values: T[]): transduce_0111<T, U>;
    <T, U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, _fn: PH, initial: U, values: T[]): transduce_1011<T, U>;
    <T, U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, fn: (accumulator: U, value: T) => U | Reduced<U>, _initial: PH, values: T[]): transduce_1101<T, U>;
    <$SEL extends "1111">(): <T, U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, fn: (accumulator: U, value: T) => U | Reduced<U>, initial: U, values: T[]) => transduce_1111<U>;
    <$SEL extends "1101">(): <T, U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, fn: (accumulator: U, value: T) => U | Reduced<U>, _initial: PH, values: T[]) => transduce_1101<T, U>;
    <$SEL extends "1011">(): <T, U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, _fn: PH, initial: U, values: T[]) => transduce_1011<T, U>;
    <$SEL extends "0111">(): <T, U>(_transducer: PH, fn: (accumulator: U, value: T) => U | Reduced<U>, initial: U, values: T[]) => transduce_0111<T, U>;
    <$SEL extends "1001">(): <T, U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, _fn: PH, _initial: PH, values: T[]) => transduce_1001<T, U>;
    <$SEL extends "0101">(): <T, U>(_transducer: PH, fn: (accumulator: U, value: T) => U | Reduced<U>, _initial: PH, values: T[]) => transduce_0101<T, U>;
    <$SEL extends "0011">(): <T, U>(_transducer: PH, _fn: PH, initial: U, values: T[]) => transduce_0011<T, U>;
    <$SEL extends "0001">(): <T>(_transducer: PH, _fn: PH, _initial: PH, values: T[]) => transduce_0001<T>;
    <$SEL extends "111">(): <T, U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, fn: (accumulator: U, value: T) => U | Reduced<U>, initial: U) => transduce_1110<T, U>;
    <$SEL extends "101">(): <T, U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, _fn: PH, initial: U) => transduce_1010<T, U>;
    <$SEL extends "011">(): <T, U>(_transducer: PH, fn: (accumulator: U, value: T) => U | Reduced<U>, initial: U) => transduce_0110<T, U>;
    <$SEL extends "001">(): <U>(_transducer: PH, _fn: PH, initial: U) => transduce_0010<U>;
    <$SEL extends "11">(): <T, U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, fn: (accumulator: U, value: T) => U | Reduced<U>) => transduce_1100<T, U>;
    <$SEL extends "01">(): <T, U>(_transducer: PH, fn: (accumulator: U, value: T) => U | Reduced<U>) => transduce_0100<T, U>;
    <$SEL extends "1">(): <T, U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>) => transduce_1000<T, U>;
    <T, U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, fn: (accumulator: U, value: T) => U | Reduced<U>, initial: U, values: T[]): transduce_1111<U>;
};
type transduce_1000<T, U> = {
    (fn: (accumulator: U, value: T) => U | Reduced<U>): transduce_1100<T, U>;
    (_fn: PH, initial: U): transduce_1010<T, U>;
    (fn: (accumulator: U, value: T) => U | Reduced<U>, initial: U): transduce_1110<T, U>;
    (_fn: PH, _initial: PH, values: T[]): transduce_1001<T, U>;
    (_fn: PH, initial: U, values: T[]): transduce_1011<T, U>;
    (fn: (accumulator: U, value: T) => U | Reduced<U>, _initial: PH, values: T[]): transduce_1101<T, U>;
    <$SEL extends "111">(): (fn: (accumulator: U, value: T) => U | Reduced<U>, initial: U, values: T[]) => transduce_1111<U>;
    <$SEL extends "101">(): (fn: (accumulator: U, value: T) => U | Reduced<U>, _initial: PH, values: T[]) => transduce_1101<T, U>;
    <$SEL extends "011">(): (_fn: PH, initial: U, values: T[]) => transduce_1011<T, U>;
    <$SEL extends "001">(): (_fn: PH, _initial: PH, values: T[]) => transduce_1001<T, U>;
    <$SEL extends "11">(): (fn: (accumulator: U, value: T) => U | Reduced<U>, initial: U) => transduce_1110<T, U>;
    <$SEL extends "01">(): (_fn: PH, initial: U) => transduce_1010<T, U>;
    <$SEL extends "1">(): (fn: (accumulator: U, value: T) => U | Reduced<U>) => transduce_1100<T, U>;
    (fn: (accumulator: U, value: T) => U | Reduced<U>, initial: U, values: T[]): transduce_1111<U>;
};
type transduce_0100<T, U> = {
    (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>): transduce_1100<T, U>;
    (_transducer: PH, initial: U): transduce_0110<T, U>;
    (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, initial: U): transduce_1110<T, U>;
    (_transducer: PH, _initial: PH, values: T[]): transduce_0101<T, U>;
    (_transducer: PH, initial: U, values: T[]): transduce_0111<T, U>;
    (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, _initial: PH, values: T[]): transduce_1101<T, U>;
    <$SEL extends "111">(): (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, initial: U, values: T[]) => transduce_1111<U>;
    <$SEL extends "101">(): (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, _initial: PH, values: T[]) => transduce_1101<T, U>;
    <$SEL extends "011">(): (_transducer: PH, initial: U, values: T[]) => transduce_0111<T, U>;
    <$SEL extends "001">(): (_transducer: PH, _initial: PH, values: T[]) => transduce_0101<T, U>;
    <$SEL extends "11">(): (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, initial: U) => transduce_1110<T, U>;
    <$SEL extends "01">(): (_transducer: PH, initial: U) => transduce_0110<T, U>;
    <$SEL extends "1">(): (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>) => transduce_1100<T, U>;
    (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, initial: U, values: T[]): transduce_1111<U>;
};
type transduce_1100<T, U> = {
    (initial: U): transduce_1110<T, U>;
    (_initial: PH, values: T[]): transduce_1101<T, U>;
    <$SEL extends "11">(): (initial: U, values: T[]) => transduce_1111<U>;
    <$SEL extends "01">(): (_initial: PH, values: T[]) => transduce_1101<T, U>;
    <$SEL extends "1">(): (initial: U) => transduce_1110<T, U>;
    (initial: U, values: T[]): transduce_1111<U>;
};
type transduce_0010<U> = {
    <T>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>): transduce_1010<T, U>;
    <T>(_transducer: PH, fn: (accumulator: U, value: T) => U | Reduced<U>): transduce_0110<T, U>;
    <T>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, fn: (accumulator: U, value: T) => U | Reduced<U>): transduce_1110<T, U>;
    <T>(_transducer: PH, _fn: PH, values: T[]): transduce_0011<T, U>;
    <T>(_transducer: PH, fn: (accumulator: U, value: T) => U | Reduced<U>, values: T[]): transduce_0111<T, U>;
    <T>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, _fn: PH, values: T[]): transduce_1011<T, U>;
    <$SEL extends "111">(): <T>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, fn: (accumulator: U, value: T) => U | Reduced<U>, values: T[]) => transduce_1111<U>;
    <$SEL extends "101">(): <T>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, _fn: PH, values: T[]) => transduce_1011<T, U>;
    <$SEL extends "011">(): <T>(_transducer: PH, fn: (accumulator: U, value: T) => U | Reduced<U>, values: T[]) => transduce_0111<T, U>;
    <$SEL extends "001">(): <T>(_transducer: PH, _fn: PH, values: T[]) => transduce_0011<T, U>;
    <$SEL extends "11">(): <T>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, fn: (accumulator: U, value: T) => U | Reduced<U>) => transduce_1110<T, U>;
    <$SEL extends "01">(): <T>(_transducer: PH, fn: (accumulator: U, value: T) => U | Reduced<U>) => transduce_0110<T, U>;
    <$SEL extends "1">(): <T>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>) => transduce_1010<T, U>;
    <T>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, fn: (accumulator: U, value: T) => U | Reduced<U>, values: T[]): transduce_1111<U>;
};
type transduce_1010<T, U> = {
    (fn: (accumulator: U, value: T) => U | Reduced<U>): transduce_1110<T, U>;
    (_fn: PH, values: T[]): transduce_1011<T, U>;
    <$SEL extends "11">(): (fn: (accumulator: U, value: T) => U | Reduced<U>, values: T[]) => transduce_1111<U>;
    <$SEL extends "01">(): (_fn: PH, values: T[]) => transduce_1011<T, U>;
    <$SEL extends "1">(): (fn: (accumulator: U, value: T) => U | Reduced<U>) => transduce_1110<T, U>;
    (fn: (accumulator: U, value: T) => U | Reduced<U>, values: T[]): transduce_1111<U>;
};
type transduce_0110<T, U> = {
    (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>): transduce_1110<T, U>;
    (_transducer: PH, values: T[]): transduce_0111<T, U>;
    <$SEL extends "11">(): (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, values: T[]) => transduce_1111<U>;
    <$SEL extends "01">(): (_transducer: PH, values: T[]) => transduce_0111<T, U>;
    <$SEL extends "1">(): (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>) => transduce_1110<T, U>;
    (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, values: T[]): transduce_1111<U>;
};
type transduce_1110<T, U> = {
    (values: T[]): transduce_1111<U>;
};
type transduce_0001<T> = {
    <U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>): transduce_1001<T, U>;
    <U>(_transducer: PH, fn: (accumulator: U, value: T) => U | Reduced<U>): transduce_0101<T, U>;
    <U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, fn: (accumulator: U, value: T) => U | Reduced<U>): transduce_1101<T, U>;
    <U>(_transducer: PH, _fn: PH, initial: U): transduce_0011<T, U>;
    <U>(_transducer: PH, fn: (accumulator: U, value: T) => U | Reduced<U>, initial: U): transduce_0111<T, U>;
    <U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, _fn: PH, initial: U): transduce_1011<T, U>;
    <$SEL extends "111">(): <U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, fn: (accumulator: U, value: T) => U | Reduced<U>, initial: U) => transduce_1111<U>;
    <$SEL extends "101">(): <U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, _fn: PH, initial: U) => transduce_1011<T, U>;
    <$SEL extends "011">(): <U>(_transducer: PH, fn: (accumulator: U, value: T) => U | Reduced<U>, initial: U) => transduce_0111<T, U>;
    <$SEL extends "001">(): <U>(_transducer: PH, _fn: PH, initial: U) => transduce_0011<T, U>;
    <$SEL extends "11">(): <U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, fn: (accumulator: U, value: T) => U | Reduced<U>) => transduce_1101<T, U>;
    <$SEL extends "01">(): <U>(_transducer: PH, fn: (accumulator: U, value: T) => U | Reduced<U>) => transduce_0101<T, U>;
    <$SEL extends "1">(): <U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>) => transduce_1001<T, U>;
    <U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, fn: (accumulator: U, value: T) => U | Reduced<U>, initial: U): transduce_1111<U>;
};
type transduce_1001<T, U> = {
    (fn: (accumulator: U, value: T) => U | Reduced<U>): transduce_1101<T, U>;
    (_fn: PH, initial: U): transduce_1011<T, U>;
    <$SEL extends "11">(): (fn: (accumulator: U, value: T) => U | Reduced<U>, initial: U) => transduce_1111<U>;
    <$SEL extends "01">(): (_fn: PH, initial: U) => transduce_1011<T, U>;
    <$SEL extends "1">(): (fn: (accumulator: U, value: T) => U | Reduced<U>) => transduce_1101<T, U>;
    (fn: (accumulator: U, value: T) => U | Reduced<U>, initial: U): transduce_1111<U>;
};
type transduce_0101<T, U> = {
    (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>): transduce_1101<T, U>;
    (_transducer: PH, initial: U): transduce_0111<T, U>;
    <$SEL extends "11">(): (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, initial: U) => transduce_1111<U>;
    <$SEL extends "01">(): (_transducer: PH, initial: U) => transduce_0111<T, U>;
    <$SEL extends "1">(): (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>) => transduce_1101<T, U>;
    (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, initial: U): transduce_1111<U>;
};
type transduce_1101<T, U> = {
    (initial: U): transduce_1111<U>;
};
type transduce_0011<T, U> = {
    (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>): transduce_1011<T, U>;
    (_transducer: PH, fn: (accumulator: U, value: T) => U | Reduced<U>): transduce_0111<T, U>;
    <$SEL extends "11">(): (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, fn: (accumulator: U, value: T) => U | Reduced<U>) => transduce_1111<U>;
    <$SEL extends "01">(): (_transducer: PH, fn: (accumulator: U, value: T) => U | Reduced<U>) => transduce_0111<T, U>;
    <$SEL extends "1">(): (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>) => transduce_1011<T, U>;
    (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, fn: (accumulator: U, value: T) => U | Reduced<U>): transduce_1111<U>;
};
type transduce_1011<T, U> = {
    (fn: (accumulator: U, value: T) => U | Reduced<U>): transduce_1111<U>;
};
type transduce_0111<T, U> = {
    (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>): transduce_1111<U>;
};
type transduce_1111<U> = U;
export = transduce;
