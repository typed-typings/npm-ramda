Wraps a function of any arity (including nullary) in a function that accepts
exactly `n` parameters. Any extraneous parameters will not be passed to the
supplied function.

@func
@memberOf R
@since v0.1.0
@category Function
@sig Number -> (* -> a) -> (* -> a)
@param {Number} n The desired arity of the new function.
@param {Function} fn The function to wrap.
@return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
        arity `n`.
@see R.binary, R.unary
@example

     var takesTwoArgs = (a, b) => [a, b];

     takesTwoArgs.length; //=> 2
     takesTwoArgs(1, 2); //=> [1, 2]

     var takesOneArg = R.nAry(1, takesTwoArgs);
     takesOneArg.length; //=> 1
     // Only `n` arguments are passed to the wrapped function
     takesOneArg(1, 2); //=> [1, undefined]
@symb R.nAry(0, f)(a, b) = f()
@symb R.nAry(1, f)(a, b) = f(a)
@symb R.nAry(2, f)(a, b) = f(a, b)
