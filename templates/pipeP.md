Performs left-to-right composition of one or more Promise-returning
functions. The leftmost function may have any arity; the remaining functions
must be unary.

@func
@memberOf R
@since v0.10.0
@category Function
@sig ((a -> Promise b), (b -> Promise c), ..., (y -> Promise z)) -> (a -> Promise z)
@param {...Function} functions
@return {Function}
@see R.composeP
@example

     //  followersForUser :: String -> Promise [User]
     var followersForUser = R.pipeP(db.getUserById, db.getFollowers);
