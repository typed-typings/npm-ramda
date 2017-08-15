Returns the median of the given list of numbers.

@func
@memberOf R
@since v0.14.0
@category Math
@sig [Number] -> Number
@param {Array} list
@return {Number}
@see R.mean
@example

     R.median([2, 9, 7]); //=> 7
     R.median([7, 2, 10, 9]); //=> 8
     R.median([]); //=> NaN
