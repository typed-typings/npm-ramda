import { Placeholder as PH } from "./$placeholder";
declare const unfold: unfold_00;
type unfold_00 = {
    /**
     * Builds a list from a seed value. Accepts an iterator function, which returns
     * either false to stop iteration or an array of length 2 containing the value
     * to add to the resulting list and the seed to be used in the next call to the
     * iterator function.
     *
     * The iterator function receives one argument: *(seed)*.
     *
     * @func
     * @memberOf R
     * @since v0.10.0
     * @category List
     * @sig (a -> [b]) -> * -> [b]
     * @param {Function} fn The iterator function. receives one argument, `seed`, and returns
     *        either false to quit iteration or an array of length two to proceed. The element
     *        at index 0 of this array will be added to the resulting array, and the element
     *        at index 1 will be passed to the next call to `fn`.
     * @param {*} seed The seed value.
     * @return {Array} The final list.
     * @example
     *
     *      var f = n => n > 50 ? false : [-n, n + 10];
     *      R.unfold(f, 10); //=> [-10, -20, -30, -40, -50]
     * @symb R.unfold(f, x) = [f(x)[0], f(f(x)[1])[0], f(f(f(x)[1])[1])[0], ...]
     */
    <T, R>(fn: (seed: T) => [R, T] | false): unfold_10<T, R>;
    <T>(_fn: PH, initial: T): unfold_01<T>;
    <$SEL extends "11">(): <T, R>(fn: (seed: T) => [R, T] | false, initial: T) => unfold_11<R>;
    <$SEL extends "01">(): <T>(_fn: PH, initial: T) => unfold_01<T>;
    <$SEL extends "1">(): <T, R>(fn: (seed: T) => [R, T] | false) => unfold_10<T, R>;
    <T, R>(fn: (seed: T) => [R, T] | false, initial: T): unfold_11<R>;
};
type unfold_10<T, R> = {
    (initial: T): unfold_11<R>;
};
type unfold_01<T> = {
    <R>(fn: (seed: T) => [R, T] | false): unfold_11<R>;
};
type unfold_11<R> = R[];
export = unfold;
