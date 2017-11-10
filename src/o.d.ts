import { Morphism } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const o: o_000;
type o_000 = {
    /**
     * `o` is a curried composition function that returns a unary function.
     * Like [`compose`](#compose), `o` performs right-to-left function composition.
     * Unlike [`compose`](#compose), the rightmost function passed to `o` will be
     * invoked with only one argument.
     *
     * @func
     * @memberOf R
     * @since v0.24.0
     * @category Function
     * @sig (b -> c) -> (a -> b) -> a -> c
     * @param {Function} f
     * @param {Function} g
     * @return {Function}
     * @see R.compose, R.pipe
     * @example
     *
     *      var classyGreeting = name => "The name's " + name.last + ", " + name.first + " " + name.last
     *      var yellGreeting = R.o(R.toUpper, classyGreeting);
     *      yellGreeting({first: 'James', last: 'Bond'}); //=> "THE NAME'S BOND, JAMES BOND"
     *
     *      R.o(R.multiply(10), R.add(10))(-4) //=> 60
     *
     * @symb R.o(f, g, x) = f(g(x))
     */
    <T2, R>(a: Morphism<T2, R>): o_100<T2, R>;
    <T1, T2>(_a: PH, b: Morphism<T1, T2>): o_010<T1, T2>;
    <T1, T2, R>(a: Morphism<T2, R>, b: Morphism<T1, T2>): o_110<T1, T2, R>;
    <T1>(_a: PH, _b: PH, value: T1): o_001<T1>;
    <T1, T2>(_a: PH, b: Morphism<T1, T2>, value: T1): o_011<T1, T2>;
    <T1, T2, R>(a: Morphism<T2, R>, _b: PH, value: T1): o_101<T1, T2, R>;
    <$SEL extends "111">(): <T1, T2, R>(a: Morphism<T2, R>, b: Morphism<T1, T2>, value: T1) => o_111<R>;
    <$SEL extends "101">(): <T1, T2, R>(a: Morphism<T2, R>, _b: PH, value: T1) => o_101<T1, T2, R>;
    <$SEL extends "011">(): <T1, T2>(_a: PH, b: Morphism<T1, T2>, value: T1) => o_011<T1, T2>;
    <$SEL extends "001">(): <T1>(_a: PH, _b: PH, value: T1) => o_001<T1>;
    <$SEL extends "11">(): <T1, T2, R>(a: Morphism<T2, R>, b: Morphism<T1, T2>) => o_110<T1, T2, R>;
    <$SEL extends "01">(): <T1, T2>(_a: PH, b: Morphism<T1, T2>) => o_010<T1, T2>;
    <$SEL extends "1">(): <T2, R>(a: Morphism<T2, R>) => o_100<T2, R>;
    <T1, T2, R>(a: Morphism<T2, R>, b: Morphism<T1, T2>, value: T1): o_111<R>;
};
type o_100<T2, R> = {
    <T1>(b: Morphism<T1, T2>): o_110<T1, T2, R>;
    <T1>(_b: PH, value: T1): o_101<T1, T2, R>;
    <$SEL extends "11">(): <T1>(b: Morphism<T1, T2>, value: T1) => o_111<R>;
    <$SEL extends "01">(): <T1>(_b: PH, value: T1) => o_101<T1, T2, R>;
    <$SEL extends "1">(): <T1>(b: Morphism<T1, T2>) => o_110<T1, T2, R>;
    <T1>(b: Morphism<T1, T2>, value: T1): o_111<R>;
};
type o_010<T1, T2> = {
    <R>(a: Morphism<T2, R>): o_110<T1, T2, R>;
    (_a: PH, value: T1): o_011<T1, T2>;
    <$SEL extends "11">(): <R>(a: Morphism<T2, R>, value: T1) => o_111<R>;
    <$SEL extends "01">(): (_a: PH, value: T1) => o_011<T1, T2>;
    <$SEL extends "1">(): <R>(a: Morphism<T2, R>) => o_110<T1, T2, R>;
    <R>(a: Morphism<T2, R>, value: T1): o_111<R>;
};
type o_110<T1, T2, R> = {
    (value: T1): o_111<R>;
};
type o_001<T1> = {
    <T2, R>(a: Morphism<T2, R>): o_101<T1, T2, R>;
    <T2>(_a: PH, b: Morphism<T1, T2>): o_011<T1, T2>;
    <$SEL extends "11">(): <T2, R>(a: Morphism<T2, R>, b: Morphism<T1, T2>) => o_111<R>;
    <$SEL extends "01">(): <T2>(_a: PH, b: Morphism<T1, T2>) => o_011<T1, T2>;
    <$SEL extends "1">(): <T2, R>(a: Morphism<T2, R>) => o_101<T1, T2, R>;
    <T2, R>(a: Morphism<T2, R>, b: Morphism<T1, T2>): o_111<R>;
};
type o_101<T1, T2, R> = {
    (b: Morphism<T1, T2>): o_111<R>;
};
type o_011<T1, T2> = {
    <R>(a: Morphism<T2, R>): o_111<R>;
};
type o_111<R> = R;
export = o;
