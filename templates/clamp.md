Restricts a number to be within a range.

Also works for other ordered types such as Strings and Dates.

@func
@memberOf R
@since v0.20.0
@category Relation
@sig Ord a => a -> a -> a -> a
@param {Number} minimum The lower limit of the clamp (inclusive)
@param {Number} maximum The upper limit of the clamp (inclusive)
@param {Number} value Value to be clamped
@return {Number} Returns `minimum` when `val < minimum`, `maximum` when `val > maximum`, returns `val` otherwise
@example

     R.clamp(1, 10, -5) // => 1
     R.clamp(1, 10, 15) // => 10
     R.clamp(1, 10, 4)  // => 4
