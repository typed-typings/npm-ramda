"lifts" a function to be the specified arity, so that it may "map over" that
many lists, Functions or other objects that satisfy the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).

@func
@memberOf R
@since v0.7.0
@category Function
@sig Number -> (*... -> *) -> ([*]... -> [*])
@param {Function} fn The function to lift into higher context
@return {Function} The lifted function.
@see R.lift, R.ap
@example

     var madd3 = R.liftN(3, (...args) => R.sum(args));
     madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
