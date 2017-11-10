import { Placeholder as PH } from "./$placeholder";
declare const bind: bind_00;
type bind_00 = {
    /**
     * Creates a function that is bound to a context.
     * Note: `R.bind` does not provide the additional argument-binding capabilities of
     * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
     *
     * @func
     * @memberOf R
     * @since v0.6.0
     * @category Function
     * @category Object
     * @sig (* -> *) -> {*} -> (* -> *)
     * @param {Function} fn The function to bind to context
     * @param {Object} thisObj The context to bind `fn` to
     * @return {Function} A function that will execute in the context of `thisObj`.
     * @see R.partial
     * @example
     *
     *      var log = R.bind(console.log, console);
     *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
     *      // logs {a: 2}
     * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
     */
    <T extends Function>(fn: T): bind_10<T>;
    (_fn: PH, context: any): bind_01;
    <$SEL extends "11">(): <T extends Function>(fn: T, context: any) => bind_11<T>;
    <$SEL extends "01">(): (_fn: PH, context: any) => bind_01;
    <$SEL extends "1">(): <T extends Function>(fn: T) => bind_10<T>;
    <T extends Function>(fn: T, context: any): bind_11<T>;
};
type bind_10<T extends Function> = {
    (context: any): bind_11<T>;
};
type bind_01 = {
    <T extends Function>(fn: T): bind_11<T>;
};
type bind_11<T extends Function> = T;
export = bind;
