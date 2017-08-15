Checks if a list starts with the provided values

@func
@memberOf R
@since v0.24.0
@category List
@sig [a] -> Boolean
@sig String -> Boolean
@param {*} prefix
@param {*} list
@return {Boolean}
@example

     R.startsWith('a', 'abc')                //=> true
     R.startsWith('b', 'abc')                //=> false
     R.startsWith(['a'], ['a', 'b', 'c'])    //=> true
     R.startsWith(['b'], ['a', 'b', 'c'])    //=> false
