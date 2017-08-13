Returns the larger of its two arguments.

@func
@memberOf R
@since v0.1.0
@category Relation
@sig Ord a => a -> a -> a
@param {*} a
@param {*} b
@return {*}
@see R.maxBy, R.min
@example

     R.max(789, 123); //=> 789
     R.max('a', 'b'); //=> 'b'
