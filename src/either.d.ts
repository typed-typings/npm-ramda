import { Variadic } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const either: either_00;
type either_00 = {
    /**
     * A function wrapping calls to the two functions in an `||` operation,
     * returning the result of the first function if it is truth-y and the result
     * of the second function otherwise. Note that this is short-circuited,
     * meaning that the second function will not be invoked if the first returns a
     * truth-y value.
     *
     * In addition to functions, `R.either` also accepts any fantasy-land compatible
     * applicative functor.
     *
     * @func
     * @memberOf R
     * @since v0.12.0
     * @category Logic
     * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
     * @param {Function} f a predicate
     * @param {Function} g another predicate
     * @return {Function} a function that applies its arguments to `f` and `g` and `||`s their outputs together.
     * @see R.or
     * @example
     *
     *      var gt10 = x => x > 10;
     *      var even = x => x % 2 === 0;
     *      var f = R.either(gt10, even);
     *      f(101); //=> true
     *      f(8); //=> true
     */
    <F extends Variadic<boolean>>(fn1: F): either_10<F>;
    <F extends Variadic<boolean>>(_fn1: PH, fn2: F): either_01<F>;
    <$SEL extends "11">(): <F extends Variadic<boolean>>(fn1: F, fn2: F) => either_11<F>;
    <$SEL extends "01">(): <F extends Variadic<boolean>>(_fn1: PH, fn2: F) => either_01<F>;
    <$SEL extends "1">(): <F extends Variadic<boolean>>(fn1: F) => either_10<F>;
    <F extends Variadic<boolean>>(fn1: F, fn2: F): either_11<F>;
};
type either_10<F extends Variadic<boolean>> = {
    (fn2: F): either_11<F>;
};
type either_01<F extends Variadic<boolean>> = {
    (fn1: F): either_11<F>;
};
type either_11<F extends Variadic<boolean>> = F;
export = either;
