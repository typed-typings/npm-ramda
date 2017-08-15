Returns a function of arity `n` from a (manually) curried function.

@func
@memberOf R
@since v0.14.0
@category Function
@sig Number -> (a -> b) -> (a -> c)
@param {Number} length The arity for the returned function.
@param {Function} fn The function to uncurry.
@return {Function} A new function.
@see R.curry
@example

     var addFour = a => b => c => d => a + b + c + d;

     var uncurriedAddFour = R.uncurryN(4, addFour);
     uncurriedAddFour(1, 2, 3, 4); //=> 10
