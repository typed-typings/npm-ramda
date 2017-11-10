import { ManualLens } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const lens: lens_00;
type lens_00 = {
    /**
     * Returns a lens for the given getter and setter functions. The getter "gets"
     * the value of the focus; the setter "sets" the value of the focus. The setter
     * should not mutate the data structure.
     *
     * @func
     * @memberOf R
     * @since v0.8.0
     * @category Object
     * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
     * @sig (s -> a) -> ((a, s) -> s) -> Lens s a
     * @param {Function} getter
     * @param {Function} setter
     * @return {Lens}
     * @see R.view, R.set, R.over, R.lensIndex, R.lensProp
     * @example
     *
     *      var xLens = R.lens(R.prop('x'), R.assoc('x'));
     *
     *      R.view(xLens, {x: 1, y: 2});            //=> 1
     *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
     *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
     */
    <T, U>(getter: (target: U) => T): lens_10<T, U>;
    <T, U>(_getter: PH, setter: (focus: T, target: U) => U): lens_01<T, U>;
    <$SEL extends "11">(): <T, U>(getter: (target: U) => T, setter: (focus: T, target: U) => U) => lens_11<T, U>;
    <$SEL extends "01">(): <T, U>(_getter: PH, setter: (focus: T, target: U) => U) => lens_01<T, U>;
    <$SEL extends "1">(): <T, U>(getter: (target: U) => T) => lens_10<T, U>;
    <T, U>(getter: (target: U) => T, setter: (focus: T, target: U) => U): lens_11<T, U>;
};
type lens_10<T, U> = {
    (setter: (focus: T, target: U) => U): lens_11<T, U>;
};
type lens_01<T, U> = {
    (getter: (target: U) => T): lens_11<T, U>;
};
type lens_11<T, U> = ManualLens<T, U>;
export = lens;
