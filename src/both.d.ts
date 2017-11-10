import { Variadic } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const both: both_00;
type both_00 = {
    /**
     * A function which calls the two provided functions and returns the `&&`
     * of the results.
     * It returns the result of the first function if it is false-y and the result
     * of the second function otherwise. Note that this is short-circuited,
     * meaning that the second function will not be invoked if the first returns a
     * false-y value.
     *
     * In addition to functions, `R.both` also accepts any fantasy-land compatible
     * applicative functor.
     *
     * @func
     * @memberOf R
     * @since v0.12.0
     * @category Logic
     * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
     * @param {Function} f A predicate
     * @param {Function} g Another predicate
     * @return {Function} a function that applies its arguments to `f` and `g` and `&&`s their outputs together.
     * @see R.and
     * @example
     *
     *      var gt10 = R.gt(R.__, 10)
     *      var lt20 = R.lt(R.__, 20)
     *      var f = R.both(gt10, lt20);
     *      f(15); //=> true
     *      f(30); //=> false
     */
    <F extends Variadic<boolean>>(fn1: F): both_10<F>;
    <F extends Variadic<boolean>>(_fn1: PH, fn2: F): both_01<F>;
    <$SEL extends "11">(): <F extends Variadic<boolean>>(fn1: F, fn2: F) => both_11<F>;
    <$SEL extends "01">(): <F extends Variadic<boolean>>(_fn1: PH, fn2: F) => both_01<F>;
    <$SEL extends "1">(): <F extends Variadic<boolean>>(fn1: F) => both_10<F>;
    <F extends Variadic<boolean>>(fn1: F, fn2: F): both_11<F>;
};
type both_10<F extends Variadic<boolean>> = {
    (fn2: F): both_11<F>;
};
type both_01<F extends Variadic<boolean>> = {
    (fn1: F): both_11<F>;
};
type both_11<F extends Variadic<boolean>> = F;
export = both;
