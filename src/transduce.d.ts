import { Morphism, Reduced, Transformer } from "./$types";
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
declare const transduce: transduce_0000;
type transduce_0000 = {
    <T, U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>): transduce_1000<T, U>;
    <T, U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, fn: (accumulator: U, value: T) => U | Reduced<U>): transduce_1100<T, U>;
    <T, U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, fn: (accumulator: U, value: T) => U | Reduced<U>, initial: U): transduce_1110<T, U>;
    <T, U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, fn: (accumulator: U, value: T) => U | Reduced<U>, initial: U, values: T[]): transduce_1111<U>;
};
type transduce_1000<T, U> = {
    (fn: (accumulator: U, value: T) => U | Reduced<U>): transduce_1100<T, U>;
    (fn: (accumulator: U, value: T) => U | Reduced<U>, initial: U): transduce_1110<T, U>;
    (fn: (accumulator: U, value: T) => U | Reduced<U>, initial: U, values: T[]): transduce_1111<U>;
};
type transduce_0100<T, U> = {
    (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>): transduce_1100<T, U>;
    (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, initial: U): transduce_1110<T, U>;
    (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, initial: U, values: T[]): transduce_1111<U>;
};
type transduce_1100<T, U> = {
    (initial: U): transduce_1110<T, U>;
    (initial: U, values: T[]): transduce_1111<U>;
};
type transduce_0010<U> = {
    <T>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>): transduce_1010<T, U>;
    <T>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, fn: (accumulator: U, value: T) => U | Reduced<U>): transduce_1110<T, U>;
    <T>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, fn: (accumulator: U, value: T) => U | Reduced<U>, values: T[]): transduce_1111<U>;
};
type transduce_1010<T, U> = {
    (fn: (accumulator: U, value: T) => U | Reduced<U>): transduce_1110<T, U>;
    (fn: (accumulator: U, value: T) => U | Reduced<U>, values: T[]): transduce_1111<U>;
};
type transduce_0110<T, U> = {
    (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>): transduce_1110<T, U>;
    (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, values: T[]): transduce_1111<U>;
};
type transduce_1110<T, U> = {
    (values: T[]): transduce_1111<U>;
};
type transduce_0001<T> = {
    <U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>): transduce_1001<T, U>;
    <U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, fn: (accumulator: U, value: T) => U | Reduced<U>): transduce_1101<T, U>;
    <U>(transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, fn: (accumulator: U, value: T) => U | Reduced<U>, initial: U): transduce_1111<U>;
};
type transduce_1001<T, U> = {
    (fn: (accumulator: U, value: T) => U | Reduced<U>): transduce_1101<T, U>;
    (fn: (accumulator: U, value: T) => U | Reduced<U>, initial: U): transduce_1111<U>;
};
type transduce_0101<T, U> = {
    (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>): transduce_1101<T, U>;
    (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>, initial: U): transduce_1111<U>;
};
type transduce_1101<T, U> = {
    (initial: U): transduce_1111<U>;
};
type transduce_0011<T, U> = {
    (transducer: Morphism<T[], U> | Morphism<Transformer<T, U, U>, Transformer<T, U, U>>): transduce_1011<T, U>;
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
