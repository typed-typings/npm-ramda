Returns a new function much like the supplied one, except that the first two
arguments' order is reversed.

@func
@memberOf R
@since v0.1.0
@category Function
@sig (a -> b -> c -> ... -> z) -> (b -> a -> c -> ... -> z)
@param {Function} fn The function to invoke with its first two parameters reversed.
@return {*} The result of invoking `fn` with its first two parameters' order reversed.
@example

     var mergeThree = (a, b, c) => [].concat(a, b, c);

     mergeThree(1, 2, 3); //=> [1, 2, 3]

     R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
@symb R.flip(f)(a, b, c) = f(b, a, c)
