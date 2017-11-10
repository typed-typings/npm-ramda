import { Evolver } from "./$operation";
import { Placeholder as PH } from "./$placeholder";
declare const evolve: evolve_00;
type evolve_00 = {
    /**
     * Creates a new object by recursively evolving a shallow copy of `object`,
     * according to the `transformation` functions. All non-primitive properties
     * are copied by reference.
     *
     * A `transformation` function will not be invoked if its corresponding key
     * does not exist in the evolved object.
     *
     * @func
     * @memberOf R
     * @since v0.9.0
     * @category Object
     * @sig {k: (v -> v)} -> {k: v} -> {k: v}
     * @param {Object} transformations The object specifying transformation functions to apply
     *        to the object.
     * @param {Object} object The object to be transformed.
     * @return {Object} The transformed object.
     * @example
     *
     *      var tomato  = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
     *      var transformations = {
     *        firstName: R.trim,
     *        lastName: R.trim, // Will not get invoked.
     *        data: {elapsed: R.add(1), remaining: R.add(-1)}
     *      };
     *      R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
     */
    <T>(transformations: Evolver<T>): evolve_10<T>;
    <T, U extends T>(_transformations: PH, object: U): evolve_01<T, U>;
    <$SEL extends "11">(): <T, U extends T>(transformations: Evolver<T>, object: U) => evolve_11<T, U>;
    <$SEL extends "01">(): <T, U extends T>(_transformations: PH, object: U) => evolve_01<T, U>;
    <$SEL extends "1">(): <T>(transformations: Evolver<T>) => evolve_10<T>;
    <T, U extends T>(transformations: Evolver<T>, object: U): evolve_11<T, U>;
};
type evolve_10<T> = {
    <U extends T>(object: U): evolve_11<T, U>;
};
type evolve_01<T, U extends T> = {
    (transformations: Evolver<T>): evolve_11<T, U>;
};
type evolve_11<T, U extends T> = U;
export = evolve;
