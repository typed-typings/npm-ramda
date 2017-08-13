Turns a named method with a specified arity into a function that can be
called directly supplied with arguments and a target object.

The returned function is curried and accepts `arity + 1` parameters where
the final parameter is the target object.

@func
@memberOf R
@since v0.1.0
@category Function
@sig Number -> String -> (a -> b -> ... -> n -> Object -> *)
@param {Number} arity Number of arguments the returned function should take
       before the target object.
@param {String} method Name of the method to call.
@return {Function} A new curried function.
@see R.construct
@example

     var sliceFrom = R.invoker(1, 'slice');
     sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
     var sliceFrom6 = R.invoker(2, 'slice')(6);
     sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
@symb R.invoker(0, 'method')(o) = o['method']()
@symb R.invoker(1, 'method')(a, o) = o['method'](a)
@symb R.invoker(2, 'method')(a, b, o) = o['method'](a, b)
