Splits a collection into slices of the specified length.

@func
@memberOf R
@since v0.16.0
@category List
@sig Number -> [a] -> [[a]]
@sig Number -> String -> [String]
@param {Number} n
@param {Array} list
@return {Array}
@example

     R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]
     R.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']
