import { CurriedFunction0, CurriedFunction1, CurriedFunction2, CurriedFunction3, CurriedFunction4, CurriedFunction5, CurriedFunction6 } from "./$curriedFunctions";
import { Constructor, Variadic } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const constructN: constructN_00;
type constructN_00 = {
    /**
     * Wraps a constructor function inside a curried function that can be called
     * with the same arguments and returns the same type. The arity of the function
     * returned is specified to allow using variadic constructor functions.
     *
     * @func
     * @memberOf R
     * @since v0.4.0
     * @category Function
     * @sig Number -> (* -> {*}) -> (* -> {*})
     * @param {Number} n The arity of the constructor function.
     * @param {Function} Fn The constructor function to wrap.
     * @return {Function} A wrapped, curried constructor function.
     * @example
     *
     *      // Variadic Constructor function
     *      function Salad() {
     *        this.ingredients = arguments;
     *      }
     *
     *      Salad.prototype.recipe = function() {
     *        var instructions = R.map(ingredient => 'Add a dollop of ' + ingredient, this.ingredients);
     *        return R.join('\n', instructions);
     *      };
     *
     *      var ThreeLayerSalad = R.constructN(3, Salad);
     *
     *      // Notice we no longer need the 'new' keyword, and the constructor is curried for 3 arguments.
     *      var salad = ThreeLayerSalad('Mayonnaise')('Potato Chips')('Ketchup');
     *
     *      console.log(salad.recipe());
     *      // Add a dollop of Mayonnaise
     *      // Add a dollop of Potato Chips
     *      // Add a dollop of Ketchup
     */
    (n: 0): constructN_0arity_10;
    (n: 1): constructN_1arity_10;
    (n: 2): constructN_2arity_10;
    (n: 3): constructN_3arity_10;
    (n: 4): constructN_4arity_10;
    (n: 5): constructN_5arity_10;
    (n: 6): constructN_6arity_10;
    (n: number): constructN_variadic_10;
    <R>(_n: PH, constructor: new (...args: any[]) => R): constructN_0arity_01<R>;
    <T1, R>(_n: PH, constructor: new (v1: T1, ...args: any[]) => R): constructN_1arity_01<T1, R>;
    <T1, T2, R>(_n: PH, constructor: new (v1: T1, v2: T2, ...args: any[]) => R): constructN_2arity_01<T1, T2, R>;
    <T1, T2, T3, R>(_n: PH, constructor: new (v1: T1, v2: T2, v3: T3, ...args: any[]) => R): constructN_3arity_01<T1, T2, T3, R>;
    <T1, T2, T3, T4, R>(_n: PH, constructor: new (v1: T1, v2: T2, v3: T3, v4: T4, ...args: any[]) => R): constructN_4arity_01<T1, T2, T3, T4, R>;
    <T1, T2, T3, T4, T5, R>(_n: PH, constructor: new (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, ...args: any[]) => R): constructN_5arity_01<T1, T2, T3, T4, T5, R>;
    <T1, T2, T3, T4, T5, T6, R>(_n: PH, constructor: new (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, ...args: any[]) => R): constructN_6arity_01<T1, T2, T3, T4, T5, T6, R>;
    <R>(_n: PH, constructor: Constructor<R>): constructN_variadic_01<R>;
    <R>(n: 0, constructor: new (...args: any[]) => R): constructN_0arity_11<R>;
    <T1, R>(n: 1, constructor: new (v1: T1, ...args: any[]) => R): constructN_1arity_11<T1, R>;
    <T1, T2, R>(n: 2, constructor: new (v1: T1, v2: T2, ...args: any[]) => R): constructN_2arity_11<T1, T2, R>;
    <T1, T2, T3, R>(n: 3, constructor: new (v1: T1, v2: T2, v3: T3, ...args: any[]) => R): constructN_3arity_11<T1, T2, T3, R>;
    <T1, T2, T3, T4, R>(n: 4, constructor: new (v1: T1, v2: T2, v3: T3, v4: T4, ...args: any[]) => R): constructN_4arity_11<T1, T2, T3, T4, R>;
    <T1, T2, T3, T4, T5, R>(n: 5, constructor: new (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, ...args: any[]) => R): constructN_5arity_11<T1, T2, T3, T4, T5, R>;
    <T1, T2, T3, T4, T5, T6, R>(n: 6, constructor: new (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, ...args: any[]) => R): constructN_6arity_11<T1, T2, T3, T4, T5, T6, R>;
    <$SEL extends "11", $KIND extends "variadic">(): <R>(n: number, constructor: Constructor<R>) => constructN_variadic_11<R>;
    <$SEL extends "11", $KIND extends "6arity">(): <T1, T2, T3, T4, T5, T6, R>(n: 6, constructor: new (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, ...args: any[]) => R) => constructN_6arity_11<T1, T2, T3, T4, T5, T6, R>;
    <$SEL extends "11", $KIND extends "5arity">(): <T1, T2, T3, T4, T5, R>(n: 5, constructor: new (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, ...args: any[]) => R) => constructN_5arity_11<T1, T2, T3, T4, T5, R>;
    <$SEL extends "11", $KIND extends "4arity">(): <T1, T2, T3, T4, R>(n: 4, constructor: new (v1: T1, v2: T2, v3: T3, v4: T4, ...args: any[]) => R) => constructN_4arity_11<T1, T2, T3, T4, R>;
    <$SEL extends "11", $KIND extends "3arity">(): <T1, T2, T3, R>(n: 3, constructor: new (v1: T1, v2: T2, v3: T3, ...args: any[]) => R) => constructN_3arity_11<T1, T2, T3, R>;
    <$SEL extends "11", $KIND extends "2arity">(): <T1, T2, R>(n: 2, constructor: new (v1: T1, v2: T2, ...args: any[]) => R) => constructN_2arity_11<T1, T2, R>;
    <$SEL extends "11", $KIND extends "1arity">(): <T1, R>(n: 1, constructor: new (v1: T1, ...args: any[]) => R) => constructN_1arity_11<T1, R>;
    <$SEL extends "11", $KIND extends "0arity">(): <R>(n: 0, constructor: new (...args: any[]) => R) => constructN_0arity_11<R>;
    <$SEL extends "01", $KIND extends "variadic">(): <R>(_n: PH, constructor: Constructor<R>) => constructN_variadic_01<R>;
    <$SEL extends "01", $KIND extends "6arity">(): <T1, T2, T3, T4, T5, T6, R>(_n: PH, constructor: new (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, ...args: any[]) => R) => constructN_6arity_01<T1, T2, T3, T4, T5, T6, R>;
    <$SEL extends "01", $KIND extends "5arity">(): <T1, T2, T3, T4, T5, R>(_n: PH, constructor: new (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, ...args: any[]) => R) => constructN_5arity_01<T1, T2, T3, T4, T5, R>;
    <$SEL extends "01", $KIND extends "4arity">(): <T1, T2, T3, T4, R>(_n: PH, constructor: new (v1: T1, v2: T2, v3: T3, v4: T4, ...args: any[]) => R) => constructN_4arity_01<T1, T2, T3, T4, R>;
    <$SEL extends "01", $KIND extends "3arity">(): <T1, T2, T3, R>(_n: PH, constructor: new (v1: T1, v2: T2, v3: T3, ...args: any[]) => R) => constructN_3arity_01<T1, T2, T3, R>;
    <$SEL extends "01", $KIND extends "2arity">(): <T1, T2, R>(_n: PH, constructor: new (v1: T1, v2: T2, ...args: any[]) => R) => constructN_2arity_01<T1, T2, R>;
    <$SEL extends "01", $KIND extends "1arity">(): <T1, R>(_n: PH, constructor: new (v1: T1, ...args: any[]) => R) => constructN_1arity_01<T1, R>;
    <$SEL extends "01", $KIND extends "0arity">(): <R>(_n: PH, constructor: new (...args: any[]) => R) => constructN_0arity_01<R>;
    <$SEL extends "1", $KIND extends "variadic">(): (n: number) => constructN_variadic_10;
    <$SEL extends "1", $KIND extends "6arity">(): (n: 6) => constructN_6arity_10;
    <$SEL extends "1", $KIND extends "5arity">(): (n: 5) => constructN_5arity_10;
    <$SEL extends "1", $KIND extends "4arity">(): (n: 4) => constructN_4arity_10;
    <$SEL extends "1", $KIND extends "3arity">(): (n: 3) => constructN_3arity_10;
    <$SEL extends "1", $KIND extends "2arity">(): (n: 2) => constructN_2arity_10;
    <$SEL extends "1", $KIND extends "1arity">(): (n: 1) => constructN_1arity_10;
    <$SEL extends "1", $KIND extends "0arity">(): (n: 0) => constructN_0arity_10;
    <R>(n: number, constructor: Constructor<R>): constructN_variadic_11<R>;
};
type constructN_0arity_10 = {
    <R>(constructor: new (...args: any[]) => R): constructN_0arity_11<R>;
};
type constructN_1arity_10 = {
    <T1, R>(constructor: new (v1: T1, ...args: any[]) => R): constructN_1arity_11<T1, R>;
};
type constructN_2arity_10 = {
    <T1, T2, R>(constructor: new (v1: T1, v2: T2, ...args: any[]) => R): constructN_2arity_11<T1, T2, R>;
};
type constructN_3arity_10 = {
    <T1, T2, T3, R>(constructor: new (v1: T1, v2: T2, v3: T3, ...args: any[]) => R): constructN_3arity_11<T1, T2, T3, R>;
};
type constructN_4arity_10 = {
    <T1, T2, T3, T4, R>(constructor: new (v1: T1, v2: T2, v3: T3, v4: T4, ...args: any[]) => R): constructN_4arity_11<T1, T2, T3, T4, R>;
};
type constructN_5arity_10 = {
    <T1, T2, T3, T4, T5, R>(constructor: new (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, ...args: any[]) => R): constructN_5arity_11<T1, T2, T3, T4, T5, R>;
};
type constructN_6arity_10 = {
    <T1, T2, T3, T4, T5, T6, R>(constructor: new (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, ...args: any[]) => R): constructN_6arity_11<T1, T2, T3, T4, T5, T6, R>;
};
type constructN_variadic_10 = {
    <R>(constructor: Constructor<R>): constructN_variadic_11<R>;
};
type constructN_0arity_01<R> = {
    (n: 0): constructN_0arity_11<R>;
};
type constructN_1arity_01<T1, R> = {
    (n: 1): constructN_1arity_11<T1, R>;
};
type constructN_2arity_01<T1, T2, R> = {
    (n: 2): constructN_2arity_11<T1, T2, R>;
};
type constructN_3arity_01<T1, T2, T3, R> = {
    (n: 3): constructN_3arity_11<T1, T2, T3, R>;
};
type constructN_4arity_01<T1, T2, T3, T4, R> = {
    (n: 4): constructN_4arity_11<T1, T2, T3, T4, R>;
};
type constructN_5arity_01<T1, T2, T3, T4, T5, R> = {
    (n: 5): constructN_5arity_11<T1, T2, T3, T4, T5, R>;
};
type constructN_6arity_01<T1, T2, T3, T4, T5, T6, R> = {
    (n: 6): constructN_6arity_11<T1, T2, T3, T4, T5, T6, R>;
};
type constructN_variadic_01<R> = {
    (n: number): constructN_variadic_11<R>;
};
type constructN_0arity_11<R> = CurriedFunction0<R>;
type constructN_1arity_11<T1, R> = CurriedFunction1<T1, R>;
type constructN_2arity_11<T1, T2, R> = CurriedFunction2<T1, T2, R>;
type constructN_3arity_11<T1, T2, T3, R> = CurriedFunction3<T1, T2, T3, R>;
type constructN_4arity_11<T1, T2, T3, T4, R> = CurriedFunction4<T1, T2, T3, T4, R>;
type constructN_5arity_11<T1, T2, T3, T4, T5, R> = CurriedFunction5<T1, T2, T3, T4, T5, R>;
type constructN_6arity_11<T1, T2, T3, T4, T5, T6, R> = CurriedFunction6<T1, T2, T3, T4, T5, T6, R>;
type constructN_variadic_11<R> = Variadic<R>;
export = constructN;
