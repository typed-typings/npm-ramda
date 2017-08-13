Returns `true` if the specified object property satisfies the given
predicate; `false` otherwise.

@func
@memberOf R
@since v0.16.0
@category Logic
@sig (a -> Boolean) -> String -> {String: a} -> Boolean
@param {Function} pred
@param {String} name
@param {*} obj
@return {Boolean}
@see R.propEq, R.propIs
@example

     R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
