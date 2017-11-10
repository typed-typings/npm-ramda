import { Variadic } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const partialRight: partialRight_00;
type partialRight_00 = {
    /**
     * Takes a function `f` and a list of arguments, and returns a function `g`.
     * When applied, `g` returns the result of applying `f` to the arguments
     * provided to `g` followed by the arguments provided initially.
     *
     * @func
     * @memberOf R
     * @since v0.10.0
     * @category Function
     * @sig ((a, b, c, ..., n) -> x) -> [d, e, f, ..., n] -> ((a, b, c, ...) -> x)
     * @param {Function} f
     * @param {Array} args
     * @return {Function}
     * @see R.partial
     * @example
     *
     *      var greet = (salutation, title, firstName, lastName) =>
     *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
     *
     *      var greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);
     *
     *      greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'
     * @symb R.partialRight(f, [a, b])(c, d) = f(c, d, a, b)
     */
    <T>(fn: Variadic<T>): partialRight_10<T>;
    (_fn: PH, args: any[]): partialRight_01;
    <$SEL extends "11">(): <T>(fn: Variadic<T>, args: any[]) => partialRight_11<T>;
    <$SEL extends "01">(): (_fn: PH, args: any[]) => partialRight_01;
    <$SEL extends "1">(): <T>(fn: Variadic<T>) => partialRight_10<T>;
    <T>(fn: Variadic<T>, args: any[]): partialRight_11<T>;
};
type partialRight_10<T> = {
    (args: any[]): partialRight_11<T>;
};
type partialRight_01 = {
    <T>(fn: Variadic<T>): partialRight_11<T>;
};
type partialRight_11<T> = Variadic<T>;
export = partialRight;
