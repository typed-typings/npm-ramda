Returns the smaller of its two arguments.

@func
@memberOf R
@since v0.1.0
@category Relation
@sig Ord a => a -> a -> a
@param {*} a
@param {*} b
@return {*}
@see R.minBy, R.max
@example

     R.min(789, 123); //=> 123
     R.min('a', 'b'); //=> 'a'
