Returns the result of "setting" the portion of the given data structure
focused by the given lens to the result of applying the given function to
the focused value.

@func
@memberOf R
@since v0.16.0
@category Object
@typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
@sig Lens s a -> (a -> a) -> s -> s
@param {Lens} lens
@param {*} v
@param {*} x
@return {*}
@see R.prop, R.lensIndex, R.lensProp
@example

     var headLens = R.lensIndex(0);

     R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
