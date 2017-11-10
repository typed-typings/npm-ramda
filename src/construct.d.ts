import { CurriedFunction0, CurriedFunction1, CurriedFunction2, CurriedFunction3, CurriedFunction4, CurriedFunction5, CurriedFunction6 } from "./$curriedFunctions";
import { Constructor, Variadic } from "./$types";
declare const construct: construct_0;
type construct_0 = {
    /**
     * Wraps a constructor function inside a curried function that can be called
     * with the same arguments and returns the same type.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category Function
     * @sig (* -> {*}) -> (* -> {*})
     * @param {Function} fn The constructor function to wrap.
     * @return {Function} A wrapped, curried constructor function.
     * @see R.invoker
     * @example
     *
     *      // Constructor function
     *      function Animal(kind) {
     *        this.kind = kind;
     *      };
     *      Animal.prototype.sighting = function() {
     *        return "It's a " + this.kind + "!";
     *      }
     *
     *      var AnimalConstructor = R.construct(Animal)
     *
     *      // Notice we no longer need the 'new' keyword:
     *      AnimalConstructor('Pig'); //=> {"kind": "Pig", "sighting": function (){...}};
     *
     *      var animalTypes = ["Lion", "Tiger", "Bear"];
     *      var animalSighting = R.invoker(0, 'sighting');
     *      var sightNewAnimal = R.compose(animalSighting, AnimalConstructor);
     *      R.map(sightNewAnimal, animalTypes); //=> ["It's a Lion!", "It's a Tiger!", "It's a Bear!"]
     */
    <R>(constructor: new () => R): construct_0arity_1<R>;
    <T1, R>(constructor: new (v1: T1) => R): construct_1arity_1<T1, R>;
    <T1, T2, R>(constructor: new (v1: T1, v2: T2) => R): construct_2arity_1<T1, T2, R>;
    <T1, T2, T3, R>(constructor: new (v1: T1, v2: T2, v3: T3) => R): construct_3arity_1<T1, T2, T3, R>;
    <T1, T2, T3, T4, R>(constructor: new (v1: T1, v2: T2, v3: T3, v4: T4) => R): construct_4arity_1<T1, T2, T3, T4, R>;
    <T1, T2, T3, T4, T5, R>(constructor: new (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => R): construct_5arity_1<T1, T2, T3, T4, T5, R>;
    <T1, T2, T3, T4, T5, T6, R>(constructor: new (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R): construct_6arity_1<T1, T2, T3, T4, T5, T6, R>;
    <$SEL extends "1", $KIND extends "variadic">(): <R>(constructor: Constructor<R>) => construct_variadic_1<R>;
    <$SEL extends "1", $KIND extends "6arity">(): <T1, T2, T3, T4, T5, T6, R>(constructor: new (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R) => construct_6arity_1<T1, T2, T3, T4, T5, T6, R>;
    <$SEL extends "1", $KIND extends "5arity">(): <T1, T2, T3, T4, T5, R>(constructor: new (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => R) => construct_5arity_1<T1, T2, T3, T4, T5, R>;
    <$SEL extends "1", $KIND extends "4arity">(): <T1, T2, T3, T4, R>(constructor: new (v1: T1, v2: T2, v3: T3, v4: T4) => R) => construct_4arity_1<T1, T2, T3, T4, R>;
    <$SEL extends "1", $KIND extends "3arity">(): <T1, T2, T3, R>(constructor: new (v1: T1, v2: T2, v3: T3) => R) => construct_3arity_1<T1, T2, T3, R>;
    <$SEL extends "1", $KIND extends "2arity">(): <T1, T2, R>(constructor: new (v1: T1, v2: T2) => R) => construct_2arity_1<T1, T2, R>;
    <$SEL extends "1", $KIND extends "1arity">(): <T1, R>(constructor: new (v1: T1) => R) => construct_1arity_1<T1, R>;
    <$SEL extends "1", $KIND extends "0arity">(): <R>(constructor: new () => R) => construct_0arity_1<R>;
    <R>(constructor: Constructor<R>): construct_variadic_1<R>;
};
type construct_0arity_1<R> = CurriedFunction0<R>;
type construct_1arity_1<T1, R> = CurriedFunction1<T1, R>;
type construct_2arity_1<T1, T2, R> = CurriedFunction2<T1, T2, R>;
type construct_3arity_1<T1, T2, T3, R> = CurriedFunction3<T1, T2, T3, R>;
type construct_4arity_1<T1, T2, T3, T4, R> = CurriedFunction4<T1, T2, T3, T4, R>;
type construct_5arity_1<T1, T2, T3, T4, T5, R> = CurriedFunction5<T1, T2, T3, T4, T5, R>;
type construct_6arity_1<T1, T2, T3, T4, T5, T6, R> = CurriedFunction6<T1, T2, T3, T4, T5, T6, R>;
type construct_variadic_1<R> = Variadic<R>;
export = construct;
