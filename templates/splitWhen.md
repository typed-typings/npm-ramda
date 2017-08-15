Takes a list and a predicate and returns a pair of lists with the following properties:

 - the result of concatenating the two output lists is equivalent to the input list;
 - none of the elements of the first output list satisfies the predicate; and
 - if the second output list is non-empty, its first element satisfies the predicate.

@func
@memberOf R
@since v0.19.0
@category List
@sig (a -> Boolean) -> [a] -> [[a], [a]]
@param {Function} pred The predicate that determines where the array is split.
@param {Array} list The array to be split.
@return {Array}
@example

     R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]);   //=> [[1], [2, 3, 1, 2, 3]]
