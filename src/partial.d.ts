import { Variadic } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const partial: partial_00;
type partial_00 = {
    /**
     * Takes a function `f` and a list of arguments, and returns a function `g`.
     * When applied, `g` returns the result of applying `f` to the arguments
     * provided initially followed by the arguments provided to `g`.
     *
     * @func
     * @memberOf R
     * @since v0.10.0
     * @category Function
     * @sig ((a, b, c, ..., n) -> x) -> [a, b, c, ...] -> ((d, e, f, ..., n) -> x)
     * @param {Function} f
     * @param {Array} args
     * @return {Function}
     * @see R.partialRight
     * @example
     *
     *      var multiply2 = (a, b) => a * b;
     *      var double = R.partial(multiply2, [2]);
     *      double(2); //=> 4
     *
     *      var greet = (salutation, title, firstName, lastName) =>
     *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
     *
     *      var sayHello = R.partial(greet, ['Hello']);
     *      var sayHelloToMs = R.partial(sayHello, ['Ms.']);
     *      sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'
     * @symb R.partial(f, [a, b])(c, d) = f(a, b, c, d)
     */
    <T>(fn: Variadic<T>): partial_10<T>;
    (_fn: PH, args: any[]): partial_01;
    <$SEL extends "11">(): <T>(fn: Variadic<T>, args: any[]) => partial_11<T>;
    <$SEL extends "01">(): (_fn: PH, args: any[]) => partial_01;
    <$SEL extends "1">(): <T>(fn: Variadic<T>) => partial_10<T>;
    <T>(fn: Variadic<T>, args: any[]): partial_11<T>;
};
type partial_10<T> = {
    (args: any[]): partial_11<T>;
};
type partial_01 = {
    <T>(fn: Variadic<T>): partial_11<T>;
};
type partial_11<T> = Variadic<T>;
export = partial;
