Returns the position of the first occurrence of an item in an array, or -1
if the item is not included in the array. [`R.equals`](#equals) is used to
determine equality.

@func
@memberOf R
@since v0.1.0
@category List
@sig a -> [a] -> Number
@param {*} target The item to find.
@param {Array} xs The array to search in.
@return {Number} the index of the target, or -1 if the target is not found.
@see R.lastIndexOf
@example

     R.indexOf(3, [1,2,3,4]); //=> 2
     R.indexOf(10, [1,2,3,4]); //=> -1
